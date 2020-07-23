import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Profile() {
  let { id } = useParams();
  let [user, setUser] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/users/me/${id}`).then((res) => {
      console.log(res.data.data);
      setUser(res.data.data);
      setEmail(res.data.data.email);
      setName(res.data.data.name);
    });
  }, []);
  const updateUser = async () => {
    const oldUser = { name: name, email: email };
    const newUser = await axios.put(
      `${process.env.REACT_APP_SERVER}/users/${id}`,
      oldUser
    );
    console.log("newuser", newUser);
    setUser(newUser.data.data);
    setEmail(newUser.data.data.email);
    setName(newUser.data.data.name);
  };
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
              <h4>User</h4>
            </div>
          </Col>
          <Col lg={9}>
            <div className="profile-title">
              <input
                type="text"
                placeholder="Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            {" "}
            <div className="profile-title">
              <h4>Email </h4>
            </div>
          </Col>
          <Col lg={9}>
            <div className="profile-title">
              <input
                type="text"
                placeholder="Type of"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Col>
        </Row>

        <Button onClick={updateUser}>Update Profile</Button>
      </div>
    </Container>
  );
}
