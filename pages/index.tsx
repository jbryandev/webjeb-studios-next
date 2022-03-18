import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
import hero from '../public/images/hero-img.png';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Layout title='Webjeb Studios - Next Version!'>
      <HeroSection>
        <div>
          <p>HI, I'M JAMES</p>
          <h1>I build amazing websites crafted to grow your business</h1>
        </div>
        <div>
          <Image src={hero} alt='James Bryan, founder of Webjeb Studios' />
        </div>
      </HeroSection>
    </Layout>
  );
};

export default Home;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(490px, 1fr));
  grid-gap: var(--document-padding);
`;
