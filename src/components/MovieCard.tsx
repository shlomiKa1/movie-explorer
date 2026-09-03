import { Link } from "react-router-dom";
import type { Movie } from "../utils/types";

const MovieCard = ({ ...movie }: Movie) => {
  return (
    <article className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.poster ?? "/placeholder.jpg"} alt={movie.title} />
        <p>{movie.title}</p>
      </Link>
    </article>
  );
};

export default MovieCard;
