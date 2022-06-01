import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { Modal } from '../../components/Modal';
import { useDashboard } from '../../hooks/useDashboard';
import { createProductMutation } from '../../mutations/createProductMutation';
import { ProductRegisterType } from '../../types/productType';
import { Button } from '../Button';
import { Column } from '../Column';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';

export const NewProductModal: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProductRegisterType>({
    mode: 'onBlur'
  });

  const { mutate: createProductMutate } = createProductMutation();

  const { isNewProductModalOpen, handleCloseNewProductModal } = useDashboard();

  const onSubmit = (data: ProductRegisterType) => {
    createProductMutate(data);
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
          label="Title"
          name={'name'}
          type="text"
          placeholder="Ex.: Orange"
          register={register}
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
            errors={errors}
          />
          <Input<ProductRegisterType>
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
            onClick={handleCloseNewProductModal}>
            <BsXLg />
            Cancel
          </Button>
          <Button variant="primary" size="large" positionIcon="left" type="submit">
            <BsCheckLg />
            Create
          </Button>
        </Column>
      </form>
    </Modal>
  );
};
