import Link from 'next/link';

const MainMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/#discover'>
          <a>Discover</a>
        </Link>
      </li>
      <li>
        <Link href='/#services'>
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href='/#pricing'>
          <a>Pricing</a>
        </Link>
      </li>
      <li>
        <Link href='/#work'>
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link href='/#about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/#blog'>
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  );
};

const ServicesMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/#services'>
          <a>Strategy</a>
        </Link>
      </li>
      <li>
        <Link href='/#services'>
          <a>Analytics</a>
        </Link>
      </li>
      <li>
        <Link href='/#services'>
          <a>Design</a>
        </Link>
      </li>
      <li>
        <Link href='/#services'>
          <a>Development</a>
        </Link>
      </li>
      <li>
        <Link href='/#services'>
          <a>SEO</a>
        </Link>
      </li>
      <li>
        <Link href='/#services'>
          <a>Management</a>
        </Link>
      </li>
    </ul>
  );
};

const PackagesMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/#pricing'>
          <a>Starter</a>
        </Link>
      </li>
      <li>
        <Link href='/#pricing'>
          <a>Conversion</a>
        </Link>
      </li>
      <li>
        <Link href='/#pricing'>
          <a>Ultimate</a>
        </Link>
      </li>
      <li>
        <Link href='/#pricing'>
          <a>Management</a>
        </Link>
      </li>
      <li>
        <Link href='/#pricing'>
          <a>Agencies</a>
        </Link>
      </li>
    </ul>
  );
};

const ProcessMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/#process'>
          <a>Discover</a>
        </Link>
      </li>
      <li>
        <Link href='/#process'>
          <a>Design</a>
        </Link>
      </li>
      <li>
        <Link href='/#process'>
          <a>Develop</a>
        </Link>
      </li>
      <li>
        <Link href='/#process'>
          <a>Refine</a>
        </Link>
      </li>
      <li>
        <Link href='/#process'>
          <a>Launch</a>
        </Link>
      </li>
    </ul>
  );
};

const LegalMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/privacy'>
          <a>Privacy Policy</a>
        </Link>
      </li>
      <li>
        <Link href='/terms'>
          <a>Terms and Conditions</a>
        </Link>
      </li>
      <li>
        <Link href='/disclaimer'>
          <a>Disclaimer</a>
        </Link>
      </li>
      <li>
        <Link href='#'>
          <a>Sitemap</a>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
export { ServicesMenu, PackagesMenu, ProcessMenu, LegalMenu };
