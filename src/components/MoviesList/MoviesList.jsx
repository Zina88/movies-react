import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, Img, Title, VoteWrapper } from './MovieList.styles';
import styles from 'styled-components';

const LinkNav = styles(Link)`
  text-decoration: none;
  color: darkblue;
`;

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title, poster_path, vote_average, vote_count }) => (
          <Item key={id}>
            <LinkNav to={`${id}`} state={{ from: location }}>
              <Img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
              <Title>{title}</Title>
              <VoteWrapper>
                <p>{vote_average}</p>
                <p>{vote_count}</p>
              </VoteWrapper>
            </LinkNav>
          </Item>
        ))}
      </List>
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};
