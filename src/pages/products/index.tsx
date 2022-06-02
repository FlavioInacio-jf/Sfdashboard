import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { Button } from '../../components/Button';
import { DetailsProductModal } from '../../components/DetailsProductModal';
import { EditProductModal } from '../../components/EditProductModal';
import { Loader } from '../../components/Loader';
import { Message } from '../../components/Message';
import { NewProductModal } from '../../components/NewProductModal';
import { ProductCard } from '../../components/ProductCard';
import { RenderIf } from '../../components/RenderIf';
import { TitleStyled } from '../../components/Title/styles';
import { queryKey } from '../../constants/queryKeys';
import { search } from '../../helpers';
import { useDashboard } from '../../hooks/useDashboard';
import { deleteProductMutation } from '../../mutations/deleteProductMutation';
import { productService } from '../../services/productService';
import { ProductType, ProductUpdateType } from '../../types/productType';
import { ContainerProducts } from './styles';

const Products: NextPage = () => {
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState({} as ProductUpdateType);

  const [isDetailsProductModalOpen, setIsDetailsProductModalOpen] = useState(false);
  const [seeingProduct, setSeeingProduct] = useState({} as ProductUpdateType);

  const { mutate: deleteProductMutate } = deleteProductMutation();
  const { handleOpenNewProductModal, searchDashboard } = useDashboard();
  const { data, isLoading } = useQuery<ProductType[]>(queryKey.products, productService.index);

  const products = useMemo(() => data || [], [data]);

  const filteredProducts = useMemo(() => {
    return products.filter(({ name }) => search(name, searchDashboard));
  }, [products, searchDashboard]);

  const handleOpenEditProductModal = () => {
    setIsEditProductModalOpen(true);
  };
  const handleCloseEditProductModal = () => {
    setIsEditProductModalOpen(false);
  };

  const handleOpenDetailsProductModal = () => {
    setIsDetailsProductModalOpen(true);
  };
  const handleDeleteDetailsProductModal = () => {
    setIsDetailsProductModalOpen(false);
  };

  const handleDeleteProduct = (id: number) => {
    deleteProductMutate(id);
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
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRequestOpenEditModal={handleOpenEditProductModal}
              onRequestOpenDetailsModal={handleOpenDetailsProductModal}
              onAddProductEdit={setEditingProduct}
              onAddProductDetails={setSeeingProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          ))}
        </ContainerProducts>
      </RenderIf>

      <RenderIf condition={products.length === 0}>
        <Message
          title="No results found"
          description="Please, register a new product by clicking the button below."
          image="/assets/empty.svg">
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
      <DetailsProductModal
        productSeeing={seeingProduct}
        isOpen={isDetailsProductModalOpen}
        onRequestClose={handleDeleteDetailsProductModal}
      />
      <EditProductModal
        product={editingProduct}
        isOpen={isEditProductModalOpen}
        onRequestClose={handleCloseEditProductModal}
      />
    </>
  );
};

export default Products;
