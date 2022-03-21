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
      <Section id='hero'>
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
      <ServicesSection id='services'>
        <Section>
          <SectionTitle>Core Services</SectionTitle>
          <h2 style={{ color: 'var(--color-text-headings-dark)' }}>
            Everything you need to grow online
          </h2>
          <ServicesBlurbs>
            <Blurb>
              <Image
                src='/images/web-design-icon.png'
                alt='Website Design'
                width='100%'
                height='100%'
              />
              <h5>Website Design</h5>
              <p>
                Modern, responsive websites that convert and are designed for
                growth. I can redesign your current site or build something new
                from the ground up.
              </p>
            </Blurb>
            <Blurb>
              <Image
                src='/images/web-design-icon.png'
                alt='Website Design'
                width='100%'
                height='100%'
              />
              <h5>Website Design</h5>
              <p>
                Modern, responsive websites that convert and are designed for
                growth. I can redesign your current site or build something new
                from the ground up.
              </p>
            </Blurb>
            <Blurb>
              <Image
                src='/images/web-design-icon.png'
                alt='Website Design'
                width='100%'
                height='100%'
              />
              <h5>Website Design</h5>
              <p>
                Modern, responsive websites that convert and are designed for
                growth. I can redesign your current site or build something new
                from the ground up.
              </p>
            </Blurb>
          </ServicesBlurbs>
        </Section>
      </ServicesSection>
    </Layout>
  );
};

export default Home;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(490px, 1fr));
  grid-gap: var(--document-padding);
  justify-items: center;
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
`;

const ServicesSection = styled.section`
  background-image: linear-gradient(
      0deg,
      rgba(32, 47, 56, 0.86) 0%,
      #202f38 100%
    ),
    url('/images/web-services-bg.jpg');
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
`;

const ServicesBlurbs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--document-padding);
  justify-items: center;
`;
