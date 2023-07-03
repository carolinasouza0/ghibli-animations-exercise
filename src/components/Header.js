import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import heart from '../assets/heart.png';
import emptyHeart from '../assets/favorite-icon.png';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <img src={ logo } alt="logo" />
        {pathname === '/favorites' ? (
          <div className="favorites-container">
            <Link
              to="/"
              className="favorites-link"
            >
              <img
                src={ emptyHeart }
                alt="empty heart"
                className="favorites-logo"
              />
              Films

            </Link>
          </div>
        ) : (
          <div className="favorites-container">
            <Link
              to="/favorites"
              className="favorites-link"
            >
              <img
                src={ heart }
                alt="heart"
                className="favorites-logo"
              />
              Favorites

            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
