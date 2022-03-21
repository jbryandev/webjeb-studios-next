import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type Props = {
  children?: ReactNode;
  image_src?: string;
  image_alt?: string;
  title?: string;
};

const Blurb = ({ children, image_src, image_alt, title }: Props) => (
  <StyledBlurb>{children}</StyledBlurb>
);

export default Blurb;

const StyledBlurb = styled.div`
  display: block;
  width: 100%;
  padding: var(--document-padding);

  h5 {
    color: var(--color-text-headings-dark);
    font-size: 2.3em;
  }

  p {
    color: var(--color-text-body-dark);
    font-size: 2em;
  }

  img {
    max-width: 40%;
`;
