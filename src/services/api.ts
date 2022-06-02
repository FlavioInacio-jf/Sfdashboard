import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { BASE_URL } from '../constants/endpoints';

interface MessageErrorType {
  message: string;
  code: number;
  path: string;
}
interface FailedRequestsQueueType {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError) => void;
}

let failedRequestsQueue: FailedRequestsQueueType[] = [];
let isRefreshing = false;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.method === 'POST' || config.method === 'PUT' || config.method === 'PATCH') {
    config.headers = {
      'content-type': 'application/json; charset=UTF-8'
    };
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<MessageErrorType>) => {
    if (error.response?.status === 401) {
      if (error.response?.data?.message === 'token expired') {
        const originalConfig = error.config;

        const { 'SFDashboard.auth.refreshToken': refreshToken } = parseCookies();

        if (!isRefreshing) {
          isRefreshing = false;

          api
            .post(
              '/auth/refresh-token',
              {},
              {
                headers: {
                  Authorization: `Bearer ${refreshToken}`
                }
              }
            )
            .then((response) => {
              const { accessToken, refreshToken } = response.data.result;

              setCookie(undefined, 'SFDashboard.auth.token', accessToken, {
                maxAge: 60 * 60 * 3, // 3 hours
                path: '/'
              });

              setCookie(undefined, 'SFDashboard.auth.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 3, // 3 days
                path: '/'
              });

              failedRequestsQueue.forEach((request) => request.onSuccess(accessToken));
              failedRequestsQueue = [];
            })
            .catch((err) => {
              console.error(err);
              destroyCookie(null, 'SFDashboard.auth.token', { path: '/' });
              destroyCookie(null, 'SFDashboard.auth.refreshToken', { path: '/' });

              failedRequestsQueue.forEach((request) => request.onFailure(err));
            })
            .finally(() => (isRefreshing = false));
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers = {
                Authorization: `Bearer ${token}`
              };

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            }
          });
        });
      } else {
        destroyCookie(null, 'SFDashboard.auth.token', { path: '/' });
        destroyCookie(null, 'SFDashboard.auth.refreshToken', { path: '/' });
      }
    }
    return Promise.reject(error);
  }
);
//invalid token! or token missing
export { api };
