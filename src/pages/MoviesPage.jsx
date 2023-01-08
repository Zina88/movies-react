import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getSearchMovie from 'services/getSearchMovie';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';

export default function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const { search } = useLocation();

	const query = new URLSearchParams(search).get('query') ?? '';

	useEffect(() => {
		if (!query) {
			return;
		}

		if (query !== '') {
			getSearchMovie(query).then(response => {
				setMovies(response.results);
				return;
			});
		}
	}, [query]);

	return (
		<div>
			<SearchBox value={query} />
			{movies && <MoviesList movies={movies} />}
		</div>
	);
}
