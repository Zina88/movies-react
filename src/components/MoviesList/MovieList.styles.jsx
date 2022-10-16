import styles from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styles.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-right: -7px;
  margin-bottom: -7px;`;

export const Item = styles.li`

  list-style: none;
  text-align: center;
  margin-right: 7px;
  margin-bottom: 7px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: all 300ms linear; 

&:hover{
  scale: 1.01;
  box-shadow: 0px 1px 1px rgba(200, 101, 247, 0.22), 0px 4px 4px rgba(200, 101, 247, 0.16), 1px 4px 6px rgba(200, 101, 247, 0.26);
}
`;

export const Img = styles.img`
width: 400px;
height: 470px;
margin-bottom: 10px;
`;

export const Title = styles.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 24px;
margin-bottom: 10px;
`;

export const VoteWrapper = styles.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around; 
  margin-bottom: 10px;
`;

export const LinkNav = styles(Link)`
color: inherit;
`;

export const Vote = styles.b`
color: ${p => p.theme.colors.accent};`;
