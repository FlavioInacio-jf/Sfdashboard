import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { Modal } from '../../components/Modal';
import { updateProductMutation } from '../../mutations/updateProductMutation';
import { ProductUpdateType } from '../../types/productType';
import { Button } from '../Button';
import { Column } from '../Column';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';

interface EditProductModalProps {
  product: ProductUpdateType;
  isOpen: boolean;
  onRequestClose: () => void;
}
export const EditProductModal: FC<EditProductModalProps> = ({
  product,
  isOpen,
  onRequestClose
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProductUpdateType>({
    mode: 'onBlur',
    defaultValues: product
  });

  const { mutate: updateProductMutate } = updateProductMutation();

  const onSubmit = () => {
    updateProductMutate(product);
  };

  return (
    <Modal
      title={`Edit ${product.name}`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      width="50rem"
      height="63rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input<ProductUpdateType>
          label="Title"
          name={'name'}
          type="text"
          placeholder="Ex.: Orange"
          register={register}
          errors={errors}
        />
        <Column column="1" justifyItems="start" justifyContent="start" margin="3rem 0 3rem 0">
          <Input<ProductUpdateType>
            label="Photo"
            name="photo_url"
            type="text"
            placeholder="Ex.: https://photos.google.com/photos"
            register={register}
            errors={errors}
          />
        </Column>

        <Column column="2" margin="3rem 0 3rem 0">
          <Input<ProductUpdateType>
            label="Price"
            name="price"
            mask="currency"
            register={register}
            errors={errors}
          />
          <Input<ProductUpdateType>
            label="Amount"
            name="amount"
            mask="number"
            type="number"
            register={register}
            errors={errors}
          />
        </Column>

        <TextArea
          label="Description"
          name="description"
          margin="3rem 0 0 0"
          placeholder="Product Description"
          maxLength={205}
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
            Create product
          </Button>
        </Column>
      </form>
    </Modal>
  );
};
