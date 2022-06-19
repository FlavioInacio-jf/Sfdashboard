import type { AppProps } from 'next/app';
import Head from 'next/head';
import Modal from 'react-modal';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutVisitor } from '../components/Layouts/LayoutVisitor';
import { queryClient } from '../services/query';
import GlobalStyle from '../styles/globalStyle';
import '../styles/reset.css';
import { Theme } from '../styles/Theme';

Modal.setAppElement('#__next');

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppProps) => {
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
        <LayoutVisitor>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen />
          </QueryClientProvider>
        </LayoutVisitor>
      </Theme>
    </>
  );
};

export default MyApp;
