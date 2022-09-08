import { FC, ReactNode } from 'react';
import { Toast } from '../Toast';

interface LayouLoginProps {
  children: ReactNode;
}

export const LayoutLogin: FC<LayouLoginProps> = ({ children }) => {
  return (
    <>
      <div className="w-full">{children}</div>
      <Toast />
    </>
  );
};
