import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <p>🍿🎬 Movie Explorer</p>
        <Link to="/movies">Movies</Link>
        <Link to="/movies/favorites">Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
