import { FC, useEffect } from 'react';
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
    reset,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm<ProductUpdateType>({
    mode: 'onBlur',
    defaultValues: product
  });

  useEffect(() => {
    reset(product);
  }, [product, reset]);

  const { mutate: updateProductMutate } = updateProductMutation();

  const onSubmit = (data: ProductUpdateType) => {
    updateProductMutate({ ...data, category: 'oii' });
  };

  return (
    <Modal
      title={`Edit ${product.name?.slice(0, 20)}`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      width="50rem"
      height="63rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input<ProductUpdateType>
          label="Name"
          name="name"
          type="text"
          max={100}
          maxLength={100}
          placeholder="Ex.: Orange"
          register={register}
          rules={{ min: 3, max: 100, required: 'Name is required' }}
          errors={errors}
        />
        <Column column="1" justifyItems="start" justifyContent="start" margin="3rem 0 3rem 0">
          <Input<ProductUpdateType>
            label="Photo"
            name="photo_url"
            type="text"
            placeholder="Ex.: https://photos.google.com/photos"
            register={register}
            rules={{ required: 'Photo is required' }}
            errors={errors}
          />
        </Column>

        <Column column="2" margin="3rem 0 3rem 0">
          <Input<ProductUpdateType>
            label="Price"
            name="price"
            mask="currency"
            register={register}
            rules={{ required: 'Price is required' }}
            errors={errors}
          />
          <Input<ProductUpdateType>
            label="Amount"
            name="amount"
            mask="number"
            type="number"
            register={register}
            rules={{ valueAsNumber: true, required: 'Amount is required' }}
            errors={errors}
          />
        </Column>

        <TextArea<ProductUpdateType>
          label="Description"
          name="description"
          margin="3rem 0 0 0"
          placeholder="Product Description"
          register={register}
          rules={{ min: 10, max: 600, required: 'Description is required' }}
          errors={errors}
          maxLength={600}
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
          <Button
            variant="primary"
            size="large"
            positionIcon="left"
            type="submit"
            disabled={!isValid || !isDirty || isSubmitting}>
            <BsCheckLg />
            Update
          </Button>
        </Column>
      </form>
    </Modal>
  );
};
