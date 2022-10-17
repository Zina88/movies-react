import styled from 'styled-components';

export const Div = styled.div`
  padding: 15px;
`;

export const List = styled.ul`
  display: flex;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(7, 1fr);
`;

export const Item = styled.li`
  box-shadow: ${p => p.theme.boxShadow.primary};
  transition: all 300ms linear;
`;

export const Name = styled.h3`
  color: ${p => p.theme.colors.primary};
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const Rating = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  padding: 2px;
  margin-bottom: 10px;
`;

export const Alert = styled.h3`
  padding: 15px;
  color: ${p => p.theme.colors.accent};
`;
