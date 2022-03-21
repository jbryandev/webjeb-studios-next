import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  id?: string;
};

const FullWidthSection = ({ children, id }: Props) => (
  <StyledSection id={id}>{children}</StyledSection>
);

export default FullWidthSection;

const StyledSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--document-padding);
  padding-right: var(--document-padding);
`;
