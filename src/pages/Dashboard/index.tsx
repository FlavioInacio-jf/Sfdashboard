import { FC } from 'react';
import { NewProductModal } from '../../components/NewProductModal';
import { TitleStyled } from '../../components/Title/styles';

export const Dashboard: FC = () => {
  return (
    <>
      <TitleStyled size="large" weight="600" font="inter">
        My products
      </TitleStyled>
      <NewProductModal />
    </>
  );
};
