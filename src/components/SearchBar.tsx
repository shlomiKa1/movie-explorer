import { useEffect, useRef } from "react";
import type { SearchBarProps } from "../utils/types";
import "./styles/SearchBar.css";

const SearchBar = ({ search, onSearch }: SearchBarProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <div className="search-movie">
      <input
        className="search-box"
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        ref={searchRef}
        placeholder="🔎 Search movies..."
      />
    </div>
  );
};

export default SearchBar;
