import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const Blurb = ({ children }: Props) => <StyledBlurb>{children}</StyledBlurb>;

export default Blurb;

const StyledBlurb = styled.div`
  background-color: var(--color-light-background);
  display: block;
  width: 100%;
  padding: var(--document-padding);
`;
