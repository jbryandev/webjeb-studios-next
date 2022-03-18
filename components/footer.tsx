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
  background-color: #202f38;
  padding: 0 1rem 0 1rem;
`;

const FooterContainer = styled.div`
  max-width: 1408px;
  display: flex;
  margin: auto;
  padding: 3rem 0 3rem 0;
`;

const MenuWrapper = styled.div`
  li {
    list-style-type: none;
  }
`;
