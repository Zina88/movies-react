import styled from 'styled-components';

export const Input = styled.input`
	width: 350px;
	padding: 7px 20px;
	border-radius: 8px 0 0 8px;
	border: 1px solid ${p => p.theme.colors.accent};
	transition: all 300ms linear;

	&:focus-visible {
		outline: none;
	}
`;

export const Wrapper = styled.div`
	padding-top: 100px;
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
`;

export const Button = styled.button`
	width: 150px;

	background-color: ${p => p.theme.colors.accent};
	color: ${p => p.theme.colors.white};
	border: 1px solid ${p => p.theme.colors.accent};

	padding: 7px 20px;
	border-radius: 0 8px 8px 0;
	transition: all 250ms linear;

	&:active,
	&:hover {
		background-color: ${p => p.theme.colors.hover};
		border: 1px solid ${p => p.theme.colors.hover};
	}
`;
