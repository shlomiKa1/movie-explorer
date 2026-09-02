import MovieList from "../components/MovieList";
import { useFetch } from "../hooks/useFetch";

const URL = "https://api.tvmaze.com/shows?page=1";

const Movies = () => {
  const { data, loading, error } = useFetch(URL);

  if (loading) return <p>טוען...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
