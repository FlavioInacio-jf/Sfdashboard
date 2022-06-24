import { FC, ReactNode } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Brand } from '../../Brand';
import { RenderIf } from '../../RenderIf';
import { Toast } from '../../Toast';
import { Container } from '../Container';
import { ActionsButton } from './ActionsButton';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { Search } from './Search';
import { SigInButton } from './SigInButton';
import { Header, Main } from './styles';

interface LayouLoginProps {
  children: ReactNode;
}

export const LayoutVisitor: FC<LayouLoginProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Header>
        <Container d="flex" justifyContent="space-between" alignItems="center" h="50%" pY="xl">
          <Brand />

          <Search />
          <SigInButton />

          <RenderIf condition={isAuthenticated}>
            <ActionsButton />
          </RenderIf>
        </Container>
        <NavBar />
      </Header>
      <Main>{children}</Main>
      <Footer />
      <Toast />
    </>
  );
};
