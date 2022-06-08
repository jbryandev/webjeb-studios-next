import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SliderButton } from '@typeform/embed-react';

type Props = {
  children?: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'typeform';
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
  } else if (variant === 'typeform') {
    return (
      <Link href={href} passHref>
        <TypeformButton id='As7KOBMB'>{children}</TypeformButton>
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
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  padding: var(--button-padding);
  border: 2px solid;
  display: inline-block;
`;

const PrimaryButton = styled(StyledButton)`
  color: #fff;
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  transition-property: background-color, border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
    transition-property: background-color, border-color;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
`;

const SecondaryButton = styled(StyledButton)`
  color: var(--color-light-background);
  border-color: var(--color-light-background);
  transition-property: color, border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    transition-property: color, border-color;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
`;

const TertiaryButton = styled(StyledButton)`
  color: var(--color-primary);
  border-color: var(--color-light-background);
  background-color: var(--color-light-background);
  transition-property: background-color, border-color, color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  &:hover {
    color: var(--color-text-headings-dark);
    background-color: var(--color-dark-background);
    border-color: var(--color-dark-background);
    transition-property: background-color, border-color, color;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
`;

const TypeformButton = styled(SliderButton)`
  text-decoration: none;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  padding: var(--button-padding);
  border: 2px solid;
  display: inline-block;
  cursor: pointer;

  color: #fff;
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  transition-property: background-color, border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
    transition-property: background-color, border-color;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
  }
`;
