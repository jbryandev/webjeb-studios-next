import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  colorMode?: string;
  id?: string;
};

const Blurb = ({ children, colorMode, id }: Props) => {
  if (colorMode === 'dark') {
    return <DarkBlurb id={id}>{children}</DarkBlurb>;
  } else {
    return <LightBlurb id={id}>{children}</LightBlurb>;
  }
};

export default Blurb;

const StyledBlurb = styled.div`
  display: block;
  width: 100%;
  max-width: 65ch;

  h5 {
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
`;

const DarkBlurb = styled(StyledBlurb)`
  h5 {
    color: var(--color-text-headings-dark);
  }

  p {
    color: var(--color-text-body-dark);
  }
`;

const LightBlurb = styled(StyledBlurb)`
  h5 {
    color: var(--color-text-headings);
  }

  p {
    color: var(--color-text-body);
  }
`;
