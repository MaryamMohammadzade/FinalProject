import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      favoriteCount: 0,
      addFavorite: (id) => set((state) => {
        const updatedFavorites = [...state.favorites, id];
        return {
          favorites: updatedFavorites,
          favoriteCount: updatedFavorites.length
        };
      }),
      removeFavorite: (id) => set((state) => {
        const updatedFavorites = state.favorites.filter((favId) => favId !== id);
        return {
          favorites: updatedFavorites,
          favoriteCount: updatedFavorites.length
        };
      }),
      isFavorite: (id) => get().favorites.includes(id) 
    }),
    {
      name: 'favorite-store',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['addFavorite', 'removeFavorite'].includes(key)),
        ),
    }
  )
);

export default useFavoriteStore;
