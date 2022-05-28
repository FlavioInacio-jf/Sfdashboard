import { FC } from 'react';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { Modal } from '../../components/Modal';
import { useDashboard } from '../../hooks/useDashboard';
import { Button } from '../Button';
import { Column } from '../Column';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';
import { Form } from './styles';

export const NewProductModal: FC = () => {
  const { isNewProductModalOpen, handleCloseNewProductModal } = useDashboard();

  return (
    <Modal
      title="Register new product"
      isOpen={isNewProductModalOpen}
      onRequestClose={handleCloseNewProductModal}
      width="50rem"
      height="55rem">
      <Form>
        <Input label="Name" name="name" type="text" />
        <Column column="2" margin="3rem 0 3rem 0">
          <Input label="Price" name="price" mask="currency" defaultValue="0" />
          <Input label="Amount" name="amount" mask="number" defaultValue="0" type="number" />
        </Column>

        <TextArea label="Description" name="description" margin="3rem 0 0 0" maxLength={205} />

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
