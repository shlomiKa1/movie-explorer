import { create } from "zustand";
import type { Movie, MoviesStore } from "../utils/types";

export const useMoviesStore = create<MoviesStore>((set, get) => ({
  movies: [],
  setMovies: (movies: Movie[]) => set({ movies }),
  getMovieById: (id: number) => get().movies.find((movie) => movie.id === id),
}));
