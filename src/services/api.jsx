const API_KEY = '8562b39677dad16e2334fc338fdc606e';
const BASE_URL = 'https://api.themoviedb.org/3/';

console.log(process.env.REACT_APP_KEY);
const getTranding = async currentPage => {
	const response = await fetch(
		`${BASE_URL}trending/movie/week?page=${currentPage}&api_key=${API_KEY}`,
	);
	const data = await response.json();
	console.log(data);
	return data;
};

export default getTranding;
