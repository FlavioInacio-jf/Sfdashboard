import { FC } from 'react';
import { ToastStyled } from './styles';

export const Toast: FC = () => {
  return (
    <ToastStyled
      position="top-right"
      autoClose={1000 * 5}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ width: '33rem' }}
    />
  );
};
