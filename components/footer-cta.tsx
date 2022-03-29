import styled from 'styled-components';
import Section from './section';
import Button from './button';

const FooterCTA = () => {
  return (
    <Section
      id='footer-cta'
      customStyles={{
        backgroundImage:
          'linear-gradient(90deg, rgba(242,105,34,0.8) 0%, var(--color-primary) 100%), url(/images/footer-cta-bg.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <FooterContainer>
        <h2>Ready for an amazing website that grows your business?</h2>
        <p>
          It's easy to start a project with me. Just fill out my brief project
          interest form and I'll be in touch.
        </p>
        <Button href='/contact' variant='tertiary'>
          Get Started
        </Button>
      </FooterContainer>
    </Section>
  );
};

export default FooterCTA;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text-headings-dark);
  text-align: center;
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);

  h2 {
    color: var(--color-text-headings-dark);
  }
`;
