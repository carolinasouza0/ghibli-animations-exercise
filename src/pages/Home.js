import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';
import '../styles/Home.css';

export default function Home() {
  const { films } = useContext(FilmsContext);
  return (
    <div>
      <Header />
      <h1 className="title">Films</h1>
      <section className="wrapper-container">
        {films.map((film) => (
          <div key={ film.id } className="films-container">
            <h2>{ film.title }</h2>
            <img
              src={ film.image }
              alt={ film.title }
              className="films-image"
            />
            <p className="film-description">{ film.description }</p>
          </div>
        ))}
      </section>
    </div>
  );
}
