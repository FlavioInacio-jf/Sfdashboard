import { FC } from 'react';
import { LoaderBar, LoaderContainer, LoaderContent } from './styles';

export const Loader: FC = () => {
  return (
    <LoaderContainer>
      <LoaderContent>
        <LoaderBar left=".8rem" animationDelay="-0.24s"></LoaderBar>
        <LoaderBar left="3.2rem" animationDelay="-0.12s"></LoaderBar>
        <LoaderBar left="5.6rem" animationDelay="0"></LoaderBar>
      </LoaderContent>
    </LoaderContainer>
  );
};
