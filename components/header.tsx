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
    <Section
      id='header'
      customStyles={{
        position: 'sticky',
        width: '100%',
        top: '0',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        zIndex: '5',
        boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
      }}
    >
      <HeaderContainer>
        <Link href={'/'}>
          <a>
            <Image src={logo} alt='Webjeb Studios Logo' placeholder='blur' />
          </a>
        </Link>
        <MenuContainer>
          <MenuWrapper>
            <MainMenu />
          </MenuWrapper>
          <Button href='/contact' variant='primary'>
            Get started
          </Button>
        </MenuContainer>
      </HeaderContainer>
    </Section>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  li {
    display: inline;
    margin-right: 2.4rem;
  }
  a {
    text-decoration: none;
    color: var(--color-text-headings);
    font-weight: 700;
    font-size: 1.8em;
    transition: opacity 0.4s ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.4s ease-in-out;
    }
  }
`;
