import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PostHouse from "./PostHouse";
import Signup from "./Signup";

export default function Mavbar() {
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleLogout = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER}/auth/logout`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token", "userId")}`,
      },
    });
    console.log(token);
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    } else {
      console.log("dont mess with my app");
    }
    window.location.reload();
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setId(localStorage.getItem("userId"));
  });

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Mojave-Stay</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {token ? (
            <Nav>
              <Nav.Link>
                <Link
                  to={"/users/" + localStorage.getItem("userId")}
                  onClick={handleShow}
                >
                  Posting
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ display: "none" }} to="/" onClick={handleShow2}>
                  Signup
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/users/" + localStorage.getItem("userId")}>
                  Profile
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/" onClick={handleLogout}>
                  Log out
                </Link>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link style={{ display: "none" }} to="/" onClick={handleShow}>
                  Posting
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/" onClick={handleShow2}>
                  Signup
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ display: "none" }} to="/users">
                  Profile
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/login">Log in</Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Posting Posting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostHouse />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
