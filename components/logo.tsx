import Image from 'next/image';
import styled from 'styled-components';
import wjs_logo from '../public/images/wjs_logo_orange-black_transpbg.png';

const Logo = () => {
  return <Image src={wjs_logo} alt='Webjeb Studios' layout='fixed' />;
};

export default Logo;
