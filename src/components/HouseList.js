import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function HouseList() {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3001/houses");
      const house = await data.json();
      console.log("house listt ", house.data);
      setHouse(house.data);
    }
    fetchData();
  }, []);
  return (
    <div className="house-list">
      <h1>Room & Apartment</h1>
      <div className="below-h1"></div>
      <p
        style={{
          textAlign: "center",
          color: "#0e385d",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        FIND YOUR ROOMS, FOR YOUR ABAILITY
      </p>
      <Container>
        <Row>
          {house.map((e, index) => {
            return (
              <Col lg={4}>
                <House {...e} key={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Button>All Apartments</Button>
    </div>
  );
}

const House = ({ title, images, location, status, price, typeRoom, _id }) => {
  return (
    <div className="house-card">
      <div className="animation-img">
        <Badge variant="success">{status}</Badge>{" "}
        <img width={300} height={200} src={images} />
        <div className="card-info">
          <h3>{title}</h3>
          <div className="card-info-flex">
            <div>
              <p>
                <i className="fal fa-home-lg-alt"></i>
                {typeRoom}
              </p>

              <p>
                <i className="fal fa-map-marker-alt"></i>
                {location}
              </p>
            </div>
            <Link to={"/houses/" + _id} className="stretched-link"></Link>
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
