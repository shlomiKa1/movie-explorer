import { create } from "zustand";
import type { FavoritesStore } from "../utils/types";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (movie) =>
        set((state) => ({ favorites: [...state.favorites, movie] })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== id),
        })),
      isFavorite: (id) => get().favorites.some((movie) => movie.id === id),
    }),
    { name: "favorites" },
  ),
);
