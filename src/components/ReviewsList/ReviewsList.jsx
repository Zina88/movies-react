import PropTypes from 'prop-types';
import { Wrapper, List, Item, Author, Content, Alert } from './ReviewsList.styles';

export default function ReviewsList({ reviews }) {
  return reviews !== null && reviews.length > 0 ? (
    <Wrapper>
      <List>
        {reviews.map(({ id, author, content }) => (
          <Item key={id}>
            <Author>{author}</Author>
            <Content>{content}</Content>
          </Item>
        ))}
      </List>
    </Wrapper>
  ) : (
    <Alert>We don't have any reviews for this movie :(</Alert>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};
