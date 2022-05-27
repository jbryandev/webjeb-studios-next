import Layout from '../components/layout';
import Section from '../components/section';
import Script from 'next/script';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Layout title='Webjeb Studios | Get Started'>
      <Section id='typeform'>
        <Typeform>
          <div
            data-tf-widget='As7KOBMB'
            data-tf-iframe-props='title=Contact Form'
            data-tf-medium='snippet'
          ></div>
          <Script src='//embed.typeform.com/next/embed.js' />
        </Typeform>
      </Section>
    </Layout>
  );
};

export default Contact;

const Typeform = styled.div`
  div {
    width: 100%;
    height: 700px;
  }
`;
