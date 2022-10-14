const getSearchMovies = async (query, page = 1) => {
  const API_KEY = '8562b39677dad16e2334fc338fdc606e';
  const BASE_URL = `https://api.themoviedb.org/3/search/movie`;

  const response = await fetch(
    `${BASE_URL}?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`,
  );
  const data = await response.json();

  return data;
};

export default getSearchMovies;
