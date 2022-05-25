import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';
import styled from 'styled-components';
import Button from '../components/button';
import Section from '../components/section';
import Blurb from '../components/blurb';
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
              href='#discover'
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
        <BenefitsContainer>
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
        </BenefitsContainer>
      </Section>
      <Section id='discover'>
        <h2>Traditional web architecture is outdated</h2>
        <DiscoverLeft>
          <div>
            <p className='emphasis'>
              In today's increasingly-crowded and rapidly-changing web, websites
              need to be more flexible and nimble to stand out from the pack.
            </p>
            <p className='paragraph'>
              Content management systems (CMS) like Wordpress, Drupal, Wix, and
              Squarespace have ruled the web since the early 2000's. They use a
              traditional web architecture where content and display are managed
              together. This makes them convenient but also limited. Plugins can
              extended functionality, but this becomes complex, slow, and harder
              to maintain at scale.
            </p>
          </div>
          <div></div>
        </DiscoverLeft>
      </Section>
      <Section>
        <DiscoverRight>
          <div></div>
          <div>
            <h2>The future of the web is decoupled</h2>
            <p className='emphasis'>
              A new decoupled approach has emerged and it is changing the way we
              think about and build websites.
            </p>
            <p className='paragraph'>
              In a decoupled system, the content is separate from the display.
              This allows you to choose the "best in breed" solution for each
              component of your website. This is akin to having a hand-picked
              team of specialists working in concert together, each performing
              their own task with the highest degree of competancy. Because
              decoupled websites are highly optimized, the costs to maintain,
              secure, and scale are lower than traditional CMS solutions.
            </p>
          </div>
        </DiscoverRight>
      </Section>
      <Section>
        <DiscoverLeft>
          <div>
            <h2>The Jamstack revolution</h2>
            <p className='paragraph'>
              The name given to this decoupled approach is the Jamstack.
              Jamstack stands for Javascript, APIs, and Markup. These three
              terms represent the major components of a Jamstack website.
              Javascript handles the dynamic functionality, APIs provide access
              to the CMS and business logic, and Markup represents the user
              interface which is compiled at build time and served statically
              via CDN.
            </p>
            <h3>The benefits of Jamstack</h3>
            <p className='paragraph'>
              The benefits of Jamstack are undeniably impressive: better
              performance, lock-tight security, unlimited flexibility and
              scalability, portability, and maintainability. Not only that, but
              a traditional CMS like Wordpress (or any CMS) can still be part of
              the solution. The Jamstack approach isn't right for every
              situation, but if your needs extend beyond a simple blog or
              landing page style site, then Jamstack could be a game-changer for
              you.
            </p>
          </div>
          <div>
            <p className='emphasis'>
              The benefits of Jamstack are undeniably impressive: better
              performance, lock-tight security, unlimited flexibility and
              scalability, portability, and maintainability.
            </p>
          </div>
        </DiscoverLeft>
      </Section>
      <Section>
        <BottomLineContainer>
          <div className='heading'>
            <h2>The Bottom Line</h2>
            <h3>What can Jamstack do for you?</h3>
          </div>
          <div>
            <h3>Rank higher</h3>
            <p>
              Outpace the competition in time to first byte and other core web
              vitals that Google uses to rank search results. Own one of the
              fastest sites on the web.
            </p>
            <h3>Lower maintenance cost</h3>
            <p>
              Jamstack sites are pre-generated, so they are simple to host and
              maintain. No constant plugin and software updates to make sure
              your site stays secure.
            </p>
          </div>
          <div>
            <h3>Boost conversions</h3>
            <p>
              Increase user satisfaction and time on your site with blazing fast
              page speeds. Higher user engagement leads to increased
              conversions.
            </p>
            <h3>Scale without limits</h3>
            <p>
              Your site is delivered over a CDN with no traffic limits. With
              severless architecture, your site scales automatically, so large
              spikes in traffic won’t crash your site.
            </p>
          </div>
        </BottomLineContainer>
      </Section>
      <Section
        id='about'
        customStyles={{
          backgroundColor: 'var(--color-ltgray-background)',
        }}
      >
        <AboutContainer>
          <div className='heading'>
            <h2>Introducing Webjeb Studios</h2>
            <h3>We're experts in Jamstack development</h3>
            <p>
              We've embraced the modern tools and technologies that are making a
              better web possible today. We're passionate about working together
              with our clients to unlock their full potential with the Jamstack.
            </p>
          </div>
          <div className='blurb'>
            <h3>Leadership</h3>
            <p>
              Our team is led by our founder and CEO, James Bryan. James built
              his first website in 1994 and has been doing it ever since! He's
              also a dedicated husband, dad, engineer, pilot, and guitar
              aficianado.
            </p>
          </div>
          <div className='blurb'>
            <h3>Team</h3>
            <p>
              We're a small but mighty team. James manages the projects and his
              wife, Lisa, oversees the day-to-day. We employ a network of web
              professionals, each with their own area of expertise. Seasoned
              pup-professionals, Hannah and Hebert, keep up team morale.
            </p>
          </div>
          <div className='blurb'>
            <h3>Oklahoma Proud</h3>
            <p>
              We serve clients all over the world from our home base in Edmond,
              OK. But we especially enjoy serving our local Oklahomans! We're a
              proud Oklahoma-owned business. If you're in the OKC metro, let's
              connect over coffee!
            </p>
          </div>
        </AboutContainer>
      </Section>
      <Section id='services'>
        <ServicesContainer>
          <h2>Services</h2>
          <div className='blurb'>
            <h3>Strategy</h3>
            <p>
              We help you develop a Jamstack strategy and hand pick the best
              tools and services for your project.
            </p>
          </div>
          <div className='blurb'>
            <h3>Analytics</h3>
            <p>
              We provide a simple to use and privacy-focused analytics solution
              made for the decoupled web.
            </p>
          </div>
          <div className='blurb'>
            <h3>Design</h3>
            <p>
              We use modern design frameworks coupled with foundational design
              principles to create striking designs that are lightning fast and
              effective.
            </p>
          </div>
          <div className='blurb'>
            <h3>Development</h3>
            <p>
              We solve development challenges with out-of-the-box thinking and
              an unwavering committment to quality.
            </p>
          </div>
          <div className='blurb'>
            <h3>SEO</h3>
            <p>
              Jamstack is already a big win for search engine optimization
              (SEO). We help you take it a step further with SEO-specific
              improvements designed to boost traffic and increase engagement.
            </p>
          </div>
          <div className='blurb'>
            <h3>Management</h3>
            <p>
              Protect your investment with our website management services. We
              offer hosting, uptime monitoring, backups, disaster recovery,
              monthly content updates, prioritized service, and more.
            </p>
          </div>
        </ServicesContainer>
      </Section>
      <Section id='pricing'>
        <PricingContainer>
          <h2>Packages & Pricing</h2>
          <div className='package-desc'>
            <p>
              No matter your experience level with Jamstack, we have a package
              for you. Each package starts at the price shown and is customized
              to your specific requirements.
            </p>
            <p>
              Are you a web agency looking to partner with us to deliver
              Jamstack solutions? We have whitelabel packages too.{' '}
              <Link href='/contact'>
                <a>Contact us</a>
              </Link>{' '}
              for more details.
            </p>
          </div>
          <div className='blurb'>
            <h3>Jamstack Starter</h3>
            <p>
              Choose your CMS and pair it with one of our handcrafted design
              templates. For clients new to the Jamstack game and looking to get
              up and running quickly.
            </p>
          </div>
          <div className='price'>
            <h3 className='emphasis'>Starting at $5,900</h3>
          </div>
          <div className='blurb'>
            <h3>Jamstack Conversion</h3>
            <p>
              Decouple your existing traditional website. We carry over all
              content and keep the design consistent. For clients happy with
              their look and feel but wanting to tap into the power of the
              Jamstack.
            </p>
          </div>
          <div className='price'>
            <h3 className='emphasis'>Starting at $6,900</h3>
          </div>
          <div className='blurb'>
            <h3>Jamstack Ultimate</h3>
            <p>
              A customized solution from the ground up. Includes tech strategy,
              design, development, and SEO. For clients wanting a custom
              solution tailored to their unique business needs.
            </p>
          </div>
          <div className='price'>
            <h3 className='emphasis'>Starting at $12,900</h3>
          </div>
        </PricingContainer>
      </Section>
      <Section
        id='process'
        customStyles={{
          backgroundColor: 'var(--color-ltgray-background)',
        }}
      >
        <ProcessContainer>
          <div className='heading'>
            <h2>How it works</h2>
          </div>
          <div className='blurb'>
            <h3>Discover</h3>
            <p>
              This phase is all about you. We learn the ins and outs of your
              business and define your needs. Then we develop a solution and a
              roadmap to accomplish your goals.
            </p>
          </div>
          <div className='blurb'>
            <h3>Design & Develop</h3>
            <p>
              This phase is all about implementation and execution. We take what
              we learned in the discovery phase and deliver the solution with
              speed and quality.
            </p>
          </div>
          <div className='blurb'>
            <h3>Refine & Launch</h3>
            <p>
              This phase is all about your satisfaction. We refine based on your
              feedback and then, with our patented launch checklist in hand, we
              take your site live.
            </p>
          </div>
        </ProcessContainer>
      </Section>
      <Section id='work'>
        <WorkContainer>
          <h2>Recent Work</h2>
          <div className='blurb'>
            <h3>Arculum Computers</h3>
            <p>
              A budding custom PC builder needed a fast and effective website to
              stand out from their competition. This is the result.
            </p>
          </div>
          <div></div>
          <div className='blurb'>
            <h3>Mark Bryan Construction</h3>
            <p>
              A trusted name in the local communtity for over three decades,
              this residential remodeling company needed to take their brand to
              the next level.
            </p>
          </div>
          <div></div>
        </WorkContainer>
      </Section>
      <Section
        id='cta'
        customStyles={{
          backgroundColor: 'var(--color-ltgray-background)',
        }}
      >
        <CTAContainer>
          <div className='cta'>
            <h2>
              Ready to leverage the power of the Jamstack to grow your business?
            </h2>
            <h3>Don't let the revolution pass you by</h3>
          </div>
          <p>
            Beat your competition to the punch - be the first to join the
            Jamstack revolution and start reaping the benefits before they do.
          </p>
          <Button href='/contact' variant='primary'>
            Work with us
          </Button>
        </CTAContainer>
      </Section>
    </Layout>
  );
};

