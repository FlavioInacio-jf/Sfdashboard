import { FC, ReactNode } from 'react';
import { ColumnStyled, ColumnStyledProps } from './styles';

export interface ColumnProps extends ColumnStyledProps {
  children: ReactNode;
}
export const Column: FC<ColumnProps> = ({ children, ...props }) => {
  return <ColumnStyled {...props}>{children}</ColumnStyled>;
};
