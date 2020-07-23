import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rheostat from "rheostat";

export default function HouseList() {
  const [house, setHouse] = useState([]);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://localhost:3001/houses?minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      const house = await data.json();
      // console.log("house listt ", house.data);
      setHouse(house.data);
    }
    fetchData();
  }, [minPrice, maxPrice]);

  const filterPrice = (e) => {
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);
  };
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
        <Rheostat
          min={1}
          max={10000}
          values={[minPrice, maxPrice]}
          onChange={filterPrice}
        />
        <p>
          Min Price {minPrice} <br /> Max Price {maxPrice}
        </p>
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
        {status === "Active" ? (
          <Badge variant="success">{status}</Badge>
        ) : (
          <Badge variant="danger">{status}</Badge>
        )}
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
