import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '../components/button';
import Section from '../components/section';
import SectionTitle from '../components/section-title';
import Blurb from '../components/blurb';
import FooterCTA from '../components/footer-cta';
import BREAKPOINTS from '../constants';
import heroImg from '../public/images/hero-img.png';
import webDesignIcon from '../public/images/web-design-icon.png';
import carePlansIcon from '../public/images/care-plans-icon.png';
import seoBoostIcon from '../public/images/seo-boost-icon.png';
import mobileFriendlyIcon from '../public/images/mobile-friendly-icon.png';
import conversionIcon from '../public/images/conversion-icon.png';
import seoIcon from '../public/images/seo-icon.png';
import strategyIcon from '../public/images/strategy-icon.png';
import maintenanceIcon from '../public/images/maintenance-icon.png';
import growthPlanIcon from '../public/images/growth-plan-icon.png';
import trustedPartnerIcon from '../public/images/trusted-partner-icon.png';
import empoweredIcon from '../public/images/empowered-icon.png';
import arculumLogo from '../public/images/arculum-logo.jpeg';
import mbcLogo from '../public/images/mark-bryan-construction.jpeg';
import founderImage from '../public/images/james-bryan-founder.png';

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
              src={heroImg}
              alt='James Bryan, founder of Webjeb Studios'
              placeholder='blur'
            />
          </div>
        </HeroContainer>
      </Section>
      <Section
        id='services'
        customStyles={{
          backgroundImage:
            'linear-gradient(0deg, rgba(32, 47, 56, 0.86) 0%, var(--color-dark-background) 100%), url(/images/web-services-bg.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <SectionTitle>Core Services</SectionTitle>
        <h2 style={{ color: 'var(--color-text-headings-dark)' }}>
          Everything you need to grow online
        </h2>
        <ServiceBlurbs>
          <Blurb id='web-design' colorMode='dark'>
            <Image
              src={webDesignIcon}
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
              src={carePlansIcon}
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
              src={seoBoostIcon}
              alt='SEO Boost'
              width='100%'
              height='100%'
            />
            <h5>SEO Boost</h5>
            <p>
              Optimize your site for search so that your audience finds you
              first. Get the <em>right</em> traffic to your website (folks ready
              to buy from you), not just more traffic.
            </p>
          </Blurb>
        </ServiceBlurbs>
        <Button href='/contact' variant='primary'>
          Get started
        </Button>
      </Section>
      <Section id='features'>
        <SectionTitle>What you can expect</SectionTitle>
        <h2>All the features to make you stand out</h2>
        <FeatureBlurbs>
          <Blurb>
            <Image
              src={mobileFriendlyIcon}
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
              src={conversionIcon}
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
              src={seoIcon}
              alt='Optimized for Search'
              width='100%'
              height='100%'
            />
            <h5>Optimized for Search</h5>
            <p>
              Your site comes standard with basic SEO to help you rank up on
              Google. I also offer an <a href='#seo-boost'>SEO boost</a> when
              you need to take it to the next level.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src={strategyIcon}
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
              src={maintenanceIcon}
              alt='Easy to Update & Maintain'
              width='100%'
              height='100%'
            />
            <h5>Easy to Update & Maintain</h5>
            <p>
              I make it easy for you to update and maintain (if you're the hands
              on type). If you're not, I offer{' '}
              <a href='#website-care-plans'>website care plans</a> to keep you
              covered.
            </p>
          </Blurb>
          <Blurb>
            <Image
              src={growthPlanIcon}
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
              src={trustedPartnerIcon}
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
              src={empoweredIcon}
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
      <Section
        id='work'
        customStyles={{
          backgroundColor: 'var(--color-ltgray-background)',
          textAlign: 'center',
        }}
      >
        <h2>Recent Work</h2>
        <Divider />
        <FeaturedProjects>
          <FeaturedProject>
            <Image
              src={arculumLogo}
              alt='Arculum Computers'
              width={300}
              height={300}
            />
            <h5>Arculum Computers</h5>
          </FeaturedProject>
          <FeaturedProject>
            <Image
              src={mbcLogo}
              alt='Mark Bryan Construction'
              width={300}
              height={300}
            />
            <h5>Mark Bryan Construction</h5>
          </FeaturedProject>
        </FeaturedProjects>
      </Section>
      <Section
        id='testimonials'
        customStyles={{
          backgroundColor: 'var(--color-mdgray-background)',
          textAlign: 'center',
        }}
      >
        <h2>What my clients say</h2>
        <Divider />
        <p>COMING SOON!</p>
      </Section>
      <Section
        id='about'
        customStyles={{ backgroundColor: 'var(--color-dark-background)' }}
      >
        <FoundersNote>
          <div>
            <Image
              src={founderImage}
              alt='James Bryan, founder of Webjeb Studios'
            />
          </div>
          <div>
            <h4>A message from the founder:</h4>
            <p>
              With over two decades of web design experience, I understand the
              confusion and apprehension that comes with building a web presence
              because I've been there. Between the hosting, design, content
              creation, SEO, and security, it can be an overwhelming process but
              I'm here to guide you through it.
            </p>
            <p>
              My goal is for your website to become the cornerstone of your
              business. I help you get there through a proven, strategy-first
              approach that clarifies your message, connects with your audience,
              and guides them to action.
            </p>
            <p>
              I'm a solo designer backed by a professional network of
              specialized experts, so you get the personalized and caring
              service of a freelancer without the schedule delays, and the
              horsepower of an agency without feeling like a number.
            </p>
          </div>
        </FoundersNote>
      </Section>
      <FooterCTA />
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

  @media (max-width: ${BREAKPOINTS.tablet}) {
    /* Makes right content appear above left content in single column layout */
    div:last-child {
      order: -1;
    }
  }
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

const Divider = styled.div`
  display: inline-block;
  width: 200px;
  height: 5px;
  background-color: var(--color-primary);
  margin-bottom: var(--document-padding);
`;

const FeaturedProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--document-padding);
`;

const FeaturedProject = styled.div`
  text-align: left;
`;

const FoundersNote = styled.div`
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

  div:first-child {
    justify-self: center;
  }

  h4 {
    color: var(--color-text-headings-dark);
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-text-body-dark);
  }
`;
