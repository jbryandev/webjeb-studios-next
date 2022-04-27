import Layout from '../components/layout';
import Section from '../components/section';
import Script from 'next/script';
import styled from 'styled-components';

export default function Privacy() {
  return (
    <Layout title='Webjeb Studios | Privacy Policy'>
      <Section
        id='heading'
        customStyles={{
          backgroundColor: 'var(--color-dark-background)',
        }}
      >
        <h1 style={{ color: 'var(--color-text-headings-dark)' }}>
          Privacy Policy
        </h1>
      </Section>
      <Section>
        <Termageddon
          id='policy'
          data-policy-key='UjNkQlFrNTZjbGswZWxWaVRHYzlQUT09'
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
