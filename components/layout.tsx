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
    <StyledMain>
      <MainContainer>{children}</MainContainer>
    </StyledMain>
    <Footer />
  </StyledLayout>
);

export default Layout;

const StyledLayout = styled.div`
  margin: auto;
`;

const StyledMain = styled.main`
  padding: 0 var(--document-padding) 0 var(--document-padding);
`;

const MainContainer = styled.div`
  max-width: var(--document-max-width);
  margin: auto;
  padding: 5rem 0 5rem 0;
`;