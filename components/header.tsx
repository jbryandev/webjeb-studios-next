import MainMenu from './menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Section from './section';
import Button from './button';
import BREAKPOINTS from '../constants';

const Header = () => {
  return (
    <StyledHeader>
      <Section>
        <HeaderContainer>
          <Link href={'/'}>
            <a>
              <Image
                src='/images/webjeb-studios-logo.png'
                alt='Webjeb Studios Logo'
                width='169'
                height='47'
              />
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
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 5;
  background-color: var(--color-light-background);
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);

  Section {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

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
    font-weight: 600;
    font-size: 1.8em;
    transition: opacity 0.4s ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.4s ease-in-out;
    }
  }
`;
