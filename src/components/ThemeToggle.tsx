import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button className="btn-theme" onClick={toggleTheme}>
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeToggle;
