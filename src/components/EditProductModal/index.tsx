import { FC, FormEvent, useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import { ProductUpdateType } from '../../types/productType';
import { FormProduct } from '../FormProduct';

interface EditProductModalProps {
  productEditing: ProductUpdateType;
  isOpen: boolean;
  onRequestClose: () => void;
}
export const EditProductModal: FC<EditProductModalProps> = ({
  productEditing,
  isOpen,
  onRequestClose
}) => {
  const [product, setProduct] = useState<ProductUpdateType>(productEditing);

  useEffect(() => {
    setProduct(productEditing);
  }, [productEditing]);

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;

    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(product);
  };

  return (
    <Modal
      title={`Edit ${productEditing.title}`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      width="50rem"
      height="63rem">
      <FormProduct
        product={product}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onRequestClose={onRequestClose}
      />
    </Modal>
  );
};
