import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import reactLogo from '../assets/react-logo-navbar.png';
import {
	reactStyledNavItem,
	reactStyledNavBrand,
	activeReactStyledNavItem,
} from '../Classes.module.css';
import { NavLink } from 'react-router-dom';

export const Menu = (props) => {
	const { title } = props;

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand className="font-weight-bold" href="/">
					<Image src={reactLogo} />{' '}
					<span className={reactStyledNavBrand}>{title}</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<NavLink
							exact
							to="/"
							className={reactStyledNavItem}
							activeClassName={activeReactStyledNavItem}
						>
							Home
						</NavLink>

						<NavLink
							to="/schedule"
							className={reactStyledNavItem}
							activeClassName={activeReactStyledNavItem}
						>
							Schedule
						</NavLink>

						<NavLink
							to="/location"
							className={reactStyledNavItem}
							activeClassName={activeReactStyledNavItem}
						>
							Location
						</NavLink>

						<NavLink
							to="/food"
							className={reactStyledNavItem}
							activeClassName={activeReactStyledNavItem}
						>
							Food
						</NavLink>

						<NavLink
							to="/code-of-conduct"
							className={reactStyledNavItem}
							activeClassName={activeReactStyledNavItem}
						>
							Code Of Conduct
						</NavLink>

						<NavLink
							to="/attendees"
							className={reactStyledNavItem}
							activeClassName={activeReactStyledNavItem}
						>
							Attendees
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

Menu.propTypes = {
	title: PropTypes.string.isRequired,
};
