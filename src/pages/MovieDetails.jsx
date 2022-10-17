import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieDetails from '../services/getMovieDetails';
import MovieDetailsList from '../components/MovieDetailsList';
import { Back, Wrapper, BackLogo } from './Pages.styles';

export default function MovieDetails() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  const location = useLocation();
  const backLink = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(moviesId).then(setMovie);
  }, [moviesId]);

  return (
    <Wrapper>
      <Back type="button" onClick={backLink}>
        <BackLogo />
        Back
      </Back>

      <MovieDetailsList movie={movie} />
    </Wrapper>
  );
}
