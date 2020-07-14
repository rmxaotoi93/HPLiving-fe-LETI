import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
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
    <div>
      <h1>House list</h1>
      <Container>
        <Row>
          {house.map((e) => {
            return (
              <Col lg={4}>
                <House {...e} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

const House = ({ title, images, location, status, price, typeRoom }) => {
  return (
    <div className="house-card">
      <div className="animation-img">
        <Badge variant="success">{status}</Badge>{" "}
        <img width={300} height={200} src={images} />
        <div className="card-info">
          <h3>{title}</h3>
          <div className="card-info-flex">
            <div>
              <p>{typeRoom}</p>

              <p>{location}</p>
            </div>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
