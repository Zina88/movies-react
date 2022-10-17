import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReviews from 'services/getMovieReviews';
import ReviewsList from '../components/ReviewsList';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieReviews(moviesId).then(({ results }) => {
      setReviews(results);
    });
  }, [moviesId]);

  return reviews && <ReviewsList reviews={reviews} />;
}
