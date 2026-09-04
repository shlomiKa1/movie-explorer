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
    <article className="detail-movie">
      <img src={movie.poster ?? "/placeholder.jpg"} alt={movie.title} />

      <div>
        <h1>{movie.title}</h1>
        <span dangerouslySetInnerHTML={{ __html: movie.description }} />

        <div className="d">
          <p>Release: {movie.releaseYear}</p>
          <p>Rating: {movie.rating}</p>
          <button onClick={toggleFavorite}>{isFavorite ? "❤️" : "🤍"}</button>
        </div>
      </div>
    </article>
  );
};

export default MovieDetailsPage;
