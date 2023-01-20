import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieDetails from 'services/getMovieDetails';
import MovieDetailsList from 'components/MovieDetailsList';

import useLocalStorage from 'hooks/useLocalStorage';

export default function MovieDetails() {
	const { moviesId } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		getMovieDetails(moviesId).then(setMovie);
	}, [moviesId]);

	const [favourites, setFavourites] = useLocalStorage('movies', '');

	const addFavoriteMovie = movie => {
		if (!movie) {
			return;
		}
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

	const removeFavouriteMovie = ({ id }) => {
		const newFavouriteList = favourites.filter(favourite => favourite.id !== id);
		setFavourites(newFavouriteList);
	};

	return (
		<>
			{movie && (
				<MovieDetailsList
					movie={movie}
					handleFavouriteClick={
						favourites.includes(movie) ? removeFavouriteMovie : addFavoriteMovie
					}
					children={favourites.includes(movie) ? 'Remove from favourites' : 'Add to favourites'}
				/>
			)}
		</>
	);
}
