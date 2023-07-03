import { Route, Switch } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsContext from './context/FilmsContext';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
      const data = await response.json();
      // console.log(data);
      setFilms(data);
    };
    getFilms();
  }, []);

  return (
    <FilmsContext.Provider value={ { films } }>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </FilmsContext.Provider>
  );
}

export default App;
