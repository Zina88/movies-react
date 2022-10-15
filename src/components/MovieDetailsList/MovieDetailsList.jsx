import { useLocation, Outlet } from 'react-router-dom';
import {
  Img,
  Wrapper,
  Title,
  Release,
  Genres,
  Item,
  Vote,
  WrapperNav,
  CustomLink,
} from './MovieDetailsList.styled';
import noPoster from '../../utilits/img/No_Poster.png';

export default function MovieDetailsList({ movie }) {
  const { id, title, genres, overview, poster_path, release_date, vote_average, vote_count } =
    movie;

  return (
    <div>
      <Wrapper>
        <div>
          <Img
            src={poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}` : noPoster}
            alt={title}
          />
        </div>
        <div>
          <Title> {title}</Title>
          <Release>
            Data release: <b>{release_date}</b>
          </Release>
          <Vote>
            <p>
              Vote Average: <b>{vote_average}</b>
            </p>
            <p>
              Vote Count: <b>{vote_count}</b>
            </p>
          </Vote>
          <Genres>
            Genres: {genres && genres.map(({ id, name }) => <Item key={id}>{name}</Item>)}
          </Genres>
          <p>
            <b>Overview:</b> <br />
            {overview}
          </p>
        </div>
      </Wrapper>
      <WrapperNav>
        <ul>
          <li>
            <CustomLink to="cast">Cast</CustomLink>
          </li>
          <li>
            <CustomLink to="reviews">Reviews</CustomLink>
          </li>
        </ul>
      </WrapperNav>

      <Outlet />
    </div>
  );
}
