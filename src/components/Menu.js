import React from 'react'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import reactLogo from '../assets/react-logo-navbar.png';
import { reactStyledNavItem, reactStyledNavBrand } from '../Classes.module.css'

export const Menu = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand className="font-weight-bold" href="/"><Image src={reactLogo} /> <span className={reactStyledNavBrand}>React Conf 2020</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className={reactStyledNavItem} href="/schedule">Schedule</Nav.Link>
                    <Nav.Link className={reactStyledNavItem} href="/location">Location</Nav.Link>
                    <Nav.Link className={reactStyledNavItem} href="/food">Food</Nav.Link>
                    <Nav.Link className={reactStyledNavItem} href="/code-of-conduct">Code Of Conduct</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)