import { FC, ReactNode } from 'react';
import { DashboardProvider } from '../../../contexts';
import { Toast } from '../../Toast';
import { Profile } from './Profile';
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
          <div className="flex-1 flex bg-[#1F1F1F]">
            <div className="flex-[4]">{children}</div>
            <Profile />
          </div>
        </div>
      </DashboardProvider>
      <Toast />
    </>
  );
};
