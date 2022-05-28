import { FC, FormEvent, useState } from 'react';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { Modal } from '../../components/Modal';
import { useDashboard } from '../../hooks/useDashboard';
import { createProductMutation } from '../../mutations/createProductMutation';
import { ProductRegisterType } from '../../types/productType';
import { Button } from '../Button';
import { Column } from '../Column';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';
import { Form } from './styles';

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
      height="55rem">
      <Form onSubmit={handleSubmit}>
        <Input
          label="Title"
          name="title"
          type="text"
          placeholder="Ex.: Orange"
          onChange={handleChange}
          value={product.title}
        />
        <Column column="1" justifyItems="start" justifyContent="start" margin="3rem 0 3rem 0">
          <Input
            label="Photo"
            name="photo_url"
            type="text"
            placeholder="Ex.: https://photos.google.com/photos"
            onChange={handleChange}
            value={product.photo_url}
          />
        </Column>

        <Column column="2" margin="3rem 0 3rem 0">
          <Input
            label="Price"
            name="price"
            mask="currency"
            onChange={handleChange}
            value={product.price}
          />
          <Input
            label="Amount"
            name="amount"
            mask="number"
            type="number"
            onChange={handleChange}
            value={product.amount}
          />
        </Column>

        <TextArea
          label="Description"
          name="description"
          margin="3rem 0 0 0"
          placeholder="Product Description"
          maxLength={205}
          onChange={handleChange}
        />

        <Column sizeColumns="auto auto" justifyItems="center" margin="3rem 0 0 0">
          <Button
            variant="danger"
            size="large"
            type="button"
            positionIcon="left"
            outline
            onClick={handleCloseNewProductModal}>
            <BsXLg />
            Cancel
          </Button>
          <Button variant="primary" size="large" positionIcon="left" type="submit">
            <BsCheckLg />
            Register
          </Button>
        </Column>
      </Form>
    </Modal>
  );
};
