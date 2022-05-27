import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Routes } from './routes';
import { queryClient } from './services/query';
import GlobalStyle from './styles/globalStyle';
import { Theme } from './styles/Theme';

export const App: FC = () => {
  return (
    <Theme>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Theme>
  );
};
