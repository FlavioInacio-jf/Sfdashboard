import { FC } from 'react';
import { useQuery } from 'react-query';
import { NewProductModal } from '../../components/NewProductModal';
import { TitleStyled } from '../../components/Title/styles';
import { queryKey } from '../../constants/queryKeys';
import { productService } from '../../services/productService';
import { ProductType } from '../../types/productType';

export const Dashboard: FC = () => {
  const { index } = productService;
  const { data } = useQuery<ProductType[]>(queryKey.products, index);
  const products = data || [];

  return (
    <>
      <TitleStyled size="large" weight="600" font="inter">
        My products
      </TitleStyled>

      {products.map((product) => (
        <li key={product.id}>{product.description}</li>
      ))}
      <NewProductModal />
    </>
  );
};
