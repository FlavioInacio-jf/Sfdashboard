import { FC, ReactNode } from 'react';
import { DashboardProvider } from '../../../contexts/DashboardContext';
import { Toast } from '../../Toast';
import { Sidebar } from './Sidebar';

interface LayoutDashboardProps {
  children: ReactNode;
}

export const LayoutDashboard: FC<LayoutDashboardProps> = ({ children }) => {
  return (
    <>
      <DashboardProvider>
        <div className="flex h-[100vh]">
          <Sidebar />
          <div className="flex-1 bg-[#1F1F1F]">{children}</div>
        </div>
      </DashboardProvider>
      <Toast />
    </>
  );
};
