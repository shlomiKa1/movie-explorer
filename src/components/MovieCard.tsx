import { Link } from "react-router-dom";
import type { Movie } from "../utils/types";
import { memo } from "react";

const MovieCard = ({ ...movie }: Movie) => {
  return (
    <article className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="ticket-poster"
          src={movie.poster ?? "/placeholder.jpg"}
          alt={movie.title}
        />
        {/* <div className="perforation"></div> */}
        <div className="ticket-body">
          <p className="ticket-title">{movie.title}</p>
          <div className="ticket-meta">
            <span>{movie.releaseYear || "-"}</span>
            <span className="rating-pill">★ {movie.rating.toFixed(1)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default memo(MovieCard);
