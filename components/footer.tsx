import Menu from './menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/webjeb-studios-logo-wt.png';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer className='MaxWidthWrapper'>
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
`;

const FooterContainer = styled.div`
  display: flex;
  padding-top: 4.8rem;
  padding-bottom: 4.8rem;
`;

const MenuWrapper = styled.div`
  li {
    list-style-type: none;
  }
`;
