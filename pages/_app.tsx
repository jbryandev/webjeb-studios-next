import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import BREAKPOINTS from '../constants.js';

const GlobalStyles = createGlobalStyle`
  html {
    --color-text-body: #546972;
    --color-text-headings: #202f38;
    --color-text-body-dark: #C5D2D6;
    --color-text-headings-dark: #fff;
    --color-primary: #f26922;
    --color-secondary: #546972;
    --color-light-background: #fff;
    --color-dark-background: #202f38;
    --color-ltgray-background: RGBA(197,210,214,0.2);
    --color-mdgray-background: #C5D2D6;
    --document-max-width: 1408px;
    --document-padding: 4rem;
    --section-padding: 8rem;
    --column-width: 162px;
    --gutter-width: 16px;
    --breakpoint-mobile: ${BREAKPOINTS.mobile};
    --breakpoint-tablet: ${BREAKPOINTS.tablet};

    @media (max-width: ${BREAKPOINTS.tablet}) {
      --document-padding: 2rem;
      --section-padding: 4rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
