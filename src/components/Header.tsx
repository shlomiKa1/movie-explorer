import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/FavoritesStore";

const Header = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <header>
      <nav className="navbar">
        <p>🍿🎬 Movie Explorer</p>
        <Link to="/movies" className="link">
          Movies
        </Link>
        <Link to="/movies/favorites" className="link">
          Favorites ({favorites.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
