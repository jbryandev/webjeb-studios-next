import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
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
              styles={{ marginRight: '2rem', marginBottom: '2rem' }}
            >
              Get started
            </Button>
            <Button href='#services' variant='secondary'>
              Learn More
            </Button>
          </div>
          <div>
            <Image
              src='/images/hero-img.png'
              alt='James Bryan, founder of Webjeb Studios'
              width={543}
              height={545}
            />
          </div>
        </HeroContainer>
      </Section>
      <Services id='services'>
        <Section>
          <SectionTitle>Core Services</SectionTitle>
          <h2 style={{ color: 'var(--color-text-headings-dark)' }}>
            Everything you need to grow online
          </h2>
          <ServiceBlurbs>
            <Blurb id='web-design' colorMode='dark'>
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
            <Blurb id='website-care-plans' colorMode='dark'>
              <Image
                src='/images/care-plans-icon.png'
                alt='Website Care Plans'
                width='100%'
                height='100%'
              />
              <h5>Website Care Plans</h5>
              <p>
                Keep your site maintained, secure, backed up, and performing at
                its very best with a website care plan that includes monthly
                reporting on traffic and page views.
              </p>
            </Blurb>
            <Blurb id='seo-boost' colorMode='dark'>
              <Image
                src='/images/seo-boost-icon.png'
                alt='SEO Boost'
                width='100%'
                height='100%'
              />
              <h5>SEO Boost</h5>
              <p>
                Optimize your site for search so that your audience finds you
                first. Get the <em>right</em> traffic to your website (folks
                ready to buy from you), not just more traffic.
              </p>
            </Blurb>
          </ServiceBlurbs>
          <Button href='/contact' variant='primary'>
            Get started
          </Button>
        </Section>
      </Services>
      <Section id='features'>
        <SectionTitle>What you can expect</SectionTitle>
        <h2>All the features to make you stand out</h2>
        <FeatureBlurbs>
          <Blurb>
            <Image
              src='/images/mobile-friendly-icon.png'
              alt='Mobile Friendly'
              width='100%'
              height='100%'
            />
            <h5>Mobile-Friendly</h5>
            <p>
              Your site will always look good and perform well on a variety of
              screens and mobile devices.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src='/images/conversion-icon.png'
              alt='Designed for Conversion'
              width='100%'
              height='100%'
            />
            <h5>Designed for Conversion</h5>
            <p>
              I design with your audience in mind. Every element is carefully
              crafted to turn leads into customers.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src='/images/seo-icon.png'
              alt='Optimized for Search'
              width='100%'
              height='100%'
            />
            <h5>Optimized for Search</h5>
            <p>
              Your site comes standard with basic SEO to help you rank up on
              Google. I also offer an <a href='#services'>SEO boost</a> when you
              need to take it to the next level.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src='/images/strategy-icon.png'
              alt='Strategy Based Design'
              width='100%'
              height='100%'
            />
            <h5>Strategy Based</h5>
            <p>
              I work to understand your business and tailor the design to reach
              and connect with your ideal customer.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src='/images/maintenance-icon.png'
              alt='Easy to Update & Maintain'
              width='100%'
              height='100%'
            />
            <h5>Easy to Update & Maintain</h5>
            <p>
              I make it easy for you to update and maintain (if you're the hands
              on type). If you're not, I offer website care plans to keep you
              covered.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src='/images/growth-plan-icon.png'
              alt='Grows With Your Business'
              width='100%'
              height='100%'
            />
            <h5>Grows With You</h5>
            <p>
              I help you develop a long-term strategy for your brand and build
              your site to make it easy to expand as your business grows.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src='/images/trusted-partner-icon.png'
              alt='Trusted Partnership'
              width='100%'
              height='100%'
            />
            <h5>Trusted Partnership</h5>
            <p>
              I'm in it for the long haul. You get a dedicated web designer in
              your corner supporting you every step of the way.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src='/images/empowered-icon.png'
              alt='Empowering Experience'
              width='100%'
              height='100%'
            />
            <h5>Empowering Experience</h5>
            <p>
              I empower you to have confidence in your website and how to use it
              effectively to scale your business.
            </p>
          </Blurb>
        </FeatureBlurbs>
      </Section>
      <RecentWork id='work'>
        <Section>
          <div style={{ textAlign: 'center' }}>
            <h2>Recent Work</h2>
            <Divider />
          </div>
        </Section>
      </RecentWork>
      <Testimonials id='testimonials'>
        <Section>
          <div style={{ textAlign: 'center' }}>
            <h2>What my clients say</h2>
            <Divider />
          </div>
        </Section>
      </Testimonials>
      <FoundersNote>
        <Section>
          <h4 style={{ color: 'var(--color-text-headings-dark)' }}>
            A message from the founder:
          </h4>
        </Section>
      </FoundersNote>
    </Layout>
  );
};

export default Home;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      clamp(
        100%/ (2 + 1) + 0.1%,
        (var(--breakpoint-tablet) - 100vw) * 1000,
        100%
      ),
      1fr
    )
  );
  grid-gap: var(--document-padding);
  justify-items: center;
`;

const Services = styled.section`
  background-image: linear-gradient(
      0deg,
      rgba(32, 47, 56, 0.86) 0%,
      #202f38 100%
    ),
    url('/images/web-services-bg.jpg');
  background-size: cover;
  background-position: center;
`;

const ServiceBlurbs = styled.div`
  padding-top: var(--document-padding);
  padding-bottom: var(--document-padding);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      clamp(
        clamp(
          100%/ (3 + 1) + 0.1%,
          (var(--breakpoint-tablet) - 100vw) * 1000,
          100%/ (2 + 1) + 0.1%
        ),
        (var(--breakpoint-mobile) - 100vw) * 1000,
        100%
      ),
      1fr
    )
  );
  grid-gap: var(--document-padding);
`;

const FeatureBlurbs = styled.div`
  padding-top: var(--document-padding);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      clamp(
        clamp(
          100%/ (4 + 1) + 0.1%,
          (var(--breakpoint-tablet) - 100vw) * 1000,
          100%/ (2 + 1) + 0.1%
        ),
        (var(--breakpoint-mobile) - 100vw) * 1000,
        100%
      ),
      1fr
    )
  );
  grid-gap: var(--document-padding);
`;

const RecentWork = styled.section`
  background-color: var(--color-ltgray-background);
`;

const Divider = styled.div`
  display: inline-block;
  width: 200px;
  height: 5px;
  background-color: var(--color-primary);
`;

const Testimonials = styled.section`
  background-color: var(--color-mdgray-background);
`;

const FoundersNote = styled.section`
  background-color: var(--color-dark-background);
`;
