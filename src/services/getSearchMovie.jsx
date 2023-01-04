import { Report } from 'notiflix/build/notiflix-report-aio';

const API_KEY = '8562b39677dad16e2334fc338fdc606e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getSearchMovies = async query => {
	const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
	const data = await response.json();

	if (data.total_results === 0) {
		Report.failure('Error', 'Invalid request', 'close');
	}
	console.log(data);
	return data;
};

export default getSearchMovies;
