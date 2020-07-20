import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/userAction";
export default function Profile(props) {
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="profile">
        <button onClick={() => dispatch(logout())}>logout</button>
        <Row>
          <Col lg={3}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"></img>
          </Col>
          <Col lg={9}>
            <h2>Username</h2>
            <h6>Email</h6>
          </Col>
        </Row>
        <div className="header-profile">
          <h4>Account</h4>
        </div>
        <Row>
          <Col lg={3}>
            {" "}
            <div className="profile-title">
              <h4>Title</h4>
            </div>
          </Col>
          <Col lg={9}>
            <div className="profile-title">
              <input type="text" placeholder="Title" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            {" "}
            <div className="profile-title">
              <h4>Type of </h4>
            </div>
          </Col>
          <Col lg={9}>
            <div className="profile-title">
              <input type="text" placeholder="Type of" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            {" "}
            <div className="profile-title">
              <h4>Description</h4>
            </div>
          </Col>
          <Col lg={9}>
            <div className="profile-title">
              <input type="text" placeholder="Detail information" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            {" "}
            <div className="profile-title">
              <h4>Images</h4>
            </div>
          </Col>
          <Col lg={9}>
            <div className="profile-title">
              <input type="text" placeholder="username" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            {" "}
            <div className="profile-title">
              <h4>Price</h4>
            </div>
          </Col>
          <Col lg={9}>
            <div className="profile-title">
              <input type="text" placeholder="$" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            {" "}
            <div className="profile-title">
              <h4>Location</h4>
            </div>
          </Col>
          <Col lg={9}>
            <div className="profile-title">
              <input type="text" placeholder="Address" />
            </div>
          </Col>
        </Row>
        <Button>Update Profile</Button>
      </div>
    </Container>
  );
}
