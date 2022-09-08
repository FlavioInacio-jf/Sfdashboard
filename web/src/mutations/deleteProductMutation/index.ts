/* eslint-disable react-hooks/rules-of-hooks */
import { parseCookies } from 'nookies';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../enums';
import { productService } from '../../services/productService';
import { ProductType } from '../../types/productType';

export const deleteProductMutation = () => {
  const { remove } = productService;
  const queryClient = useQueryClient();

  const { 'SFDashboard.auth.token': token } = parseCookies();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return useMutation((id: number) => remove(id, config), {
    onError: (err) => {
      console.error(err);
      toast.error(`Hi, I had a problem removing your product!`);
    },
    onSuccess: (result, variables) => {
      const { name } = result.data.result;
      const oldProducts = queryClient.getQueryData<ProductType[]>(QueryKeys.PRODUCTS) || [];

      queryClient.setQueryData(
        QueryKeys.PRODUCTS,
        oldProducts.filter((product) => product.id !== variables)
      );
      toast.success(`Hello, the product ${name} was removed successfully!`);
    }
  });
};
