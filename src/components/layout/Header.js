import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from '../ui/Logo';
import Select from '../ui/Select';
import { insurances } from '../../utils/insurances';
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
        <Select
          options={insurances}
          placeholder="Tip de asigurare"
          isLink={true}
          size="md"
          width="200px"
        />

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        {/* <Link href="/blog/add">
          <a>Adauga o postare pe blog</a>
        </Link> */}

        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
