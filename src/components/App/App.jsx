// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetails from 'pages/MovieDetails';

import Header from 'components/Header';

// const HomePage = lazy(() => import('../../pages/HomePage'));
// const MoviePage = lazy(() => import('../../pages/MoviePage'));

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:moviesId" element={<MovieDetails />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:moviesId" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
