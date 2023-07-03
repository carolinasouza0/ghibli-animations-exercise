import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import heart from '../assets/heart.png';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <img src={ logo } alt="logo" />
        {pathname === '/favorites' ? (
          <Link to="/">Films</Link>
        ) : (
          <div className="favorites-container">
            <img
              src={ heart }
              alt="heart"
              className="favorites-logo"
            />
            <Link
              to="/favorites"
              className="favorites-link"
            >
              Favorites

            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
