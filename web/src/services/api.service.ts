import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { parseCookies, setCookie } from 'nookies';
import { signOut } from '../components/Layouts/LayoutDashboard/Sidebar';
import { EndPoints } from '../enums';
import { IApiErrorResponse } from '../types';

let cookies = parseCookies();

interface FailedRequestsQueueType {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError) => void;
}

let failedRequestsQueue: FailedRequestsQueueType[] = [];
let isRefreshing = false;

const api = axios.create({
  baseURL: EndPoints.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 1000
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
  (error: AxiosError<IApiErrorResponse>) => {
    if (error.response?.status === 401) {
      if (error.response?.data?.title === 'token expired') {
        const originalConfig = error.config;
        cookies = parseCookies();

        const { 'SFDashboard.auth.refreshToken': refreshToken } = cookies;
        if (!isRefreshing) {
          isRefreshing = true;

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
              api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

              failedRequestsQueue.forEach((request) => request.onSuccess(accessToken));
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];

              signOut();
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers = {
                Authorization: `Bearer ${token}`
              };

              return resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              return reject(err);
            }
          });
        });
      } else {
        return signOut();
      }
    }

    return Promise.reject(error);
  }
);

export { api };
