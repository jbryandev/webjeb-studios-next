import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '../components/button';
import Section from '../components/section';
import SectionTitle from '../components/section-title';
import Blurb from '../components/blurb';
import FooterCTA from '../components/footer-cta';
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
import BREAKPOINTS from '../constants';

const Home: NextPage = () => {
  return (
    <Layout title='Webjeb Studios | We Make Jamstack Websites'>
      <Section
        id='hero'
        customStyles={{
          backgroundColor: 'var(--color-ltgray-background)',
        }}
      >
        <HeroContainer>
          <div>
            <h1>Harness the power of the modern web</h1>
            <p>
              Leverage the latest in web tech to build a faster, more secure
              website that drives your business forward.
            </p>
            <Button
              href='#discover-part1'
              variant='secondary'
              styles={{ marginRight: '2rem', marginBottom: '2rem' }}
            >
              Discover how
            </Button>
            <Button href='/contact' variant='primary'>
              Work with us
            </Button>
          </div>
          <div></div>
        </HeroContainer>
      </Section>
      <Section id='benefits'>
        <BenefitsSnippet>
          <Blurb id='speed'>
            <h3>Speed</h3>
            <p>
              We build the fastest websites on the web using pre-built pages
              served statically over content delivery networks (CDN)
              geographically closest to your audience.
            </p>
          </Blurb>
          <Blurb id='security'>
            <h3>Security</h3>
            <p>
              We host your site as a collection of static assets located on a
              CDN. Since server connections are removed from the equation,
              you're less vulnerable to attacks.
            </p>
          </Blurb>
          <Blurb id='scale'>
            <h3>Scale</h3>
            <p>
              Scale your site with ease without the hefty price tag. Serving
              static assets over CDN results in big gains over traditional
              servers as your audience grows.
            </p>
          </Blurb>
        </BenefitsSnippet>
      </Section>
      <Section id='discover-part1'>
        <h2>Traditional web architecture is outdated</h2>
        <p className='emphasis'>
          In today's increasingly-crowded and rapidly-changing web, websites
          need to be more flexible and nimble to stand out from the pack.
        </p>
        <p>
          Content management systems (CMS) like Wordpress, Drupal, Wix, and
          Squarespace have ruled the web since the early 2000's. They use a
          traditional web architecture where content and display are managed
          together. This makes them convenient but also limited. Plugins can
          extended functionality, but this becomes complex, slow, and harder to
          maintain at scale.
        </p>
      </Section>
      <Section id='discover-part2'>
        <h2>The future of the web is decoupled</h2>
        <p className='emphasis'>
          A new decoupled approach has emerged and it is changing the way we
          think about and build websites.
        </p>
        <p>
          In a decoupled system, the content is separate from the display. This
          allows you to choose the "best in breed" solution for each component
          of your website. This is akin to having a hand-picked team of
          specialists working in concert together, each performing their own
          task with the highest degree of competancy. Because decoupled websites
          are highly optimized, the costs to maintain, secure, and scale are
          lower than traditional CMS solutions.
        </p>
      </Section>
      <Section id='discover-part3'>
        <h2>The Jamstack revolution</h2>
        <p>
          The name given to this decoupled approach is the Jamstack. Jamstack
          stands for Javascript, APIs, and Markup. These three terms represent
          the major components of a Jamstack website. Javascript handles the
          dynamic functionality, APIs provide access to the CMS and business
          logic, and Markup represents the user interface which is compiled at
          build time and served statically via CDN.
        </p>
        <h3>The benefits of Jamstack</h3>
        <p>
          The benefits of Jamstack are undeniably impressive: better
          performance, lock-tight security, unlimited flexibility and
          scalability, portability, and maintainability. Not only that, but a
          traditional CMS like Wordpress (or any CMS) can still be part of the
          solution. The Jamstack approach isn’t right for every situation, but
          if your needs extend beyond a simple blog or landing page style site,
          then Jamstack could be a game-changer for you.
        </p>
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

const BenefitsSnippet = styled.div`
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
