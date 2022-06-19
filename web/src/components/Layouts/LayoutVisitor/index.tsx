import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { BsCart3, BsFillHeartFill, BsPersonCircle } from 'react-icons/bs';
import { Brand } from '../../Brand';
import { navLink } from './navLinks';
import { Search } from './Search';
import { Container, Footer, Header, NavBar } from './styles';

interface LayouLoginProps {
  children: ReactNode;
}

export const LayoutVisitor: FC<LayouLoginProps> = ({ children }) => {
  return (
    <>
      <Header>
        <Container d="flex" justifyContent="space-between" alignItems="center" h="50%">
          <Brand />

          <Search />
          <div>
            <BsPersonCircle />
            <div>
              Hello, name
              <button type="button">My Account</button>
            </div>
          </div>
          <div>
            <BsFillHeartFill />
            <BsCart3 />
          </div>
        </Container>
        <NavBar>
          <Container d="flex" justifyContent="start" h="50%">
            {navLink.map(({ href, name }) => {
              return (
                <Link href={href} key={name}>
                  <a>{name}</a>
                </Link>
              );
            })}
          </Container>
        </NavBar>
      </Header>
      <main>
        <Container>{children}</Container>
      </main>
      <Footer>
        <Container>Footer</Container>
      </Footer>
    </>
  );
};
