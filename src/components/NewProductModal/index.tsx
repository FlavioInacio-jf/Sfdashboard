import { FC, FormEvent, useState } from 'react';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { Modal } from '../../components/Modal';
import { useDashboard } from '../../hooks/useDashboard';
import { ProductType } from '../../types/productType';
import { Button } from '../Button';
import { Column } from '../Column';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';
import { Form } from './styles';

export const NewProductModal: FC = () => {
  const [product, setProduct] = useState<Omit<ProductType, 'id'>>({
    description: '',
    price: 0,
    title: '',
    amount: 0
  });

  const { isNewProductModalOpen, handleCloseNewProductModal } = useDashboard();

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;

    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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
          onChange={handleChange}
          value={product.title}
        />
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
