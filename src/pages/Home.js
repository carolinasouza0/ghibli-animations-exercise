import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';
// import emptyHeartIcon from '../assets/favorite-icon.png';
// import fullHeartIcon from '../assets/heart.png';
import '../styles/Home.css';
import FilmCard from '../components/FilmCard';

export default function Home() {
  const { films, favorites } = useContext(FilmsContext);

  return (
    <div>
      <Header />
      <h1 className="title">Films</h1>
      <section className="wrapper-container">
        {films.map((film) => (
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
