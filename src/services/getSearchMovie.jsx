import { Report } from 'notiflix/build/notiflix-report-aio';

const API_KEY = process.env.REACT_APP_KEY;
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
