import Logo from './logo';
import Menu from './menu';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 94px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
`;
