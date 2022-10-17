import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
  Img,
  Wrapper,
  Title,
  Release,
  Genres,
  Item,
  Vote,
  WrapperBtn,
  Back,
  BackLogo,
  CustomLink,
  WrapperNav,
  CustLogo,
} from './MovieDetailsList.styled';
import noPoster from 'utilits/img/No_Poster.png';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Loader from 'components/Loader';

export default function MovieDetailsList({ movie }) {
  const navigate = useNavigate();

  const { original_title, genres, overview, poster_path, release_date, vote_average, vote_count } =
    movie;

  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <WrapperBtn>
        <Back type="button" onClick={back}>
          <BackLogo />
          Back
        </Back>
      </WrapperBtn>

      <Wrapper>
        <div>
          <Img
            src={poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}` : noPoster}
            alt={original_title}
          />
        </div>
        <div>
          <Title> {original_title}</Title>
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
            <CustomLink to="cast">
              <CustLogo />
              Cast
            </CustomLink>
          </li>
          <li>
            <CustomLink to="reviews">
              <CustLogo />
              Reviews
            </CustomLink>
          </li>
        </ul>
      </WrapperNav>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

MovieDetailsList.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
};
