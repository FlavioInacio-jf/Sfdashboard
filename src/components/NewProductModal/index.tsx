import { FC, FormEvent, useState } from 'react';
import { Modal } from '../../components/Modal';
import { useDashboard } from '../../hooks/useDashboard';
import { createProductMutation } from '../../mutations/createProductMutation';
import { ProductRegisterType } from '../../types/productType';
import { FormProduct } from '../FormProduct';

export const NewProductModal: FC = () => {
  const [product, setProduct] = useState<ProductRegisterType>({
    description: '',
    price: 0,
    title: '',
    amount: 0,
    photo_url: ''
  });
  const { mutate: createProductMutate } = createProductMutation();

  const { isNewProductModalOpen, handleCloseNewProductModal } = useDashboard();

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;

    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createProductMutate(product);
  };

  return (
    <Modal
      title="Register new product"
      isOpen={isNewProductModalOpen}
      onRequestClose={handleCloseNewProductModal}
      width="50rem"
      height="63rem">
      <FormProduct
        product={product}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onRequestClose={handleCloseNewProductModal}
      />
    </Modal>
  );
};
