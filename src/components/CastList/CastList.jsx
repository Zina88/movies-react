import { Div, List, Item, Name, Rating, Img } from './CastList.styled';
import PropTypes from 'prop-types';
import noAvatar from '../../utilits/img/No-Image.png';

export default function CastList({ actors }) {
  return (
    <Div>
      <List>
        {actors.map(({ id, name, profile_path, popularity }) => (
          <Item key={id}>
            <Img
              src={profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : noAvatar}
              alt={name}
            />
            <Name>{name}</Name>
            <Rating>
              Rating: <b>{popularity}</b>
            </Rating>
          </Item>
        ))}
      </List>
    </Div>
  );
}

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
      popularity: PropTypes.number,
    }),
  ),
};
