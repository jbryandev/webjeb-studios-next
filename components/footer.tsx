import MainMenu, {
  ServicesMenu,
  PackagesMenu,
  ProcessMenu,
  LegalMenu,
} from './menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Section from './section';
import TypeformLink from './typeform-link';
import logo from '../public/images/webjeb-studios-logo.png';
import BREAKPOINTS from '../constants.js';

const Footer = () => {
  return (
    <Section
      id='footer'
      customStyles={{
        backgroundColor: 'var(--color-ltgray-background)',
        paddingBottom: 0,
      }}
    >
      <FooterContainer>
        <div className='about'>
          <Link href={'/'}>
            <a className='logo'>
              <Image
                src={logo}
                alt='Webjeb Studios Logo'
                placeholder='blur'
                layout='responsive'
              />
            </a>
          </Link>
          <p>
            We're Jamstack experts based in Edmond, Oklahoma, where the wind
            comes sweeping down the plain.
          </p>
          <TypeformLink href='#' id='As7KOBMB'>
            Contact us
          </TypeformLink>
        </div>
        <div className='menu'>
          <p className='menu-title'>Navigation</p>
          <MainMenu />
        </div>
        <div className='menu'>
          <p className='menu-title'>Services</p>
          <ServicesMenu />
        </div>
        <div className='menu'>
          <p className='menu-title'>Packages</p>
          <PackagesMenu />
        </div>
        <div className='menu'>
          <p className='menu-title'>Process</p>
          <ProcessMenu />
        </div>
      </FooterContainer>
      <BottomBarContainer>
        <p className='copyright'>
          Copyright &copy; {new Date().getFullYear()} Webjeb Studios. All rights
          reserved.
        </p>
        <div className='menu'>
          <LegalMenu />
        </div>
      </BottomBarContainer>
    </Section>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: var(--gutter-width);
  padding-bottom: var(--document-padding);

  .about {
    grid-column: 1 / span 3;

    p {
      margin-top: 3rem;
      max-width: 306px;
    }

    a {
      color: var(--color-text-body);
      text-decoration: underline;
    }

    a.logo {
      display: block;
      width: 169px;
      @media (max-width: ${BREAKPOINTS.small}) {
        width: 110px;
      }
    }
  }

  .menu {
    .menu-title {
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    a {
      text-decoration: none;
      color: var(--color-text-body);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    .about {
      grid-column: 1 / -1;
    }
    .menu {
      grid-column: span 4;
    }
  }
`;

const BottomBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: var(--gutter-width);
  padding-bottom: 1.5rem;

  .copyright {
    grid-column: 1 / span 3;
  }

  .menu {
    grid-column: 4 / span 4;

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      display: inline-block;
      margin-right: 1.5rem;

      ::after {
        content: '|';
        margin-left: 1.5rem;
      }

      :last-child {
        margin-right: 0;

        ::after {
          content: '';
        }
      }
    }

    a {
      text-decoration: underline;
      color: var(--color-text-body);
    }
  }

  @media (max-width: ${BREAKPOINTS.large}) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    .copyright {
      grid-column: 1 / -1;
    }
    .menu {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: ${BREAKPOINTS.small}) {
    .menu {
      li {
        display: block;
        margin-right: 0;

        ::after {
          content: '';
          margin-left: 0;
        }
      }
    }
  }
`;
