import { FC, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useQuery } from 'react-query';
import emptyImg from '../../assets/empty.svg';
import { Button } from '../../components/Button';
import { EditProductModal } from '../../components/EditProductModal';
import { Loader } from '../../components/Loader';
import { Message } from '../../components/Message';
import { NewProductModal } from '../../components/NewProductModal';
import { ProductCard } from '../../components/ProductCard';
import { RenderIf } from '../../components/RenderIf';
import { TitleStyled } from '../../components/Title/styles';
import { queryKey } from '../../constants/queryKeys';
import { useDashboard } from '../../hooks/useDashboard';
import { productService } from '../../services/productService';
import { ProductType, ProductUpdateType } from '../../types/productType';
import { ContainerProducts } from './styles';

export const Dashboard: FC = () => {
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState({} as ProductUpdateType);

  const { handleOpenNewProductModal } = useDashboard();
  const { index } = productService;
  const { data, isLoading } = useQuery<ProductType[]>(queryKey.products, index);
  const products = data || [];

  const handleOpenEditProductModal = () => {
    setIsEditProductModalOpen(true);
  };
  const handleCloseEditProductModal = () => {
    setIsEditProductModalOpen(false);
  };

  return (
    <>
      <TitleStyled size="large" weight="600" font="inter">
        My products
      </TitleStyled>

      <RenderIf condition={isLoading}>
        <Loader />
      </RenderIf>

      <RenderIf condition={products.length > 0}>
        <ContainerProducts>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRequestOpenEditModal={handleOpenEditProductModal}
              onAddProductEdit={setEditingProduct}
            />
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
      <EditProductModal
        productEditing={editingProduct}
        isOpen={isEditProductModalOpen}
        onRequestClose={handleCloseEditProductModal}
      />
    </>
  );
};
