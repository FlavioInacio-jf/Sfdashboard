import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies } from 'nookies';

export const withSSRAuth = <T>(fn: GetServerSideProps<T>): GetServerSideProps => {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<T>> => {
    const { 'SFDashboard.auth.token': accessToken, 'SFDashboard.auth.refreshToken': refreshToken } =
      parseCookies(ctx);

    if (!accessToken && !refreshToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/'
        }
      };
    }
    return await fn(ctx);
  };
};
