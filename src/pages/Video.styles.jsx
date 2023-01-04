import styles from 'styled-components';
// padding: 15px;
export const Wrapper = styles.div`
    min-width: 300px;  
    padding: 15px;

  @media (min-width: 768px) {
    width: 640px;  
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
      width: 700px;
  }
`;

export const Btn = styles.button`
display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${p => p.theme.colors.accent};
  border: 1px solid ${p => p.theme.colors.accent};
  padding: 5px 15px 5px 15px;
  border-radius: 3px;
  transition: all 250ms linear;

  &:active,
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: white;
    border: 1px solid ${p => p.theme.colors.accent};
  }
`;
