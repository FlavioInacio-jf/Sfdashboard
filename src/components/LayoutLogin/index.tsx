import { FC, ReactNode } from 'react';
import { Link } from '../Link';
import { Title } from '../Title';
import { Toast } from '../Toast';
import { Container, FirstContent, SecondContent, SecondContentDescription } from './styles';

interface LayouLoginProps {
  children: ReactNode;
}

export const LayouLogin: FC<LayouLoginProps> = ({ children }) => {
  return (
    <>
      <Container>
        <FirstContent>{children}</FirstContent>

        <SecondContent>
          <Title variant="light" size="extraLarge" font="inter" weight="700">
            Now here?
          </Title>
          <SecondContentDescription>
            Click on the link below and discover a smart and fast dashboard
          </SecondContentDescription>
          <Link to="register" variant="light" size="large">
            Register
          </Link>
        </SecondContent>
      </Container>
      <Toast />
    </>
  );
};
