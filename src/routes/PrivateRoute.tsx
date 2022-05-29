import { FC } from 'react';
import { LayoutDashboard } from '../components/LayoutDashboard';

interface PrivateRouteProps {
  page: FC;
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ page: Page }) => {
  return (
    <LayoutDashboard>
      <Page />
    </LayoutDashboard>
  );
};
