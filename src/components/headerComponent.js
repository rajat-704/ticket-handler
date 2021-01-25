import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" fixed="top" bg="primary" variant="dark">
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-3">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#features">Raise Ticket</Nav.Link>
                        <Nav.Link href="/list">All Tickets</Nav.Link>
                        <Nav.Link href="#apply">Apply for Ticket</Nav.Link>
                        <Nav.Link href="#pricing">Sign In/Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}