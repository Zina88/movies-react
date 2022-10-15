import { useState, useEffect } from 'react';
import getTrandingMovie from '../services/api';
import MoviesList from 'components/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
