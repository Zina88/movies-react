import PropTypes from 'prop-types';
import { Wrapper, List, Item, Author, Content } from './ReviewsList.styles';

export default function ReviewsList({ reviews }) {
  return (
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
