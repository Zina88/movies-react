import { Link, Nav, Logo } from './Header.styled';

export default function Header() {
  return (
    <Nav>
      <Logo />
      <Link to="/" end>
        Home
      </Link>
      <Link to="/movies">Movies</Link>
    </Nav>
  );
}
