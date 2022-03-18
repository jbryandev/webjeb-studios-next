import Menu from './menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/webjeb-studios-logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Link href={'/'}>
          <a>
            <Image src={logo} alt='Webjeb Studios Logo' />
          </a>
        </Link>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  padding: 0 1rem 0 1rem;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  max-width: 1408px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem 0 1rem 0;
`;

const MenuWrapper = styled.div`
  li {
    display: inline;
    margin-right: 1.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
  a {
    text-decoration: none;
    color: #202f38;
    font-weight: 600;
    font-size: 0.9em;
    transition: opacity 0.4s ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.4s ease-in-out;
    }
  }
  li.menu-cta a {
    color: #fff;
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: #f26922;
    padding: 0.6rem 1rem 0.6rem 1rem;
    border-radius: 2px;
    transition: background-color 0.4s ease-in-out;

    &:hover {
      opacity: 1;
      background-color: #546972;
      transition: background-color 0.4s ease-in-out;
  }
`;
