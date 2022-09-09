import type { NextPage } from 'next';
import Layout from '../components/layout';
import styled from 'styled-components';
import Image from 'next/image';

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Layout title="Webjeb Studios | Shhh We're Hibernating!" layoutGrid='off'>
      <Container>
        <Header>Webjeb Studios</Header>
        <Content>
          <div className='headline-container'>
            <div className='image-container'>
              <Image
                src='/zzz-bubble.png'
                layout='responsive'
                width={481}
                height={481}
                alt='Text bubble containing "zzz..." to denote sleeping'
              />
            </div>
            <div className='pre-headline'>Shhhh...</div>
            <div className='headline'>Webjeb Studios is in hibernation</div>
          </div>
          {/* <div className='background-text'>Hibernation</div> */}
        </Content>
        <Footer>
          <div>
            Copyright © {currentYear} Webjeb Studios. All rights reserved.
          </div>
          <div>Webjeb Studios</div>
        </Footer>
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: url('/background.svg');
  background-repeat: no-repeat;
  background-position: 50% 30%;

  @media (max-width: 767px) {
    background-position: 50% -17%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px 160px 30px;

  @media (max-width: 767px) {
    padding-bottom: 0;
  }

  div.headline-container {
    align-self: center;
  }

  div.image-container {
    max-width: 481px;
    max-height: 481px;
    margin-bottom: -60px;
  }

  div.pre-headline {
    font-size: 25px;
    line-height: 25px;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--color-darkred);

    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 20px;
    }
  }

  div.headline {
    max-width: 558px;
    font-size: 78px;
    line-height: 78px;
    font-weight: 800;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 60px;
      line-height: 60px;
    }

    @media (max-width: 478px) {
      font-size: 40px;
      line-height: 40px;
    }
  }

  div.background-text {
    margin-top: 55px;
    margin-bottom: 160px;
    align-self: center;
    font-size: 369px;
    font-weight: 800;
    text-transform: uppercase;
    color: rgba(251, 219, 191, 0.05);

    @media (max-width: 767px) {
      font-size: 250px;
      line-height: 178px;
      margin-top: -52px;
      margin-bottom: 0;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 30px;

  @media (max-width: 767px) {
    display: block;

    div:first-child {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 478px) {
    font-size: 15px;
  }

  div:last-child {
    font-weight: 800;
    font-size: 20px;
    text-transform: uppercase;
  }
`;
