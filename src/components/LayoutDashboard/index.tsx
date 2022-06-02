import { FC, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { queryKey } from '../../constants/queryKeys';
import { DashboardProvider } from '../../contexts/DashboardContext';
import { userService } from '../../services/userService';
import { Toast } from '../Toast';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Container, Content } from './styles';

interface LayoutDashboardProps {
  children: ReactNode;
}

export const LayoutDashboard: FC<LayoutDashboardProps> = ({ children }) => {
  const { data } = useQuery(queryKey.session, userService.me);

  const user = !!data;
  console.log(user);
  return (
    <>
      <DashboardProvider>
        <Container>
          <Header />
          <Content>{children}</Content>
          <Sidebar />
        </Container>
      </DashboardProvider>
      <Toast />
    </>
  );
};
