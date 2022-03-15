import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Webjeb Studios - Next Version!</title>
        <meta name='description' content='Jamstack websites!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>Main</main>
      <footer>Footer</footer>
    </>
  );
};

export default Home;
