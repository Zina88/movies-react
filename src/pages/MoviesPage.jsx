import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getSearchMovie from 'services/getSearchMovie';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
// import { WrapperEnd } from 'pages/Pages.styles';

export default function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const { search } = useLocation();
	const query = new URLSearchParams(search).get('query') ?? '';

	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);
	// const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		if (fetching) {
			getSearchMovie(query, currentPage)
				.then(response => {
					setMovies([...movies, ...response.results]);
					setCurrentPage(currentPage + 1);
				})
				.finally(() => {
					setFetching(false);
				});
		}
	}, [query, fetching, currentPage, movies]);

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);

		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
	});

	const scrollHandler = e => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			100
			// 	100 &&
			// movies.length < totalCount
		) {
			setFetching(true);
		}
	};

	return (
		<div>
			<SearchBox value={query} />
			{movies && <MoviesList movies={movies} />}
		</div>
	);
}
