import React, { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import FilmCard from '../components/FilmCard';
import Header from '../components/Header';
import '../styles/Favorites.css';

export default function Favorites() {
  const { favorites } = useContext(FilmsContext);
  return (
    <div>
      <Header />
      <h1>
        Favorites

      </h1>
      <section className="wrapper-container">
        {favorites.map((film) => (
          <FilmCard
            key={ film.id }
            film={ film }
            isFavorite={ favorites.some((favorite) => favorite.id === film.id) }
          />
        ))}
      </section>
    </div>
  );
}
