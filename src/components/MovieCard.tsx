import { Link } from "react-router-dom";
import type { MovieCardProps } from "../utils/types";
import React, { memo } from "react";
import { useFavoritesStore } from "../store/FavoritesStore";
import "./styles/MovieCard.css";

const MovieCard = ({ movie, isFavorites }: MovieCardProps) => {
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(movie.id));

  function toggleFavorite(e: React.FormEvent) {
    e.preventDefault();
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <article className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <div className="img-container">
          <img
            className="ticket-poster"
            src={movie.poster ?? "/placeholder.jpg"}
            alt={movie.title}
          />

          <div className="hover-overlay">
            <span>View...</span>
            {isFavorites && (
              <button className="remove-fav-btn" onClick={toggleFavorite}>
                ❤️ Remove
              </button>
            )}
          </div>
        </div>

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
