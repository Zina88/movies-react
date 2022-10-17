import { Report } from 'notiflix/build/notiflix-report-aio';

const getSearchMovies = async query => {
  const API_KEY = '8562b39677dad16e2334fc338fdc606e';
  const BASE_URL = `https://api.themoviedb.org/3/search/movie`;

  const response = await fetch(
    `${BASE_URL}?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`,
  );
  const data = await response.json();

  if (data.total_results === 0) {
    Report.failure('Error', 'Invalid request', 'close');
  }
  return data;
};

export default getSearchMovies;
