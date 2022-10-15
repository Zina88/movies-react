import { Div, List, Item, Name, Rating, Img } from './CastList.styled';
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
            <Rating>Rating:{popularity}</Rating>
          </Item>
        ))}
      </List>
    </Div>
  );
}
