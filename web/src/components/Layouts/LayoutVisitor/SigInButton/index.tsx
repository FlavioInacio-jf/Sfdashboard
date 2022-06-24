import { useRouter } from 'next/router';
import { FC } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { Link } from '../../../Link';

import { RenderIf } from '../../../RenderIf';
import { MyAccountButton } from './MyAccountButton';
import { ContainerSigInButton } from './styles';

export const SigInButton: FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { pathname } = useRouter();

  if (isAuthenticated) {
    return <MyAccountButton user={user} />;
  }
  return (
    <ContainerSigInButton>
      <RenderIf condition={pathname !== '/register'}>
        <Link href="/register" variant="secondary" outline mR="lg">
          Register
        </Link>
      </RenderIf>
      <RenderIf condition={pathname !== '/login'}>
        <Link href="/login" variant="secondary">
          Login
        </Link>
      </RenderIf>
    </ContainerSigInButton>
  );
};
