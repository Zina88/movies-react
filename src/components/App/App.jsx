import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

import Loader from 'components/Loader';
import SharedLayout from 'components/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:moviesId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
