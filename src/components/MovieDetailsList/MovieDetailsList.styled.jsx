import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TbPlaylistAdd } from 'react-icons/tb';

export const Img = styled.img`
  transition: all 300ms linear;
  width: 400px;

  &:hover {
    scale: 1.02;
    box-shadow: ${p => p.theme.boxShadow.accent};
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 430px 1fr;
  padding: 15px;
  border-bottom: 2px double ${p => p.theme.colors.accent};
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-size: 42px;
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
  grid-template-columns: 170px 170px;
  margin-bottom: 15px;
`;

export const WrapperNav = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
`;

export const CustomLink = styled(NavLink)`
  display: flex;
  align-items: center;

  text-decoration: none;
  transition: all 300ms linear;
  color: inherit;
  font-size: 20px;

  &.active {
    color: ${p => p.theme.colors.accent};
    border-radius: 10px;
  }
`;

export const CustLogo = styled(TbPlaylistAdd)`
  margin-right: 7px;
  width: 25px;
  height: 25px;
`;
