import styled from 'styled-components';

export const Div = styled.div`
  padding: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin-right: 5px;
  margin-bottom: 5px;
  box-shadow: 1px 0 1px rgba(0, 0, 139, 0.219), 2px 3px 3px rgba(0, 0, 139, 0.219);
  transition: all 300ms linear;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  &:hover {
    scale: 1.01;
  }
`;

export const Name = styled.h3`
  text-align: center;
  color: darkblue;
  margin-bottom: 10px;
`;

export const Rating = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  padding: 2px;
  margin-bottom: 10px;
  width: 200px;
`;
