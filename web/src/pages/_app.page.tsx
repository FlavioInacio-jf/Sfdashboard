import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import Modal from 'react-modal';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from '../services';
import GlobalStyle from '../styles/globalStyle';
import '../styles/styles.css';
import { Theme } from '../styles/Theme';

Modal.setAppElement('#__next');

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="theme-color" content="#00AF91" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=10, minimum-scale=1.0"
        />
      </Head>
      <Theme>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}

          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </Theme>
    </>
  );
};

export default MyApp;
