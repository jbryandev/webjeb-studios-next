import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <StyledLayout>
    <Head>
      <title>{title}</title>
      <meta name='description' content='Jamstack websites!' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </StyledLayout>
);

export default Layout;

const StyledLayout = styled.div`
  margin: auto;
`;
