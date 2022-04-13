import Link from 'next/link';

const MainMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='#services'>
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href='#features'>
          <a>Features</a>
        </Link>
      </li>
      <li>
        <Link href='#work'>
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link href='#testimonials'>
          <a>Testimonials</a>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
};

const LegalMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/privacy-policy'>
          <a>Privacy Policy</a>
        </Link>
      </li>
      <li>
        <Link href='/terms-and-conditions'>
          <a>Terms & Conditions</a>
        </Link>
      </li>
      <li>
        <Link href='/disclaimer'>
          <a>Disclaimer</a>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
export { LegalMenu };
