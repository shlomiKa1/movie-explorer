import { NavLink, useNavigate } from "react-router-dom";
import { useFavoritesStore } from "../store/FavoritesStore";

const Header = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }

  return (
    <header>
      <nav className="navbar">
        <p className="logo">
          🎬 Movie <span>Explorer</span> 🍿
        </p>
        <NavLink
          to="/movies"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Movies
        </NavLink>

        <NavLink
          to="/movies/favorites"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Favorites ({favorites.length})
        </NavLink>

        <div>
          <button className="btn-ghost" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
