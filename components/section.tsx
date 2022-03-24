import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  id?: string;
  styles?: {};
};

const Section = ({ children, id, styles }: Props) => (
  <section id={id} style={styles}>
    <SectionContainer>{children}</SectionContainer>
  </section>
);

export default Section;

const SectionContainer = styled.div`
  max-width: var(--document-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--document-padding);
  padding-right: var(--document-padding);
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
`;
