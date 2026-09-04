import { useEffect, useRef } from "react";
import type { SearchBarProp } from "../utils/types";

const SearchBar = ({ search, onSearch }: SearchBarProp) => {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <div>
      <label htmlFor="search">🔎 Search movies...</label>
      <input
        id="search"
        className="search-box"
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        ref={searchRef}
      />
    </div>
  );
};

export default SearchBar;
