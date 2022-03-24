import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  id?: string;
  bgColor?: string;
  topPadding?: string;
  bottomPadding?: string;
  customStyles?: {};
};

const Section = ({
  children,
  id,
  bgColor,
  topPadding,
  bottomPadding,
  customStyles,
}: Props) => (
  <StyledSection
    id={id}
    style={customStyles}
    bgColor={bgColor}
    topPadding={topPadding}
    bottomPadding={bottomPadding}
  >
    <SectionContainer>{children}</SectionContainer>
  </StyledSection>
);

export default Section;

const StyledSection = styled.section.attrs((props) => ({
  bgColor: props.bgColor || 'var(--color-light-background)',
  topPadding: props.topPadding || 'var(--section-padding)',
  bottomPadding: props.bottomPadding || 'var(--section-padding)',
}))`
  background-color: ${(props) => props.bgColor};
  padding-top: ${(props) => props.topPadding};
  padding-bottom: ${(props) => props.bottomPadding};
`;

const SectionContainer = styled.div`
  max-width: var(--document-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--document-padding);
  padding-right: var(--document-padding);
`;
