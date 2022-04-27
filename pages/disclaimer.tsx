import Layout from '../components/layout';
import Section from '../components/section';
import Script from 'next/script';
import styled from 'styled-components';

export default function Disclaimer() {
  return (
    <Layout title='Webjeb Studios | Disclaimer'>
      <Section
        id='heading'
        customStyles={{
          backgroundColor: 'var(--color-dark-background)',
        }}
      >
        <h1 style={{ color: 'var(--color-text-headings-dark)' }}>Disclaimer</h1>
      </Section>
      <Section>
        <Termageddon
          id='policy'
          data-policy-key='UlUxNVNrcEJOamRtT0hjNGNYYzlQUT09'
          data-extra='h-align=left&h-depth=3&no-title=true&table-style=accordion'
        />
        <Script src='https://app.termageddon.com/js/termageddon.js' />
      </Section>
    </Layout>
  );
}

const Termageddon = styled.div`
  font-size: 2rem;
  width: 70ch;
  ul,
  ol {
    margin-bottom: 2.6rem;
  }
`;
