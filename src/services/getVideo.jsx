const getVideo = async moviesId => {
	const API_KEY = process.env.REACT_APP_KEY;
	const BASE_URL = process.env.REACT_APP_BASE_URL;

	const response = await fetch(`${BASE_URL}/movie/${moviesId}/videos?api_key=${API_KEY}`);
	const data = await response.json();

	if (data === 0) {
		console.log('Нет трейлера');
		return;
	}
	return data;
};

export default getVideo;
