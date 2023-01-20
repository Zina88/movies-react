import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

import {
	ImgWrapper,
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
	CustomList,
	CustomItem,
	Favourites,
} from './MovieDetailsList.styled';
import noPoster from 'utilits/img/No_Poster.png';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Loader from 'components/Loader';

export default function MovieDetailsList({ movie, handleFavouriteClick, children }) {
	const navigate = useNavigate();
	const location = useLocation();

	const { original_title, genres, overview, poster_path, release_date, vote_average, vote_count } =
		movie;

	const back = () => navigate(location?.state?.from ?? '/');

	return (
		<div>
			<WrapperBtn>
				<Back type="button" onClick={back}>
					<BackLogo />
					Back
				</Back>
			</WrapperBtn>

			<Wrapper>
				<ImgWrapper>
					<Img
						src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noPoster}
						alt={original_title}
					/>
				</ImgWrapper>
				<div>
					<Title> {original_title}</Title>
					<Release>
						Data release: <b>{release_date}</b>
					</Release>
					<Vote>
						<p>
							Vote Average: <b>{vote_average ? vote_average.toFixed(1) : '-'}</b>
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
					<Favourites onClick={() => handleFavouriteClick(movie)}>{children}</Favourites>
				</div>
			</Wrapper>

			<WrapperNav>
				<CustomList>
					<CustomItem>
						<CustomLink to="cast">
							<CustLogo />
							Cast
						</CustomLink>
					</CustomItem>
					<CustomItem>
						<CustomLink to="reviews">
							<CustLogo />
							Reviews
						</CustomLink>
					</CustomItem>
					<CustomItem>
						<CustomLink to="trailer">
							<CustLogo />
							Trailer
						</CustomLink>
					</CustomItem>
				</CustomList>
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
