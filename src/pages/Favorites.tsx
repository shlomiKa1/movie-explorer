import MovieList from "../components/MovieList";
import { useFavoritesStore } from "../store/FavoritesStore";

const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div>
        <span className="marquee-font">Is empty</span>
        You don't have movies in your list
      </div>
    );
  }

  return (
    <div>
      <h1 className="section-title">My Favorites</h1>
      <MovieList movies={favorites} />
    </div>
  );
};

export default Favorites;
