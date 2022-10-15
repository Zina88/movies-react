// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

import Header from 'components/Header';
import Layout from 'components/Layout';

// const HomePage = lazy(() => import('../../pages/HomePage'));
// const MoviePage = lazy(() => import('../../pages/MoviePage'));

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
