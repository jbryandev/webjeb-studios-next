import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const SectionTitle = ({ children }: Props) => (
  <StyledSectionTitle>{children}</StyledSectionTitle>
);

export default SectionTitle;

const StyledSectionTitle = styled.p`
  color: var(--color-primary);
  font-weight: 700;
  text-transform: uppercase;

  &::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 3px;
    background: var(--color-primary);
    position: relative;
    left: 0;
    bottom: 0.5rem;
    margin-right: 0.5rem;
  }
`;
