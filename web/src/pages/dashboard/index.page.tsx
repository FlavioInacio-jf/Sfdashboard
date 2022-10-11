import Head from 'next/head';
import { ReactElement } from 'react';
import { BsPlus } from 'react-icons/bs';
import { Box, Button, LayoutDashboard } from '../../components';
import { displayDateHelper } from '../../helpers';
import { withSSRAuth } from '../../utils';
import { NextPageWithLayout } from '../_app.page';

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex flex-col h-full">
        <header className="flex justify-between items-center p-[3.2rem]">
          <div>
            <h2 className="text-white font-bold text-[2.8rem]">Dashboard</h2>
            <span className="flex text-[1.6rem] mt-[1.2rem] font-medium  text-[#5f5f5f]">
              {displayDateHelper(new Date())}
            </span>
          </div>
          <Button variant="primary" positionIcon="right" size="md">
            Criar transação <BsPlus />
          </Button>
        </header>
        <div className="flex px-[3.2rem]">
          <Box>oi</Box>
          <Box>oi</Box>
        </div>
      </div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
export default Dashboard;

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  };
});
