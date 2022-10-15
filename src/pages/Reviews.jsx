import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReviews from 'services/getMovieReviews';
import ReviewsList from '../components/ReviewsList'

export default function Reviews() {
  const [reviews, setReviews] = useState();
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieReviews(moviesId).then(({ results }) => {
      setReviews(results);
    });
  }, [moviesId]);

  return reviews && reviews.length > 0 ? (
    <ReviewsList reviews={reviews} />
  ) : (
    <h2>We don't have any reviews for this movie!</h2>
  );
}
