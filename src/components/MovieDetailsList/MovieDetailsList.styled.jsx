import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Img = styled.img`
  transition: all 300ms linear;
  width: 400px;

  &:hover {
    scale: 1.02;
    box-shadow: 1px 0 1px rgba(0, 0, 139, 0.219), 2px 3px 3px rgba(0, 0, 139, 0.219);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 430px 1fr;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  color: darkblue;
  font-size: 32px;
  margin-bottom: 15px;
`;

export const Release = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Genres = styled.ul`
  margin-bottom: 15px;
`;

export const Item = styled.li`
  margin-left: 30px;
  list-style: square;
`;

export const Vote = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 15px;
`;

export const WrapperNav = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
`;

export const CustomLink = styled(NavLink)`
  text-decoration: none;
  transition: all 300ms linear;
  color: inherit;

  &.active {
    color: #8afa;
    border-radius: 10px;
  }
`;
