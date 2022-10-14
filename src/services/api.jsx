import axios from 'axios';

const API_KEY = '8562b39677dad16e2334fc338fdc606e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default async function getTranding() {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?page=1&api_key=${API_KEY}`);

  return results;
}

export async function getSearchMovie(query, page = 1) {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`,
  );

  return results;
}

export async function getMovieDetails(id) {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);

  return data;
}

export async function getMovieCredits(id) {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);

  return data;
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);

  return data;
}
