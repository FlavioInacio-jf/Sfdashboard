import { FC } from 'react';
import { NewProductModal } from '../../components/NewProductModal';

export const Dashboard: FC = () => {
  return (
    <>
      <div>My products</div>
      <NewProductModal />
    </>
  );
};
