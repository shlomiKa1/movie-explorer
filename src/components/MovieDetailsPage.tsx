import { useNavigate } from "react-router-dom";
import type { MovieProps } from "../utils/types";
import { useFavoritesStore } from "../store/FavoritesStore";
import "./styles/MovieDetailsPage.css";

const MovieDetailsPage = ({ movie }: MovieProps) => {
  const navigate = useNavigate();
  const toggleBack = () => {
    navigate(-1);
  };

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
      <div className="img-details">
        <img src={movie.poster ?? "/placeholder.jpg"} alt={movie.title} />
        <span className="rating-pill">★ {movie.rating.toFixed(1)}</span>
      </div>

      <div>
        <h1 className="details-title">{movie.title}</h1>
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

          <button className="btn-ghost" onClick={toggleBack}>
            ↩ Go Back
          </button>
        </div>
      </div>
    </article>
  );
};

export default MovieDetailsPage;
