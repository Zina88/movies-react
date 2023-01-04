import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TbPlaylistAdd } from 'react-icons/tb';
import { TiArrowBackOutline } from 'react-icons/ti';

export const ImgWrapper = styled.div`
	@media (min-width: 768px) {
		margin-right: 15px;
	}
`;

export const Img = styled.img`
	transition: all 300ms linear;
	width: 100%;

	&:hover {
		scale: 1.02;
		box-shadow: ${p => p.theme.boxShadow.accent};
	}
`;

export const Wrapper = styled.div`
	padding: 15px;
	border-bottom: 2px double ${p => p.theme.colors.accent};

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 400px 1fr;
		min-width: 768px;
	}
`;

export const Title = styled.h2`
	color: ${p => p.theme.colors.accent};
	font-size: 42px;
	margin-bottom: 15px;
`;

export const Release = styled.p`
	font-size: 18px;
	margin-bottom: 15px;
`;

export const Genres = styled.ul`
	margin-bottom: 15px;
`;

export const Item = styled.li`
	margin-left: 30px;
	list-style: square;
`;

export const Vote = styled.div`
	display: grid;
	grid-template-columns: 170px 170px;
	margin-bottom: 15px;
`;

export const WrapperNav = styled.div`
	border-bottom: 1px solid #ccc;
	padding: 15px;

	@media screen(min-width: 768px) {
		padding-bottom: 15px;
		padding-left: 15px;
	}
`;

export const CustomList = styled.ul`
	@media (max-width: 767px) {
		display: flex;
		justify-content: space-around;
	}
`;
export const CustomItem = styled.li``;

export const CustomLink = styled(NavLink)`
	display: flex;
	align-items: center;

	text-decoration: none;
	transition: all 300ms linear;
	color: inherit;
	font-size: 20px;

	&.active {
		color: ${p => p.theme.colors.accent};
		border-radius: 10px;
	}
`;

export const CustLogo = styled(TbPlaylistAdd)`
	margin-right: 7px;
	width: 25px;
	height: 25px;
`;

export const WrapperBtn = styled.div`
	padding: 15px 15px 55px 15px;
`;

export const Back = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: transparent;
	color: ${p => p.theme.colors.accent};
	border: 1px solid ${p => p.theme.colors.accent};
	padding: 5px 15px 5px 10px;
	border-radius: 3px;
	transition: all 250ms linear;

	&:active,
	&:hover {
		background-color: ${p => p.theme.colors.accent};
		color: white;
		border: 1px solid ${p => p.theme.colors.accent};
	}
`;

export const BackLogo = styled(TiArrowBackOutline)`
	margin-right: 7px;
	width: 15px;
	height: 15px;
`;
