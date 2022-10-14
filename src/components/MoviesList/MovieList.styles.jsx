import styles from 'styled-components';

export const List = styles.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-right: -5px;
  margin-bottom: -5px;`;

// export const LinkNav = styles(Link)`
//   text-decoration: none;
//   color: darkblue;
// `;
export const Item = styles.li`
  border: 1px solid darkblue;
  list-style: none;
  text-align: center;
  margin-right: 5px;
  margin-bottom: 5px;
  box-shadow: 1px 0 1px rgba(0, 0, 139, 0.219), 2px 3px 3px rgba(0, 0, 139, 0.219);
  transition: all 300ms linear; 

&:hover{
  scale: 1.01;
}
`;

export const Img = styles.img`
padding: 3px;

`;

export const Title = styles.h2`
  margin: 0;
  font-size: 18px;
`;

export const VoteWrapper = styles.div`  display: flex;
  justify-content: space-around;`;
