import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
	FlexFunc,
	color_light,
	color_transparent,
	color_background,
	shadow
} from './../~reusables/reusables';

const NavSection = styled.nav`
	${FlexFunc('column', 'center', 'center')};
	position: absolute;
	top: 2rem;
	left: 2rem;
	a {
		background: ${color_transparent};
		padding: 0.5rem 2rem;
		width: 8rem;
		border: 2px solid ${color_light};
		border-radius: 1.5rem;
		margin-bottom: 1rem;
		color: ${color_light};
		text-decoration: none;
		font-weight: bold;

		&:hover {
			box-shadow: ${shadow};
		}

		&.activeNavLink {
			background: ${color_light};
			color: ${color_background};
		}
	}
`;

const Nav = () => {
	return (
		<NavSection>
			<NavLink exact to="/" activeClassName="activeNavLink">
				Friends List
			</NavLink>
			<NavLink exact to="newfriend" activeClassName="activeNavLink">
				Add Friend
			</NavLink>
		</NavSection>
	);
};

export default Nav;
