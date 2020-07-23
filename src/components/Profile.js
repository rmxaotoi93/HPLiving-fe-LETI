import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Profile() {
  let { id } = useParams();
  let [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/me/${id}`).then((res) => {
      console.log(res.data.data);
      setUser(res.data.data);
    });
  }, []);

  return (
    <Container>
      <div className="profile">
        <Row>
          <Col lg={3}>
            <img src={user.image}></img>
          </Col>
          <Col lg={9}>
            <h2>Username: {user.name}</h2>
            <h6>Email: {user.email}</h6>
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
