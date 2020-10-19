import React from 'react'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import reactLogo from '../assets/react-logo-navbar.png';
import { reactStyledNavItem, reactStyledNavBrand, activeReactStyledNavItem } from '../Classes.module.css'
import { NavLink } from 'react-router-dom';

export const Menu = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand className="font-weight-bold" href="/"><Image src={reactLogo} /> <span className={reactStyledNavBrand}>React Conf 2020</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">                
                    
                        <NavLink to="/schedule"
                            className={reactStyledNavItem}
                            activeClassName={activeReactStyledNavItem}>
                            Schedule
                        </NavLink>
                    
                        <NavLink to="/location" 
                            className={reactStyledNavItem} 
                            activeClassName={activeReactStyledNavItem}>
                            Location
                        </NavLink>
                    
                        <NavLink to="/food" 
                            className={reactStyledNavItem} 
                            activeClassName={activeReactStyledNavItem}>
                            Food
                        </NavLink>
                    
                        <NavLink to="/code-of-conduct" 
                            className={reactStyledNavItem} 
                            activeClassName={activeReactStyledNavItem}>
                            Code Of Conduct
                        </NavLink>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)