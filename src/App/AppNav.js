import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">The Spades</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>

            </Nav>
        </Navbar>
    )
}