import type { MovieProps } from "../utils/types";
import "./MovieDetailsPage.css";

const MovieDetailsPage = ({ movie }: MovieProps) => {
  return (
    <article className="detail-movie">
      <img src={movie.poster ?? "/placeholder.jpg"} alt={movie.title} />

      <div>
        <h1>{movie.title}</h1>
        <span dangerouslySetInnerHTML={{ __html: movie.description }} />

        <div className="d">
          <p>Release: {movie.releaseYear}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      </div>
    </article>
  );
};

export default MovieDetailsPage;
