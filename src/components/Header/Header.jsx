import { Link, Nav } from './Header.styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Nav>
  );
}
