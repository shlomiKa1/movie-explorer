import type { MovieProps } from "../utils/types";
import { useFavoritesStore } from "../store/FavoritesStore";
import "./MovieDetailsPage.css";

const MovieDetailsPage = ({ movie }: MovieProps) => {
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(movie.id));

  function toggleFavorite() {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <article className="details-mock">
      <img src={movie.poster ?? "/placeholder.jpg"} alt={movie.title} />

      <div>
        <h1 className="details-title">{movie.title}</h1>
        {/* <div className="detailes-tags">
          {movie.geners.map((g) => (
            <span className="tag" key={g}>
              {g}
            </span>
          ))}
          <span className="tag">{movie.releaseYear}</span>
        </div> */}
        <div className="details-tags">
          {(movie.genres ?? []).map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
          <span className="tag">{movie.releaseYear}</span>
        </div>

        <span
          className="details-desc"
          dangerouslySetInnerHTML={{ __html: movie.description }}
        />

        <div className="details-actions">
          <button className="btn-primary" onClick={toggleFavorite}>
            {isFavorite ? "❤️" : "🤍"}
          </button>

          <span className="rating-pill"> {movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  );
};

export default MovieDetailsPage;
