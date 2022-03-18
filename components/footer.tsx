import Menu from './menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/webjeb-studios-logo-wt.png';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Link href={'/'}>
          <a>
            <Image src={logo} alt='Webjeb Studios Logo' />
          </a>
        </Link>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: var(--color-dark-background);
  padding: 0 var(--document-padding) 0 var(--document-padding);
`;

const FooterContainer = styled.div`
  max-width: var(--document-max-width);
  display: flex;
  margin: auto;
  padding: 4.8rem 0 4.8rem 0;
`;

const MenuWrapper = styled.div`
  li {
    list-style-type: none;
  }
`;
