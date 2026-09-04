import MovieList from "../components/MovieList";
import { useFavoritesStore } from "../store/FavoritesStore";

const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  if (favorites.length === 0) {
    return <p>You don't have movies in your list</p>;
  }

  return (
    <div>
      <h1>My Favorites Movies</h1>
      <MovieList movies={favorites} />
    </div>
  );
};

export default Favorites;
