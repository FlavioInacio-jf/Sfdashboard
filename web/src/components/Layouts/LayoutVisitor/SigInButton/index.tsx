import { useRouter } from 'next/router';
import { FC } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { LogoutMutation } from '../../../../mutations/logoutMutation';
import { Button } from '../../../Button';
import { Link } from '../../../Link';
import { RenderIf } from '../../../RenderIf';
import { ContainerSigInButton } from './styles';

export const SigInButton: FC = () => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useRouter();

  const { mutate: logoutMutate } = LogoutMutation();

  const handleLogout = () => {
    logoutMutate();
  };
  if (isAuthenticated) {
    return (
      <div>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    );
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
