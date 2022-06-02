import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { Modal } from '../../components/Modal';
import { useDashboard } from '../../hooks/useDashboard';
import { createProductMutation } from '../../mutations/createProductMutation';
import { ProductRegisterType } from '../../types/productType';
import { convertPriceToNumber } from '../../utils/format';
import { Button } from '../Button';
import { Column } from '../Column';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';

const photo_product =
  'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

export const NewProductModal: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm<ProductRegisterType>({
    mode: 'onBlur'
  });

  const { mutate: createProductMutate, isSuccess } = createProductMutation();

  const { isNewProductModalOpen, handleCloseNewProductModal } = useDashboard();

  const onSubmit = (data: ProductRegisterType) => {
    const priceNumber = convertPriceToNumber(data.price);

    createProductMutate({
      ...data,
      price: priceNumber,
      photo_url: data.photo_url || photo_product
    });
    if (isSuccess) {
      reset();
      handleCloseNewProductModal();
    }
  };

  return (
    <Modal
      title="Register new product"
      isOpen={isNewProductModalOpen}
      onRequestClose={handleCloseNewProductModal}
      width="50rem"
      height="63rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input<ProductRegisterType>
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
          <Input<ProductRegisterType>
            label="Photo"
            name="photo_url"
            type="text"
            placeholder="Ex.: https://photos.google.com/photos"
            register={register}
            errors={errors}
          />
        </Column>

        <Column column="2" margin="3rem 0 3rem 0">
          <Input<ProductRegisterType>
            label="Price"
            name="price"
            mask="currency"
            register={register}
            rules={{ required: 'Price is required' }}
            errors={errors}
          />
          <Input<ProductRegisterType>
            label="Amount"
            name="amount"
            mask="number"
            type="number"
            register={register}
            rules={{ valueAsNumber: true, required: 'Amount is required' }}
            errors={errors}
          />
        </Column>

        <TextArea<ProductRegisterType>
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
            onClick={handleCloseNewProductModal}>
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
            Create
          </Button>
        </Column>
      </form>
    </Modal>
  );
};
