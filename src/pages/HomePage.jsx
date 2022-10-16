import { useState, useEffect } from 'react';
import getTrandingMovie from '../services/api';
import MoviesList from 'components/MoviesList';
import { Wrapper, Title } from 'pages/Pages.styles';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <Wrapper>
      <Title>Trending Today</Title>
      <MoviesList movies={movies} />
    </Wrapper>
  );
}
