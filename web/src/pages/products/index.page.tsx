import { ReactElement, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Box } from '../../components/Box';
import { DetailsProductModal } from '../../components/DetailsProductModal';
import { EditProductModal } from '../../components/EditProductModal';
import { LayoutDashboard } from '../../components/Layouts/LayoutDashboard';
import { NewProductModal } from '../../components/NewProductModal';
import { ProductCard } from '../../components/ProductCard';
import { RenderIf } from '../../components/RenderIf';
import { QueryKeys } from '../../enums';
import { search } from '../../helpers';
import { useDashboard } from '../../hooks/useDashboard';
import { deleteProductMutation } from '../../mutations/deleteProductMutation';
import { productService } from '../../services/productService';
import { ProductType, ProductUpdateType } from '../../types/productType';
import { displayDate } from '../../utils/format';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { NextPageWithLayout } from '../_app.page';
import { ContainerProducts } from './styles';

const Products: NextPageWithLayout = () => {
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState({} as ProductUpdateType);

  const [isDetailsProductModalOpen, setIsDetailsProductModalOpen] = useState(false);
  const [seeingProduct, setSeeingProduct] = useState({} as ProductUpdateType);

  const { mutate: deleteProductMutate } = deleteProductMutation();
  const { handleOpenNewProductModal, searchDashboard } = useDashboard();
  const { data, isLoading } = useQuery<ProductType[]>(QueryKeys.PRODUCTS, productService.index);

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
      <div className="w-full h-full">
        <div className="flex justify-between h-full">
          <div className="flex-[3]">
            <header className="p-[3.2rem]">
              <h2 className="text-white font-bold text-[2.8rem]">Dashboard</h2>
              <span className="flex text-[1.6rem] mt-[1.2rem] font-medium  text-[#5f5f5f]">
                {displayDate(new Date())}
              </span>
            </header>
            <div>
              <Box>oi</Box>
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
            </div>
          </div>

          <div className="flex-1">Teste</div>
        </div>
      </div>
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

Products.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
export default Products;

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  };
});
