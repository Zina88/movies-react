import { useState, useEffect } from 'react';
import getTrandingMovie from 'services/getTradingMovie';
import MoviesList from 'components/MoviesList';
import { Wrapper, Title } from 'pages/Pages.styles';

export default function HomePage() {
	const [movies, setMovies] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		if (fetching) {
			getTrandingMovie(currentPage)
				.then(response => {
					setMovies([...movies, ...response.results]);
					setCurrentPage(prevState => prevState + 1);
					setTotalCount(response['total_results']);
				})
				.finally(() => setFetching(false));
		}
	}, [fetching, currentPage, movies]);

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
				100 &&
			movies.length < totalCount
		) {
			setFetching(true);
		}
	};

	return (
		<Wrapper>
			<Title>Trending Today</Title>
			<MoviesList movies={movies} />
		</Wrapper>
	);
}
