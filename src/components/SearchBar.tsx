import type { SearchBarProp } from "../utils/types";

const SearchBar = ({ search, onSearch }: SearchBarProp) => {
  return (
    <div>
      <label htmlFor="search">🔎 Search movies...</label>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
