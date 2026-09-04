export interface MoviesProp {
  movies: Movie[];
}

export interface SearchBarProp {
  search: string;
  onSearch: (value: string) => void;
}

export interface TvmazeShowRaw {
  id: number;
  name: string;
  summary: string | null;
  genres: string[];
  status: string;
  premiered: string | null;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  poster: string | null;
  rating: number;
  releaseYear: number;
  genres: string[];
  status: string;
}

export interface MovieProps {
  movie: Movie;
}

export function mapTvmazeShowToInternal(raw: TvmazeShowRaw): Movie {
  return {
    id: raw.id,
    title: raw.name,
    description: raw.summary ? raw.summary : "<h1>Empty summary</h1>",
    poster: raw.image ? raw.image.medium : null,
    rating: raw.rating.average ?? 0,
    releaseYear: raw.premiered ? new Date(raw.premiered).getFullYear() : 0,
    genres: raw.genres,
    status: raw.status,
  };
}

export const BASE_URL = "https://api.tvmaze.com/shows";

export interface FavoritesStore {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export interface MoviesStore {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  getMovieById: (id: number) => Movie | undefined;
}
