import Router from 'next/router';
import { setCookie } from 'nookies';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../enums';
import { api } from '../../services/api';
import { authService } from '../../services/authService';
import { CredentialsType, IErrorResponseType } from '../../types';

export const LoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((credentials: CredentialsType) => authService.login(credentials), {
    onError: (error) => {
      const err = error as IErrorResponseType;

      toast.error(err.response.data.title);
    },
    onSuccess: (response) => {
      const { accessToken, refreshToken, ...rest } = response.data.result;

      queryClient.setQueryData(QueryKeys.SESSION, rest);
      setCookie(undefined, 'SFDashboard.auth.token', accessToken, {
        maxAge: 60 * 60 * 3, // 3 hours
        path: '/'
      });

      setCookie(undefined, 'SFDashboard.auth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 3, // 3 days
        path: '/'
      });

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      Router.push('/products');
    }
  });
};
