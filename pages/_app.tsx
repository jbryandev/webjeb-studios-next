import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import BREAKPOINTS from '../constants.js';

const GlobalStyles = createGlobalStyle`
  html {
    --color-text-body: #415056;
    --color-text-headings: #202f38;
    --color-text-body-dark: #C5D2D6;
    --color-text-headings-dark: #FFF;
    --color-primary: #f26922;
    --color-secondary: #415056;
    --color-light-background: #FFF;
    --color-dark-background: #202f38;
    --color-ltgray-background: #FFF6F6;
    --color-mdgray-background: #C5D2D6;
    --document-max-width:1280px;
    --document-padding: 4rem;
    --section-padding: 8rem;
    --button-padding: 0.9rem 2.9rem;
    --column-width: 162px;
    --gutter-width: 16px;
    --breakpoint-mobile: ${BREAKPOINTS.mobile};
    --breakpoint-tablet: ${BREAKPOINTS.tablet};

    @media (max-width: ${BREAKPOINTS.tablet}) {
      --document-padding: 2rem;
      --section-padding: 6rem;
      --button-padding: 1rem 2rem;
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
