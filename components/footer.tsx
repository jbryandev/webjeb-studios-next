import MainMenu, { LegalMenu } from './menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Section from './section';
import logo from '../public/images/webjeb-studios-logo-wt.png';

const Footer = () => {
  return (
    <Section
      id='footer'
      customStyles={{
        backgroundColor: 'var(--color-dark-background)',
        paddingBottom: 0,
      }}
    >
      <FooterContainer>
        <Link href={'/'}>
          <a>
            <Image src={logo} alt='Webjeb Studios Logo' placeholder='blur' />
          </a>
        </Link>
        <MenuWrapper>
          <h4>Menu</h4>
          <MainMenu />
        </MenuWrapper>
        <MenuWrapper>
          <h4>Legal</h4>
          <LegalMenu />
        </MenuWrapper>
      </FooterContainer>
      <BottomBarContainer>
        <p>
          &copy; {new Date().getFullYear()} Webjeb Studios | Designed in Edmond,
          OK
        </p>
      </BottomBarContainer>
    </Section>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      clamp(
        100%/ (3 + 1) + 0.1%,
        (var(--breakpoint-mobile) - 100vw) * 1000,
        100%
      ),
      1fr
    )
  );
  grid-gap: var(--document-padding);
  padding-bottom: var(--document-padding);
`;

const MenuWrapper = styled.div`
  ul {
    list-style: disc inside;
    padding-left: 0;
  }
  li {
    &::marker {
      font-size: 2em;
      color: var(--color-text-body-dark);
    }
  }
  a {
    margin-left: -0.5em;
    text-decoration: none;
    color: var(--color-text-body-dark);
  }
  h4 {
    color: var(--color-text-body);
  margin-bottom: 0.5em;
`;

const BottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;

  p {
    margin-bottom: 0;
  }
`;
