const API_KEY = process.env.REACT_APP_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getTranding = async currentPage => {
	const response = await fetch(`${BASE_URL}trending/movie/week?page=${currentPage}&api_key=${API_KEY}`);
	const data = await response.json();

	console.log(data);
	return data;
};

export default getTranding;
