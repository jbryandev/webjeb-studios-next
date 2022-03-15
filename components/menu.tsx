import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
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
        <li>
          <Link href='/contact'>
            <a>Get Started</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
