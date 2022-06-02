/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { queryKey } from '../../constants/queryKeys';
import { productService } from '../../services/productService';
import { ProductRegisterType, ProductType } from '../../types/productType';

export const createProductMutation = () => {
  const { create } = productService;
  const queryClient = useQueryClient();

  const { 'SFDashboard.auth.token': token } = parseCookies();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return useMutation((product: ProductRegisterType) => create(product, config), {
    onError: (err: AxiosError) => {
      if (err?.response?.status === 422) {
        toast.error('Hello, there are fields with validation error.');
      } else {
        toast.error(`Hello, I had a problem creating your product!`);
      }
    },
    onSuccess: (response, variables) => {
      const product = response.data.result;
      const oldProducts = queryClient.getQueryData<ProductType[]>(queryKey.products) || [];

      queryClient.setQueryData(queryKey.products, [...oldProducts, product]);
      toast.success('Hello, your product was created successfully!');
    }
  });
};
