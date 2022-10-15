import styled from 'styled-components';

export const Input = styled.input`
  width: 300px;

  padding: 5px 20px;
  border-radius: 8px 0 0 8px;
  border: 1px solid darkblue;

  &:focus-visible {
    border: 1px solid darkblue;
    outline: none;
  }
`;

export const Wrapper = styled.div``;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 136, 0.2);
`;

export const Button = styled.button`
  width: 100px;

  background-color: transparent;
  color: darkblue;
  border: 1px solid darkblue;

  padding: 5px 20px;
  border-radius: 0 8px 8px 0;
  transition: all 250ms linear;

  &:active,
  &:hover {
    background-color: darkblue;
    color: white;
    border: 1px solid darkblue;
  }
`;
