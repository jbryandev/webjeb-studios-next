import Link from 'next/link';

const Menu = () => {
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
      <li className='menu-cta'>
        <Link href='/contact'>
          <a>Get Started</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
