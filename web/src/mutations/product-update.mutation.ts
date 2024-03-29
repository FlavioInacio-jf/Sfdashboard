/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { QueryKeys } from '../enums';
import { productService } from '../services';
import { ProductUpdateType } from '../types';

export const updateProductMutation = () => {
  const { update } = productService;
  const queryClient = useQueryClient();

  const { 'SFDashboard.auth.token': token } = parseCookies();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return useMutation((product: ProductUpdateType) => update(product, config), {
    onError: (err: AxiosError) => {
      if (err?.response?.status === 422) {
        toast.error('Hello, there are fields with validation error.');
      } else {
        toast.error(`Hello, I had a problem updating your product!`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.PRODUCTS);
      toast.success('Hello, your product was updated successfully!');
    }
  });
};
