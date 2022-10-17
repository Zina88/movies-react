import styles from 'styled-components';

export const Wrapper = styles.div`
padding: 15px;
`;

export const List = styles.ul`
`;

export const Item = styles.li`
border-bottom: 1px dashed #c865f7;
padding: 15px;
`;

export const Author = styles.h3`
margin-bottom: 7px;
`;

export const Content = styles.p`
`;

export const Alert = styles.h3`
padding: 15px;
color: ${p => p.theme.colors.accent}`;
