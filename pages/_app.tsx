import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --color-text-body: #546972;
    --color-text-headings: #202f38;
    --color-text-body-dark: #fff;
    --color-text-headings-dark: #fff;
    --color-primary: #f26922;
    --color-secondary: #546972;
    --color-light-background: #fff;
    --color-dark-background: #202f38;
    --document-max-width: 1400px;
    --document-padding: 4rem;
    --section-padding: 7rem;
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
