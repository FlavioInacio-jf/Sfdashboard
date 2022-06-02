import { FC } from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { FaDolly } from 'react-icons/fa';
import { Brand, Container, SidebarItem, SidebarListItems } from './styles';

export const Sidebar: FC = () => {
  return (
    <Container>
      <Brand>
        <a href="/" className="brand">
          <span>S</span>
          <span>F</span>
        </a>
      </Brand>
      <SidebarListItems>
        <SidebarItem>
          <a href="/products" className="menu-item-link">
            <span className="sr-only">Home</span>
            <BsFillGridFill />
          </a>
        </SidebarItem>

        <SidebarItem>
          <a href="/stocks" className="menu-item-link">
            <span className="sr-only">Stocks</span>
            <FaDolly />
          </a>
        </SidebarItem>
      </SidebarListItems>
    </Container>
  );
};
