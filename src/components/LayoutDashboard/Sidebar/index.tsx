import NextLink from 'next/link';
import Router, { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { FC } from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { Link } from '../../Link';
import { Brand, Container, SidebarItem, SidebarListItems } from './styles';

export const signOut = () => {
  destroyCookie(undefined, 'SFDashboard.auth.token', { path: '/' });
  destroyCookie(undefined, 'SFDashboard.auth.refreshToken', { path: '/' });

  Router.push('/');
};
export const Sidebar: FC = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      <Brand>
        <NextLink href="/">
          <a className="brand">
            <span>S</span>
            <span>F</span>
          </a>
        </NextLink>
      </Brand>
      <SidebarListItems>
        <SidebarItem isActive={pathname === '/products'}>
          <Link href="/products">
            <span className="sr-only">Home</span>
            <BsFillGridFill />
          </Link>
        </SidebarItem>
      </SidebarListItems>
    </Container>
  );
};
