import { Wrapper } from './Favourites.styles';
import useLocalStorage from 'hooks/useLocalStorage';
import MoviesList from 'components/MoviesList';

export default function Favourites() {
	const [favourites, setFavourites] = useLocalStorage('movies', '');

	return (
		<Wrapper>
			<MoviesList movies={favourites} />
		</Wrapper>
	);
}
