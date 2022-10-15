// import axios from 'axios';

const API_KEY = '8562b39677dad16e2334fc338fdc606e';
const BASE_URL = `https://api.themoviedb.org/3/`;



// export default async function getTranding() {
//   const {
//     data: { results },
//   } = await axios.get(`/trending/movie/day?page=1&api_key=${API_KEY}`);

//   return results;
// }

const getTranding = async () => {
  const response = await fetch(`${BASE_URL}trending/movie/day?page=1&api_key=${API_KEY}`);
  const data = await response.json();

  return data;
}

export default getTranding;