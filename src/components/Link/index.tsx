import { FC, ReactNode } from 'react';
import { LinkStyled, LinkStyledProps } from './styles';

export interface LinkProps extends LinkStyledProps {
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return <LinkStyled {...props}>{children}</LinkStyled>;
};
