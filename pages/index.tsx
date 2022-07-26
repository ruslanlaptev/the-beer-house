import type { NextPage } from 'next';
import Head from 'next/head';
import RootContainer from '../components/layout/RootContainer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import BeerCatalog from '../features/BeerCatalog';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>the beer house</title>
      </Head>

      <RootContainer>
        <Header />
        <Main>
          <BeerCatalog />
        </Main>
      </RootContainer>
    </>
  );
};

export default Home;
