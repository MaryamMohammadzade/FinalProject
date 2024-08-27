import React from 'react';
import { FiHeart } from "react-icons/fi";
import useFavoriteStore from '../../store/useFavoriteStore';

const Favorite = ({ id }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();

  const inFavorites = isFavorite(id);
  
  const toggleFavorite = () => {
    if (inFavorites) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-white`}
      onClick={toggleFavorite}
    >
      <FiHeart
        className={`text-2xl ${inFavorites ? 'text-red-500' : 'text-gray-400'}`}
      />
    </div>
  );
};

export default Favorite;