export default Home;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 537px 1fr;
  grid-gap: var(--document-padding);
  justify-items: center;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitsContainer = styled.div`
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

const DiscoverLeft = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-gap: var(--document-padding);

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const DiscoverRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 60%;
  grid-gap: var(--document-padding);

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const BottomLineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--document-padding);
  justify-items: center;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: 1fr;
    justify-items: left;
  }

  p {
    max-width: 362px;
  }

  .heading {
    grid-column: 1 / -1;
    text-align: center;
`;

const AboutContainer = styled.div`
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

  .heading {
    grid-column: 1 / -1;
    justify-self: center;
    text-align: center;

    p {
      max-width: 630px;
    }
  }

  .blurb {
    max-width: 309px;
  }
`;

const ServicesContainer = styled.div`
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

  h2 {
    grid-row: 1 / span 3;
  }

  .blurb {
    max-width: 309px;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    h2 {
      grid-row: 1 / span 6;
    }
`;

const PricingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--document-padding);

  h2 {
    grid-column: 1 / -1;
  }

  .package-desc {
    grid-row: 2 / span 3;
    font-style: italic;
    max-width: 338px;
  }

  .blurb {
    max-width: 397px;
  }

  .price {
    text-align: right;
  }
`;

const ProcessContainer = styled.div`
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

  .heading {
    grid-column: 1 / -1;
    justify-self: center;
    text-align: center;

    p {
      max-width: 630px;
    }
  }

  .blurb {
    max-width: 309px;
  }
`;

const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--document-padding);

  h2 {
    grid-row: 1 / span 3;
  }

  .blurb {
    grid-column: 2 / -1;
    max-width: 470px;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    h2 {
      grid-row: 1 / span 6;
    }
`;

const CTAContainer = styled.div`
  display: grid;
  justify-items: center;

  .cta {
    text-align: center;
    max-width: 956px;
  }

  p {
    text-align: center;
    max-width: 600px;
  }
`;
