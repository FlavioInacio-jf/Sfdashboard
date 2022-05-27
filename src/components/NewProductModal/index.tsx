import { FC } from 'react';
import { Modal } from '../../components/Modal';
import { useDashboard } from '../../hooks/useDashboard';

export const NewProductModal: FC = () => {
  const { isNewProductModalOpen, handleCloseNewProductModal } = useDashboard();

  return (
    <Modal
      title="Register new product"
      isOpen={isNewProductModalOpen}
      onRequestClose={handleCloseNewProductModal}>
      Teste
    </Modal>
  );
};
