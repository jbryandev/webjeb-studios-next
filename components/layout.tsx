import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Grid from './layout-grid';

type Props = {
  children?: ReactNode;
  title?: string;
  layoutGrid?: 'off' | 'on';
};

const Layout = ({
  children,
  title = 'This is the default title',
  layoutGrid,
}: Props) => (
  <StyledLayout>
    <Head>
      <title>{title}</title>
      <meta name='description' content='Webjeb Studios is hibernating' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Grid status={layoutGrid}>
      <main>{children}</main>
    </Grid>
  </StyledLayout>
);

export default Layout;

const StyledLayout = styled.div`
  margin: auto;
`;
