import { FC } from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { FaDolly } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Brand, Container, SidebarItem, SidebarListItems } from './styles';

export const Sidebar: FC = () => {
  return (
    <Container>
      <Brand>
        <NavLink to="/" className="brand">
          <span>S</span>
          <span>F</span>
        </NavLink>
      </Brand>
      <SidebarListItems>
        <SidebarItem>
          <NavLink to="/" className="menu-item-link">
            <span className="sr-only">Home</span>
            <BsFillGridFill />
          </NavLink>
        </SidebarItem>

        <SidebarItem>
          <NavLink to="/stocks" className="menu-item-link">
            <span className="sr-only">Stocks</span>
            <FaDolly />
          </NavLink>
        </SidebarItem>
      </SidebarListItems>
    </Container>
  );
};
