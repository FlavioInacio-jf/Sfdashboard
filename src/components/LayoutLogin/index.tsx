import { FC, ReactNode } from 'react';
import { Link } from '../Link';
import { Title } from '../Title';
import { Toast } from '../Toast';
import { Container, FirstContent, SecondContent, SecondContentDescription } from './styles';

interface LayouLoginProps {
  children: ReactNode;
}

export const LayoutLogin: FC<LayouLoginProps> = ({ children }) => {
  const pathname = 'useLocation()';

  return (
    <>
      <Container>
        <FirstContent>{children}</FirstContent>

        <SecondContent>
          <Title variant="light" size="extraLarge" font="inter" weight="700">
            {true ? 'Now here?' : 'Already have an account?'}
          </Title>
          <SecondContentDescription>
            {pathname === '/'
              ? 'Click on the link below and discover a smart and fast dashboard'
              : 'Click on the link below and access your account now.'}
          </SecondContentDescription>
          <Link to={pathname === '/' ? 'register' : '/'} variant="light" size="large">
            {pathname === '/' ? 'Register' : 'Login'}
          </Link>
        </SecondContent>
      </Container>
      <Toast />
    </>
  );
};
