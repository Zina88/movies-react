// const API_KEY = '8562b39677dad16e2334fc338fdc606e';
// const BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = process.env.REACT_APP_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getTradingMovie = async currentPage => {
	const response = await fetch(
		`${BASE_URL}trending/movie/day?page=${currentPage}&api_key=${API_KEY}`,
	);
	const data = await response.json();
	return data;
};

export default getTradingMovie;
