import MainMenu from './menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Button from './button';
import BREAKPOINTS from '../constants';
import Section from './section';
import logo from '../public/images/webjeb-studios-logo.png';

const Header = () => {
  return (
    <Section id='header' customStyles={HeaderCustomStyles}>
      <HeaderContainer>
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
        <MenuContainer>
          <MenuWrapper>
            <MainMenu />
          </MenuWrapper>
          <Button href='#' variant='typeform'>
            Work with us
          </Button>
        </MenuContainer>
      </HeaderContainer>
    </Section>
  );
};

export default Header;

const HeaderCustomStyles = {
  position: 'sticky',
  width: '100%',
  top: '0',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  zIndex: '5',
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a.logo {
    width: 169px;
    @media (max-width: ${BREAKPOINTS.small}) {
      width: 110px;
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  @media (max-width: ${BREAKPOINTS.large}) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  li {
    display: inline;
    margin-right: 4.25rem;

    @media (max-width: ${BREAKPOINTS.xlarge}) {
      margin-right: 3rem;
    }
  }
  a {
    text-decoration: none;
    color: var(--color-text-headings);
    font-weight: 600;
    font-size: 1.8em;
    transition: opacity 0.4s ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.4s ease-in-out;
    }
  }
`;
