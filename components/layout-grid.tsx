import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  status?: 'off' | 'on';
};

const LayoutGrid = ({ children, status }: Props) => (
  <Grid status={status}>{children}</Grid>
);

export default LayoutGrid;

const Grid = styled.div<{ status?: 'off' | 'on' }>`
  /* Helper variables */
  --grid-opacity: 0.1;
  --grid-color: #ff0000;
  --max-width: var(--document-max-width);
  --offset: var(--document-padding);
  --columns: 8;
  --gutter: var(--gutter-width);
  --repeating-width: calc(100% / var(--columns));
  --column-width: calc((100% / var(--columns)) - var(--gutter));
  --background-width: calc(100% + var(--gutter));
  --background-columns: repeating-linear-gradient(
    to right,
    var(--grid-color),
    var(--grid-color) var(--column-width),
    transparent var(--column-width),
    transparent var(--repeating-width)
  );

  position: relative;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: var(--max-width);
    min-height: 100vh;
    content: '';
    background-image: var(--background-columns);
    background-size: var(--background-width) 100%;
    opacity: var(--grid-opacity);
    z-index: 1000;
    pointer-events: none;
    display: ${(props) => (props.status === 'on' ? '' : 'none')};
  }
`;
