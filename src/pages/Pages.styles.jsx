import styled from 'styled-components';

export const Back = styled.button`
  background-color: transparent;
  color: darkblue;
  border: 1px solid darkblue;
  padding: 5px 20px;
  border-radius: 3px;
  margin-bottom: 10px;
  transition: all 250ms linear;

  &:active,
  &:hover {
    background-color: darkblue;
    color: white;
    border: 1px solid darkblue;
  }
`;

export const Wrapper = styled.div`
  padding: 15px;
`;
