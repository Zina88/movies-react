const getVideo = async moviesId => {
  const API_KEY = '8562b39677dad16e2334fc338fdc606e';
  const BASE_URL = `https://api.themoviedb.org/3/`;

  const response = await fetch(
    `${BASE_URL}/movie/${moviesId}/videos?api_key=${API_KEY}&language=en-US`,
  );
  const data = await response.json();

  // if (data === 0) {
  //   console.log('Нет трейлера');
  //   return;
  // }

  return data;
};

export default getVideo;
