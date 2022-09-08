import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { ButtonStyled, ButtonStyledProps } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyledProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, size = 'md', ...props }) => {
  return (
    <ButtonStyled size={size} {...props}>
      {children}
    </ButtonStyled>
  );
};
