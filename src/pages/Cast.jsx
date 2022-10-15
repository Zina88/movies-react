import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieCredits from 'services/getMovieCredits';
import CastList from 'components/CastList';

export default function Cast() {
  const [actors, setActors] = useState();
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieCredits(moviesId).then(({ cast }) => {
      setActors(cast);
    });
  }, [moviesId]);

  return actors && <CastList actors={actors} />;
}
