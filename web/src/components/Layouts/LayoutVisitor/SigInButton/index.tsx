import { FC } from 'react';
import { Link } from '../../../Link';
import { ContainerSigInButton } from './styles';

export const SigInButton: FC = () => {
  return (
    <ContainerSigInButton>
      <Link href="/register" outline mR="lg">
        Register
      </Link>
      <Link href="/login">Log in</Link>
    </ContainerSigInButton>
  );
};
