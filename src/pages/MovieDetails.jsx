import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieDetails from '../services/getMovieDetails';
import MovieDetailsList from '../components/MovieDetailsList';
import { Back, Wrapper, BackLogo } from './Pages.styles';

export default function MovieDetails() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(moviesId).then(setMovie);
  }, [moviesId]);

  return (
    <Wrapper>
      <Link to={backLink}>
        <Back type="button">
          <BackLogo />
          Back
        </Back>
      </Link>

      <MovieDetailsList movie={movie} />
    </Wrapper>
  );
}
