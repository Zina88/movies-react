import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, Img, Title, VoteWrapper, LinkNav } from './MovieList.styles';
import noPoster from '../../utilits/img/No_Poster.png';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <List>
        {/* {movies.map(({ id, title, poster_path, vote_average, vote_count }) => ( */}
        {movies.map((movies, index) => (
          <Item key={index}>
            <LinkNav to={`/movies/${movies.id}`} state={{ from: location }}>
              <Img
                src={
                  movies.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movies.poster_path}`
                    : noPoster
                }
                alt={movies.title}
              />
              <Title>{movies.title}</Title>
              <VoteWrapper>
                <p>{movies.vote_average}</p>
                <p>{movies.vote_count}</p>
              </VoteWrapper>
            </LinkNav>
          </Item>
        ))}
      </List>

      <Outlet />
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};
