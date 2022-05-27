import { FC } from 'react';
import { Routes } from './routes';
import GlobalStyle from './styles/globalStyle';
import { Theme } from './styles/Theme';

export const App: FC = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  );
};
