import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
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
      <meta name='description' content='We make Jamstack websites' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Grid status={layoutGrid}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Grid>
  </StyledLayout>
);

export default Layout;

const StyledLayout = styled.div`
  margin: auto;
`;
