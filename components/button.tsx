import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  styles?: {};
};

const Button = ({ children, href, variant, styles }: Props) => {
  if (variant === 'secondary') {
    return (
      <Link href={href} passHref>
        <SecondaryButton style={styles}>{children}</SecondaryButton>
      </Link>
    );
  } else if (variant === 'tertiary') {
    return (
      <Link href={href} passHref>
        <TertiaryButton style={styles}>{children}</TertiaryButton>
      </Link>
    );
  } else {
    return (
      <Link href={href} passHref>
        <PrimaryButton style={styles}>{children}</PrimaryButton>
      </Link>
    );
  }
};

export default Button;

const StyledButton = styled.a`
  text-decoration: none;
  font-size: 1.8em;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.7rem 1.8rem;
  border: 2px solid;
  border-radius: 3px;
  display: inline-block;
`;

const PrimaryButton = styled(StyledButton)`
  color: #fff;
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  /* transition-property: background-color, border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out; */

  &:hover {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
    /* transition-property: background-color, border-color;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out; */
`;

const SecondaryButton = styled(StyledButton)`
  color: var(--color-secondary);
  border-color: var(--color-secondary);
  /* transition-property: color, border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out; */

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    /* transition-property: color, border-color;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out; */
`;

const TertiaryButton = styled(StyledButton)`
  color: var(--color-primary);
  border-color: var(--color-light-background);
  background-color: var(--color-light-background);
  /* transition-property: background-color, border-color, color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out; */

  &:hover {
    color: var(--color-text-headings-dark);
    background-color: var(--color-dark-background);
    border-color: var(--color-dark-background);
    /* transition-property: background-color, border-color, color;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out; */
`;
