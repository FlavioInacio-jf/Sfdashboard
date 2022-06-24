import { FC } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavBarButton } from './styles';

export const AllCategoriesButton: FC = () => {
  return (
    <NavBarButton>
      <FaBars /> All produtcts
    </NavBarButton>
  );
};
