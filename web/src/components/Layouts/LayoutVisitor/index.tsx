import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Brand } from '../../Brand';
import { Container } from '../Container';
import { ActionsButton } from './ActionsButton';
import { navLink } from './navLinks';
import { Search } from './Search';
import { SigInButton } from './SigInButton';
import { Footer, Header, NavBar } from './styles';

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
          <SigInButton />
          <ActionsButton />
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
