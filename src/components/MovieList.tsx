import type { MoviesProps } from "../utils/types";
import MovieCard from "./MovieCard";
import "./styles/style.css";

const MovieList = ({ movies, isFavorites = false }: MoviesProps) => {
  return (
    <div>
      <section className="movies-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} isFavorites={isFavorites} />
          </li>
        ))}
      </section>
    </div>
  );
};

export default MovieList;
