import React, { useEffect } from 'react';
import Layout from './layout';
import Section from './section';
import styled from 'styled-components';

type Props = {
  title?: string;
  policyKey?: string;
};

const termageddonAPIPath = 'https://app.termageddon.com/api/policy/';

const Legal = ({ title, policyKey }: Props) => {
  useEffect(() => {
    const policy = document.getElementById('policy');
    if (policy === null || policyKey === undefined) {
      console.log('Error! Could not find policy element or policy key.');
    } else {
      const pol_key = policyKey;
      const pol_extra = policy.dataset.extra ? '?' + policy.dataset.extra : '';
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        console.log('Policy loaded!');
        policy.innerHTML = xhr.responseText;
      };

      xhr.onerror = function () {
        console.log('Error! Could not load policy.');
        policy.innerHTML = 'There has been an error loading this policy!';
      };

      xhr.open('GET', termageddonAPIPath + pol_key + pol_extra);
      xhr.send();
    }
  });

  return (
    <Layout title={`Webjeb Studios | ${title}`}>
      <Section id='heading' customStyles={GrayBackground}>
        <h1>{title}</h1>
      </Section>
      <Section>
        <Termageddon
          id='policy'
          data-extra='h-align=left&h-depth=3&no-title=true&table-style=accordion'
        />
      </Section>
    </Layout>
  );
};

export default Legal;

const GrayBackground = {
  backgroundColor: 'var(--color-ltgray-background)',
};

const Termageddon = styled.div`
  font-size: 2rem;
  max-width: 70ch;
  ul,
  ol {
    margin-bottom: 2.6rem;
  }
`;
