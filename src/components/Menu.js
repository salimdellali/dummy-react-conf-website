import React from 'react'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import reactLogo from '../assets/react-logo-navbar.png';

export const Menu = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/"><Image src={reactLogo} /> React Conf 2020</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                    <Nav.Link href="/location">Location</Nav.Link>
                    <Nav.Link href="/food">Food</Nav.Link>
                    <Nav.Link href="/code-of-conduct">Code Of Conduct</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)