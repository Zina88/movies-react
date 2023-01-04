const API_KEY = process.env.REACT_APP_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTranding = async currentPage => {
	const response = await fetch(
		`${BASE_URL}trending/movie/week?page=${currentPage}&api_key=${API_KEY}`,
	);
	const data = await response.json();

	return data;
};

export default getTranding;
