import { Report } from 'notiflix/build/notiflix-report-aio';

const getSearchMovies = async query => {
	const API_KEY = process.env.REACT_APP_KEY;
	const BASE_URL = process.env.REACT_APP_BASE_URL;

	const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
	const data = await response.json();

	if (data.total_results === 0) {
		Report.failure('Error', 'Invalid request', 'close');
	}
	console.log(data);
	return data;
};

export default getSearchMovies;
