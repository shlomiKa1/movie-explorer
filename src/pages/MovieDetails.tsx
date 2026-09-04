import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useMoviesStore } from "../store/MoviesStore";
import {
  BASE_URL,
  mapTvmazeShowToInternal,
  type TvmazeShowRaw,
} from "../utils/types";
import MovieDetailsPage from "../components/MovieDetailsPage";

const MovieDetails = () => {
  const navigate = useNavigate();
  const toggleBack = () => {
    navigate("/movies");
  };

  const { id } = useParams();

  const movieFromStore = useMoviesStore((state) =>
    state.getMovieById(Number(id)),
  );

  const URL = BASE_URL.concat(`/${id}`);
  const { data, loading, error } = useFetch<TvmazeShowRaw>(
    URL,
    !movieFromStore,
  );

  const movie = movieFromStore ?? (data ? mapTvmazeShowToInternal(data) : null);
  if (!movieFromStore && loading) return <p>Loading data...</p>;
  if (!movieFromStore && error) return <p>404 {error}</p>;
  if (!movie) return <p>Movie not found 404</p>;

  return (
    <section>
      <button onClick={toggleBack}>🔙</button>
      <MovieDetailsPage movie={movie} />
    </section>
  );
};

export default MovieDetails;
