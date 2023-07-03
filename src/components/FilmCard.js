import PropTypes from 'prop-types';
import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import emptyHeartIcon from '../assets/favorite-icon.png';
import fullHeartIcon from '../assets/heart.png';
import '../styles/FilmCard.css';

function FilmCard({ film, isFavorite }) {
  const { handleFavorite } = useContext(FilmsContext);
  return (
    <div key={ film.id } className="films-container">
      <div
        className="film-favorite-title-container"
      >
        <button
          type="button"
          className="button-favorite"
          onClick={ () => handleFavorite(film) }
        >
          <img
            src={ isFavorite ? fullHeartIcon : emptyHeartIcon }
            alt="favorite button"
            className="favorite-icon"
          />
        </button>
        <h2>{ film.title }</h2>
      </div>
      <img
        src={ film.image }
        alt={ film.title }
        className="films-image"
      />
      <p className="film-description">{ film.description }</p>
    </div>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default FilmCard;
