import styles from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styles.div`
min-width: 320px;

@media (min-width: 768px) {
   min-width: 768px;
}

@media (min-width: 1200px) {
  min-width: 1200px;
}

`;

export const List = styles.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  margin-bottom: -7px;
  
@media (min-width: 768px) {  
    margin-right: -7px;
    grid-template-columns: repeat(3, 1fr);
}

@media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
}
  `;

export const Item = styles.li`
  position: relative;
  list-style: none;
  text-align: center;
  margin-bottom: 7px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: all 300ms linear; 

  @media (min-width: 768px) { 
    margin-right: 7px;
  }

&:hover {
  scale: 1.01;
  box-shadow: 0px 1px 1px rgba(200, 101, 247, 0.22), 0px 4px 4px rgba(200, 101, 247, 0.16), 1px 4px 6px rgba(200, 101, 247, 0.26);
}
`;

export const Img = styles.img`
  margin-bottom: 8px;
  width: 100%
  
`;

export const Title = styles.h2`
  font-size: 22px;
  margin-bottom: 8px;

  @media (min-width: 768px) { 
    font-size: 18px;
  }

  @media (min-width: 1200px) { 
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

export const VoteWrapper = styles.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center; 
  font-size: 20px;
  margin-bottom: 15px;

 @media (min-width: 768px) { 
  font-size: 14px;
  }

    @media (min-width: 1200px) { 
    margin-bottom: 10px;
    font-size: 12px;
  }
`;

export const LinkNav = styles(Link)`
color: inherit;
`;

export const Vote = styles.b`
color: ${p => p.theme.colors.accent};
margin-right: 10px;
`;
