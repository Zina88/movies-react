import styles from 'styled-components';

export const Wrapper = styles.div`
  padding: 15px;
`;

export const Title = styles.h1`
  margin-bottom: 15px;
`;

export const WrapperEnd = styles.p`
font-size: 20px;
padding: 15px;
color: ${p => p.theme.colors.primary};
`;
