import { useEffect, useMemo, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { useFetch } from "../hooks/useFetch";
import { mapTvmazeShowToInternal, type TvmazeShowRaw } from "../utils/types";
import { useMoviesStore } from "../store/MoviesStore";
import { BASE_URL } from "../utils/types";

const Movies = () => {
  const { data, loading, error } = useFetch<TvmazeShowRaw[]>(
    BASE_URL.concat("?page=1"),
  );

  const [search, setSearch] = useState("");
  const setMovies = useMoviesStore((state) => state.setMovies);

  const movies = useMemo(() => {
    return data ? data.map(mapTvmazeShowToInternal) : [];
  }, [data]);

  useEffect(() => {
    if (movies.length > 0) setMovies(movies);
  }, [movies]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [movies, search]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="header">
      <main>
        <h1 className="section-title">Discover Movies</h1>
        <SearchBar search={search} onSearch={setSearch} />
        <MovieList movies={filteredMovies} />
      </main>
    </div>
  );
};

export default Movies;
