const getMovieCredits = async moviesId => {
  const API_KEY = process.env.REACT_APP_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const response = await fetch(
    `${BASE_URL}/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  const data = await response.json();

  return data;
};

export default getMovieCredits;
