import { FC } from 'react';
import { BsPerson } from 'react-icons/bs';
import { ContainerSigInButton } from './styles';

export const SigInButton: FC = () => {
  return (
    <ContainerSigInButton type="button">
      <BsPerson />
      <span>
        Hello, login or <br />
        <span>register</span>
      </span>
    </ContainerSigInButton>
  );
};
