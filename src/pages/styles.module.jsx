import styles from 'styled-components';

export const WrapperNotFound = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;

export const ImgNotFound = styles.img`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;	
  
    @media (min-width: 1200px) {
        width: 1200px;
	}
`;
