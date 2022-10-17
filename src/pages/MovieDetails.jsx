import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieDetails from '../services/getMovieDetails';
import MovieDetailsList from '../components/MovieDetailsList';

export default function MovieDetails() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(moviesId).then(setMovie);
  }, [moviesId]);

  return <>{movie && <MovieDetailsList movie={movie} />}</>;
}
