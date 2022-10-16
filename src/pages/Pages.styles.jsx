import styled from 'styled-components';
import { TiArrowBackOutline } from 'react-icons/ti';

export const Back = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${p => p.theme.colors.accent};
  border: 1px solid ${p => p.theme.colors.accent};
  padding: 5px 15px 5px 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  transition: all 250ms linear;

  &:active,
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: white;
    border: 1px solid ${p => p.theme.colors.accent};
  }
`;

export const Wrapper = styled.div`
  padding: 15px;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
`;

export const BackLogo = styled(TiArrowBackOutline)`
  margin-right: 7px;
  width: 15px;
  height: 15px;
`;
