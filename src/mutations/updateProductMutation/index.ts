/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { queryKey } from '../../constants/queryKeys';
import { productService } from '../../services/productService';
import { ProductUpdateType } from '../../types/productType';

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
      queryClient.invalidateQueries(queryKey.products);
      toast.success('Hello, your product was updated successfully!');
    }
  });
};
