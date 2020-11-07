import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { GoLinkExternal } from 'react-icons/go';

export const Footer = () => (
	<Navbar bg="dark" variant="dark" className="align-items-center">
		<div className="mx-auto">
			<NavbarBrand>Facebook © 2020 | <a href="https://github.com/salimdellali/dummy-react-conf-website" target="_blank" rel="noopener noreferrer">Github Repo <GoLinkExternal /></a></NavbarBrand>
		</div>
	</Navbar>
)