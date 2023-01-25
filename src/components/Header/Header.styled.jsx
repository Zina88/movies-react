import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';

export const Link = styled(NavLink)`
	text-decoration: none;
	margin-right: 20px;
	font-size: 20px;
	font-weight: 500;
	color: ${p => p.theme.colors.white};
	transition: all 300ms linear;

	@media (min-width: 768px) {
		font-size: 26px;
	}

	@media (min-width: 1200px) {
		font-size: 32px;
	}

	&.active {
		color: ${p => p.theme.colors.accent};
		border-radius: 10px;
	}

	&:last-child {
		margin-right: 0;
	}
`;

export const Nav = styled.nav`
	padding: 20px;
	box-shadow: ${p => p.theme.boxShadow.accent};
	background-color: ${p => p.theme.colors.backgroundAccent};
	position: fixed;
	width: 100%;
	z-index: 999;
`;

export const Logo = styled(GiFilmStrip)`
	fill: ${p => p.theme.colors.white};
	width: 15px;
	height: 15px;
	margin-right: 5px;
	transition: all 300ms linear;

	@media (min-width: 768px) {
		width: 20px;
		height: 20px;
		margin-right: 7px;
	}

	@media (min-width: 1200px) {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}

	&:hover {
		fill: ${p => p.theme.colors.hover};
	}
`;
