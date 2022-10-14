import { Img, Wrapper, Title, Release, Genres, Item, Vote } from './MovieDetailsList.styled';

export default function MovieDetailsList({ movie }) {
  const { title, genres, overview, poster_path, release_date, vote_average, vote_count } = movie;

  return (
    <Wrapper>
      <div>
        <Img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt={title} />
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
  );
}
