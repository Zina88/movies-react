import { Div, List, Item, Name, Rating, Img, Alert } from './CastList.styled';
import PropTypes from 'prop-types';
import noAvatar from '../../utilits/img/No-Image.png';

export default function CastList({ actors }) {
  return actors !== 0 && actors.length > 0 ? (
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
  ) : (
    <Alert>We don't have any actors for this movie :(</Alert>
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
