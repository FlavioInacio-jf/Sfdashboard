import { AxiosError } from 'axios';
import { setCookie } from 'nookies';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { queryKey } from '../../constants/queryKeys';
import { api } from '../../services/api';
import { authService } from '../../services/authService';
import { CredentialsType } from '../../types/credentialsType';

export const LoginMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation((credentials: CredentialsType) => authService.login(credentials), {
    onError: (error) => {
      const err = error as AxiosError;

      if (err?.response?.status === 401) {
        toast.error('Email and/or password incorrect.');
      } else {
        toast.error('Hello, we had an internal error!');
      }
    },
    onSuccess: (response) => {
      const { accessToken, refreshToken, ...rest } = response.data.result;

      queryClient.setQueryData(queryKey.session, rest);
      setCookie(undefined, 'SFDashboard.auth.token', accessToken, {
        maxAge: 60 * 60 * 3, // 3 hours
        path: '/'
      });

      setCookie(undefined, 'SFDashboard.auth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 3, // 3 days
        path: '/'
      });

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      navigate('/products');
    }
  });
};
