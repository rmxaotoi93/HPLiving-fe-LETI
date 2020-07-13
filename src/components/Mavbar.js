import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

export default function Mavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#host">Posting</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
