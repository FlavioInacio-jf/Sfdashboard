import { ReactElement, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import {
  Box,
  DetailsProductModal,
  EditProductModal,
  LayoutDashboard,
  NewProductModal,
  ProductCard,
  RenderIf
} from '../../components';
import { QueryKeys } from '../../enums';
import { displayDateHelper } from '../../helpers';
import { deleteProductMutation } from '../../mutations';
import { productService } from '../../services';
import { ProductType, ProductUpdateType } from '../../types';
import { withSSRAuth } from '../../utils';
import { NextPageWithLayout } from '../_app.page';
import { ContainerProducts } from './styles';

const Products: NextPageWithLayout = () => {
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState({} as ProductUpdateType);

  const [isDetailsProductModalOpen, setIsDetailsProductModalOpen] = useState(false);
  const [seeingProduct, setSeeingProduct] = useState({} as ProductUpdateType);

  const { mutate: deleteProductMutate } = deleteProductMutation();
  const { data } = useQuery<ProductType[]>(QueryKeys.PRODUCTS, productService.index);

  const products = useMemo(() => data?.result || [], [data]);

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
                {displayDateHelper(new Date())}
              </span>
            </header>
            <div>
              <Box>oi</Box>
              <RenderIf condition={products.length > 0}>
                <ContainerProducts>
                  {products.map((product) => (
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
