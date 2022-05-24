import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children?: ReactNode;
  id?: string;
  colorMode?: string;
};

const Blurb = ({ children, id, colorMode }: Props) => {
  return (
    <StyledBlurb id={id} colorMode={colorMode}>
      {children}
    </StyledBlurb>
  );
};

export default Blurb;

const StyledBlurb = styled.div<Props>`
  display: block;
  width: 100%;
  max-width: 65ch;
  ${(props) => props.colorMode === 'dark' && darkModeMixin}
`;

const darkModeMixin = css`
  h3 {
    color: var(--color-text-headings-dark);
  }
  p {
    color: var(--color-text-body-dark);
  }
`;
