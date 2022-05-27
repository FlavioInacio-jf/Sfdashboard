import { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { LayoutDashboard } from '../components/LayoutDashboard';

interface PrivateRouteProps extends RouteProps {
  component: FC;
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        <LayoutDashboard>
          <Component />
        </LayoutDashboard>
      }
    />
  );
};
