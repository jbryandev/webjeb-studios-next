import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SliderButton } from '@typeform/embed-react';

type Props = {
  children?: ReactNode;
  href: string;
  id: string;
};

const TypeformLink = ({ children, href, id }: Props) => {
  return (
    <Link href={href} passHref>
      <StyledLink id={id}>{children}</StyledLink>
    </Link>
  );
};

export default TypeformLink;

const StyledLink = styled(SliderButton)`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
`;
