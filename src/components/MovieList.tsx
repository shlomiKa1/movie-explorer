import type { MoviesProp } from "../utils/types";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }: MoviesProp) => {
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard {...movie} />
        </li>
      ))}
    </div>
  );
};

export default MovieList;
