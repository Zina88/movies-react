import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import Video from 'pages/Video';
import NotFound from 'pages/NotFound';

import Loader from 'components/Loader';
import Header from 'components/Header';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const FavouritesPage = lazy(() => import('pages/FavouritesPage'));

function App() {
	return (
		<>
			<Header />

			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/favourites" element={<FavouritesPage />} />
					<Route path="/movies/:moviesId" element={<MovieDetails />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
						<Route path="trailer" element={<Video />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
