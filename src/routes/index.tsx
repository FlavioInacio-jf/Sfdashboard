import { BrowserRouter, Route, Routes as RoutesRouterDom } from 'react-router-dom';
import { Custom404 } from '../pages/404';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Stocks } from '../pages/Stocks';
import { PrivateRoute } from './PrivateRoute';

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesRouterDom>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<PrivateRoute page={Dashboard} />} />
        <Route path="/stocks" element={<PrivateRoute page={Stocks} />} />
        <Route path="*" element={<Custom404 />} />
      </RoutesRouterDom>
    </BrowserRouter>
  );
};
