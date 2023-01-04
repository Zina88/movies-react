import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, List, Item, Img, Title, VoteWrapper, LinkNav, Vote } from './MovieList.styles';
import noPoster from 'utilits/img/No_Poster.png';
import Loader from 'components/Loader';

export default function MoviesList({ movies }) {
	const location = useLocation();

	return (
		<Wrapper>
			<List>
				{movies.map(({ title, vote_average, vote_count, poster_path, id }, index) => (
					<Item key={index}>
						<LinkNav to={`/movies/${id}`} state={{ from: location }}>
							<Img
								src={poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}` : noPoster}
								alt={title}
							/>
							<Title>{title.length > 20 ? title.slice(0, 20) + '...' : title}</Title>
							<VoteWrapper>
								<p>
									vote average:
									<Vote>{vote_average ? vote_average.toFixed(1) : '-'}</Vote>
								</p>
								<p>
									vote count: <Vote>{vote_count}</Vote>
								</p>
							</VoteWrapper>
						</LinkNav>
					</Item>
				))}
			</List>

			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</Wrapper>
	);
}

MoviesList.propTypes = {
	index: PropTypes.string,
	movies: PropTypes.array,
};
