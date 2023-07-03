import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import FilmsContext from './FilmsContext';

export default function FilmsProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
      const data = await response.json();
      // console.log(data);
      setFilms(data);
    };
    getFilms();
  }, []);

  function handleFavorite(film) {
    const isFavorite = favorites.some((favorite) => favorite.id === film.id);
    if (isFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== film.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, film]);
    }
  }

  const contextValue = {
    films,
    favorites,
    handleFavorite,
  };

  return (
    <FilmsContext.Provider value={ contextValue }>
      {children}
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
