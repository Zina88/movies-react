import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';

export const Link = styled(NavLink)`
	text-decoration: none;
	margin-right: 20px;
	font-size: 42px;
	font-weight: 500;
	color: ${p => p.theme.colors.white};
	transition: all 300ms linear;

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
	width: 30px;
	height: 30px;
	margin-right: 15px;
	transition: all 300ms linear;

	&:hover {
		fill: ${p => p.theme.colors.hover};
	}
`;
