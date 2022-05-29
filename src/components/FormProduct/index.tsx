import { FC, FormEvent } from 'react';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { ProductRegisterType } from '../../types/productType';
import { Button } from '../Button';
import { Column } from '../Column';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';

interface FormProductProps {
  onRequestClose: () => void;
  onSubmit: (event: FormEvent) => void;
  onChange: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  product: ProductRegisterType;
  type?: 'update' | 'create';
}
export const FormProduct: FC<FormProductProps> = ({
  onSubmit,
  product,
  onChange,
  onRequestClose,
  type = 'create'
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Title"
        name="title"
        type="text"
        placeholder="Ex.: Orange"
        onChange={onChange}
        value={product.title}
      />
      <Column column="1" justifyItems="start" justifyContent="start" margin="3rem 0 3rem 0">
        <Input
          label="Photo"
          name="photo_url"
          type="text"
          placeholder="Ex.: https://photos.google.com/photos"
          onChange={onChange}
          value={product.photo_url}
        />
      </Column>

      <Column column="2" margin="3rem 0 3rem 0">
        <Input
          label="Price"
          name="price"
          mask="currency"
          onChange={onChange}
          value={product.price}
        />
        <Input
          label="Amount"
          name="amount"
          mask="number"
          type="number"
          onChange={onChange}
          value={product.amount}
        />
      </Column>

      <TextArea
        label="Description"
        name="description"
        margin="3rem 0 0 0"
        placeholder="Product Description"
        maxLength={205}
        onChange={onChange}
        value={product.description}
      />

      <Column sizeColumns="auto auto" justifyItems="center" margin="3rem 0 0 0">
        <Button
          variant="danger"
          size="large"
          type="button"
          positionIcon="left"
          outline
          onClick={onRequestClose}>
          <BsXLg />
          Cancel
        </Button>
        <Button variant="primary" size="large" positionIcon="left" type="submit">
          <BsCheckLg />
          {type === 'create' ? 'Create' : 'Update'}
        </Button>
      </Column>
    </form>
  );
};
