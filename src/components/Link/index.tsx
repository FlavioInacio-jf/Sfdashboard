import { FC, ReactNode } from 'react';
import { LinkProps as LinkPropsRouterDom } from 'react-router-dom';
import { LinkStyled, LinkStyledProps } from './styles';

export interface LinkProps extends LinkPropsRouterDom, LinkStyledProps {
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return <LinkStyled {...props}>{children}</LinkStyled>;
};
