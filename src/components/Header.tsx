import { NavLink, useNavigate } from "react-router-dom";
import { useFavoritesStore } from "../store/FavoritesStore";
import { useState } from "react";
import type { ThemeContextProps } from "../utils/types";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const navigate = useNavigate();
  const [theme, setTheme] = useState<ThemeContextProps["theme"]>("light");

  function toggleTheme() {
    localStorage.setItem("theme", theme);
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

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
          <ThemeContext value={{ theme, toggleTheme }}>
            <ThemeToggle />
          </ThemeContext>
        </div>
      </nav>
    </header>
  );
};

export default Header;
