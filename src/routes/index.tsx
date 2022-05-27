import { BrowserRouter, Route, Routes as RoutesRouterDom } from 'react-router-dom';
import { LayoutDashboard } from '../components/LayoutDashboard';
import { Custom404 } from '../pages/404';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesRouterDom>
        <Route
          path="/"
          element={
            <LayoutDashboard>
              <Dashboard />
            </LayoutDashboard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Custom404 />} />
      </RoutesRouterDom>
    </BrowserRouter>
  );
};
