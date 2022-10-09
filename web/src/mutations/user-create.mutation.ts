/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../enums';
import { userService } from '../../services';
import { UserRegisterType } from '../../types/userType';

export const CreateUserMutation = () => {
  const { create } = userService;
  const queryClient = useQueryClient();

  return useMutation((user: UserRegisterType) => create(user), {
    onError: (err: AxiosError) => {
      if (err.response?.status === 409) {
        toast.error(
          'Hello, we already have a user with that username registered in the system! Please enter another username.'
        );
      }
      if (err.response?.status === 422) {
        toast.error(
          'Hello, we had an error creating your user! Please verify that the fields have been spelled correctly!'
        );
      } else {
        toast.error('Hello, we had a problem creating your username! Try later.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.PRODUCTS);
      toast.success(
        'Hello, your username has been successfully created!,Now just go to the home page and access your account'
      );
    }
  });
};
