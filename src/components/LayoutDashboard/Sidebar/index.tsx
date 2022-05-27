import { FC } from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';
import { Brand, Container, SidebarItem, SidebarListItems } from './styles';

export const Sidebar: FC = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Brand>
        <NavLink to="/" className="brand">
          <span>S</span>
          <span>F</span>
        </NavLink>
      </Brand>
      <SidebarListItems>
        <SidebarItem isCurrentPage={pathname === '/'}>
          <NavLink to="/" className="active-item-menu">
            <span className="sr-only">Home</span>
            <BsFillGridFill />
          </NavLink>
        </SidebarItem>

        <SidebarItem isCurrentPage={pathname === '/register'}>
          <NavLink to="/" className="active-item-menu">
            <span className="sr-only">Home</span>
            <BsFillGridFill />
          </NavLink>
        </SidebarItem>
      </SidebarListItems>
    </Container>
  );
};
