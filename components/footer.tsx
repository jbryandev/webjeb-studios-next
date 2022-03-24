import MainMenu, { LegalMenu } from './menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Section from './section';

const Footer = () => {
  return (
    <FooterSection
      id='footer'
      styles={{
        backgroundColor: 'var(--color-dark-background)',
      }}
    >
      <FooterContainer>
        <Link href={'/'}>
          <a>
            <Image
              src='/images/webjeb-studios-logo-wt.png'
              alt='Webjeb Studios Logo'
              width='169'
              height='47'
            />
          </a>
        </Link>
        <MenuWrapper>
          <StyledH4>Menu</StyledH4>
          <MainMenu />
        </MenuWrapper>
        <MenuWrapper>
          <StyledH4>Legal</StyledH4>
          <LegalMenu />
        </MenuWrapper>
      </FooterContainer>
      <BottomBarContainer>
        <p>
          &copy; {new Date().getFullYear()} Webjeb Studios. All rights reserved.
        </p>
      </BottomBarContainer>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled(Section)`
  &:sectioncontainer {
    padding-top: var(--section-padding);
    padding-bottom: 0;
  }
`;

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
`;

const StyledH4 = styled.h4`
  color: var(--color-text-body);
  margin-bottom: 0.5em;
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
`;

const BottomBarContainer = styled.div``;
