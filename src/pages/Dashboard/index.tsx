import { FC } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useQuery } from 'react-query';
import emptyImg from '../../assets/empty.svg';
import { Button } from '../../components/Button';
import { Message } from '../../components/Message';
import { NewProductModal } from '../../components/NewProductModal';
import { ProductCard } from '../../components/ProductCard';
import { RenderIf } from '../../components/RenderIf';
import { TitleStyled } from '../../components/Title/styles';
import { queryKey } from '../../constants/queryKeys';
import { useDashboard } from '../../hooks/useDashboard';
import { productService } from '../../services/productService';
import { ProductType } from '../../types/productType';
import { ContainerProducts } from './styles';

export const Dashboard: FC = () => {
  const { handleOpenNewProductModal } = useDashboard();
  const { index } = productService;
  const { data } = useQuery<ProductType[]>(queryKey.products, index);
  const products = data || [];

  return (
    <>
      <TitleStyled size="large" weight="600" font="inter">
        My products
      </TitleStyled>

      <RenderIf condition={products.length > 0}>
        <ContainerProducts>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ContainerProducts>
      </RenderIf>

      <RenderIf condition={products.length === 0}>
        <Message
          title="No results found"
          description="Please, register a new product by clicking the button below."
          image={emptyImg}>
          <Button
            type="button"
            variant="primary"
            size="large"
            positionIcon="left"
            onClick={handleOpenNewProductModal}
            margin="3rem 0 0 0">
            <BsPlusLg /> New product
          </Button>
        </Message>
      </RenderIf>

      <NewProductModal />
    </>
  );
};
