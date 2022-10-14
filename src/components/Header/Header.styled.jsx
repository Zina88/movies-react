import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  margin-right: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #2a2adb;

  &.active {
    background-color: #a9dafa;
    padding: 7px;
    border-radius: 10px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  padding: 20px;
  box-shadow: 1px 0 1px rgba(0, 0, 139, 0.219), 2px 3px 3px rgba(0, 0, 139, 0.219);
`;
