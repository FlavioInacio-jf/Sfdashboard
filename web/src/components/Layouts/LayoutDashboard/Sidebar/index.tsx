import NextLink from 'next/link';
import Router, { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { FC } from 'react';
import { BsBoxArrowRight, BsFillGridFill } from 'react-icons/bs';
import { LogoutMutation } from '../../../../mutations/logoutMutation';
import { Link } from '../../../Link';
import { Brand, SidebarItem, SidebarListItems } from './styles';

export const signOut = () => {
  destroyCookie(undefined, 'SFDashboard.auth.token', { path: '/' });
  destroyCookie(undefined, 'SFDashboard.auth.refreshToken', { path: '/' });

  Router.push('/');
};

export const Sidebar: FC = () => {
  const { pathname } = useRouter();
  const { mutate: logoutMutate } = LogoutMutation();

  const handleLogout = () => {
    logoutMutate();
  };
  return (
    <aside className="bg-[#242424] w-[10rem]">
      <nav>
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
              <BsFillGridFill />
              <span className="sr-only">Home</span>
            </Link>
          </SidebarItem>

          <SidebarItem isActive={true} onClick={handleLogout}>
            <a>
              <BsBoxArrowRight />
              <span className="sr-only">Logout</span>
            </a>
          </SidebarItem>
        </SidebarListItems>
      </nav>
    </aside>
  );
};
