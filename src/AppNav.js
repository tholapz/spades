import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { ROUTES } from './constants';

const { HOME, FLOORPLAN, BOOKING } = ROUTES;
export default props => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href={`#${HOME}`}>The Spades</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href={`#${FLOORPLAN}`}>
                    Floorplan
    </NavItem>
                <NavItem eventKey={2} href={`#${BOOKING}`}>
                    Booking
    </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}