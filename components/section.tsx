import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  id?: string;
  customStyles?: {};
};

const Section = ({ children, id, customStyles }: Props) => (
  <StyledSection id={id} style={customStyles}>
    <SectionContainer>{children}</SectionContainer>
  </StyledSection>
);

export default Section;

const StyledSection = styled.section`
  background-color: var(--color-light-background);
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
`;

const SectionContainer = styled.div`
  max-width: var(--document-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--document-padding);
  padding-right: var(--document-padding);
`;
