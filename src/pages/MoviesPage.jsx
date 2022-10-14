import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getSearchMovie from 'services/getSearchMovie';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  console.log(query);

  useEffect(() => {
    if (query !== '') {
      getSearchMovie(query).then(({ results }) => {
        setMovies(results);
      });
    }
  }, [query]);

  const handleSubmit = value => {
    setMovies([...value]);
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div>
      <SearchBox onChange={handleSubmit} value={query} />
      {query !== null && <MoviesList movies={movies} />}
    </div>
  );
}
