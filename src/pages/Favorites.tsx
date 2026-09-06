import MovieList from "../components/MovieList";
import { useFavoritesStore } from "../store/FavoritesStore";

const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div className="empty-state">
        <span className="marquee-font">Your watchlist is empty.</span>
        Tab ❤️ to add your first movie.
      </div>
    );
  }

  return (
    <div>
      <h1 className="section-title">My Favorites</h1>
      <MovieList movies={favorites} isFavorites={true} />
    </div>
  );
};

export default Favorites;
