const API_KEY = '8562b39677dad16e2334fc338fdc606e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getMovieCredits = async moviesId => {
	const response = await fetch(
		`${BASE_URL}/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`,
	);
	const data = await response.json();

	return data;
};

export default getMovieCredits;
