import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { ButtonStyled, ButtonStyledProps } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyledProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
