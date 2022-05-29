/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { queryKey } from '../../constants/queryKeys';
import { productService } from '../../services/productService';

export const deleteProductMutation = () => {
  const { remove } = productService;
  const queryClient = useQueryClient();

  return useMutation((id: number) => remove(id), {
    onError: (err) => {
      console.error(err);
      toast.error(`Hi, I had a problem removing your product!`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.products);
      toast.success('Hello, your product was removed successfully!');
    }
  });
};
