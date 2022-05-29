/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { queryKey } from '../../constants/queryKeys';
import { productService } from '../../services/productService';
import { ProductRegisterType } from '../../types/productType';

export const createProductMutation = () => {
  const { create } = productService;
  const queryClient = useQueryClient();

  return useMutation((product: ProductRegisterType) => create(product), {
    onError: (err) => {
      console.error(err);
      toast.error(`Hello, I had a problem creating your product!`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.products);
      toast.success('Hello, your product was created successfully!');
    }
  });
};