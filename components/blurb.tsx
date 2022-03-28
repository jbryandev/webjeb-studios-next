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

  h4 {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 2em;
  }

  a {
    font-size: 2rem;
    text-decoration: none;
    color: var(--color-primary);

    &:hover {
      text-decoration: underline;
    }

    img {
      max-width: 40%;
    }
  }

  ${(props) => props.colorMode === 'dark' && darkModeMixin}
`;

const darkModeMixin = css`
  h4 {
    color: var(--color-text-headings-dark);
  }
  p {
    color: var(--color-text-body-dark);
  }
`;
