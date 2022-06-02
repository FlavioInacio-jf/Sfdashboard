import NextLink from 'next/link';
import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import { LinkStyled, LinkStyledProps } from './styles';

export interface LinkProps
  extends LinkStyledProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  href: string;
}

export const Link: FC<LinkProps> = ({ children, href, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <LinkStyled {...props}>{children}</LinkStyled>
    </NextLink>
  );
};
