import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from '../ui/Logo';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        height: '100px',
        width: '100%',
        padding: '0 100px',
        zIndex: 1000,
      }}
    >
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/despre">
          <a>Despre noi</a>
        </Link>
        <Link href="/asigurare-rca">
          <a>Asigurari</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
