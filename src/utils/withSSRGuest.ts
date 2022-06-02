import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies } from 'nookies';

export const withSSRGuest = <T>(fn: GetServerSideProps<T>): GetServerSideProps => {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<T>> => {
    const { 'SFDashboard.auth.token': accessToken, 'SFDashboard.auth.refreshToken': refreshToken } =
      parseCookies(ctx);

    if (accessToken && refreshToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/products'
        }
      };
    }
    // eslint-disable-next-line @typescript-eslint/return-await
    return await fn(ctx);
  };
};
