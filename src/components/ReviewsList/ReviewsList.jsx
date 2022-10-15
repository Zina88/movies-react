import PropTypes from 'prop-types';

export default function ReviewsList({ reviews }) {
  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};