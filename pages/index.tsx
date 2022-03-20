import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
import hero from '../public/images/hero-img.png';
import styled from 'styled-components';
import Button from '../components/button';
import Section from '../components/section';
import SectionTitle from '../components/section-title';
import Blurb from '../components/blurb';

const Home: NextPage = () => {
  return (
    <Layout title='Webjeb Studios - Next Version!'>
      <Section>
        <HeroContainer>
          <div>
            <SectionTitle>Hi, I'm James</SectionTitle>
            <h1>I build amazing websites crafted to grow your business</h1>
            <p>
              I help small to medium sized businesses build, maintain, and grow
              their online presence through strategy-led web design,
              maintenance, and SEO. With me, you get a dedicated web designer in
              your corner from day one to launch and beyond.
            </p>
            <Button
              href='/contact'
              variant='primary'
              styles={{ marginRight: '2rem' }}
            >
              Get started
            </Button>
            <Button href='#services' variant='secondary'>
              Learn More
            </Button>
          </div>
          <div>
            <Image src={hero} alt='James Bryan, founder of Webjeb Studios' />
          </div>
        </HeroContainer>
      </Section>
      <Services id='services'>
        <Section>
          <SectionTitle>Core Services</SectionTitle>
          <h2 style={{ color: 'var(--color-text-headings-dark)' }}>
            Everything you need to grow online
          </h2>
          <ServicesBlurbs>
            <Blurb>Service 1</Blurb>
            <Blurb>Service 1</Blurb>
            <Blurb>Service 1</Blurb>
          </ServicesBlurbs>
        </Section>
      </Services>
    </Layout>
  );
};

export default Home;

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(490px, 1fr));
  grid-gap: var(--document-padding);
  justify-items: center;
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
`;

const Services = styled.section`
  background-color: var(--color-dark-background);
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
`;

const ServicesBlurbs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--document-padding);
  justify-items: center;
`;
