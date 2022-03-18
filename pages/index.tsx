import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
import hero from '../public/images/hero-img.png';

const Home: NextPage = () => {
  return (
    <Layout title='Webjeb Studios - Next Version!'>
      <p>HI, I'M JAMES</p>
      <h1>I build amazing websites crafted to grow your business</h1>
    </Layout>
  );
};

export default Home;
