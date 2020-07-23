import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Allgallery(props) {
  const [house, setHouse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        process.env.REACT_APP_SERVER + "/houses/gallery"
      );
      const house = await data.json();
      console.log("img-galeery", house);
      console.log(house.data);
      setHouse(house.data);
    }
    fetchData();
  }, []);
  if (!house) return <div>Loading</div>;
  return (
    <div className="all-gallery">
      <h1>Photo Gallery</h1>
      <Container>
        <Row>
          {house.map((e) => {
            return e ? (
              e.map((item) => {
                return (
                  <Col lg={3} md={4} sm={6} xs={6}>
                    <img src={item} />
                  </Col>
                );
              })
            ) : (
              <div>Not found</div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
