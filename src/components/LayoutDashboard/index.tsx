import { FC, ReactNode } from 'react';
import { DashboardProvider } from '../../contexts/DashboardContext';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Container, Content } from './styles';

interface LayoutDashboardProps {
  children: ReactNode;
}

export const LayoutDashboard: FC<LayoutDashboardProps> = ({ children }) => {
  return (
    <DashboardProvider>
      <Container>
        <Header />
        <Content>{children}</Content>
        <Sidebar />
      </Container>
    </DashboardProvider>
  );
};
