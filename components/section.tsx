import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  id?: string;
};

const Section = ({ children, id }: Props) => (
  <StyledSection id={id}>{children}</StyledSection>
);

export default Section;

const StyledSection = styled.section`
  max-width: var(--document-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--document-padding);
  padding-right: var(--document-padding);
`;
