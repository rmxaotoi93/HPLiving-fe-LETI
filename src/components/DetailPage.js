import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailPage() {
  let { houseId } = useParams();
  let [house, setHouse] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/houses/${houseId}`).then((res) => {
      console.log(res.data.data);
      setHouse(res.data.data);
    });
  }, []);

  if (!house) return <></>;
  return (
    <div className="detail">
      <Container>
        <Row>
          <Col lg={7} md={7} sm={7}>
            <div className="detail-img">
              {house.images ? (
                house.images.map((e) => {
                  return (
                    <div className="detail-img">
                      <img src={e} alt="img not found" />
                    </div>
                  );
                })
              ) : (
                <div>Loading</div>
              )}
            </div>
            <div className="brief-info">
              <h3>Facility</h3>
              <div className="facility">
                {" "}
                <Row>
                  <p>
                    <i class="fas fa-fan"></i>Air Conditioner
                  </p>
                  <p>
                    <i class="far fa-wifi"></i>Wifi
                  </p>
                  <p>
                    <i class="far fa-shower"></i>Water heater
                  </p>
                </Row>
                <Row>
                  {" "}
                  <p>
                    <i class="fas fa-door-closed"></i>Fridge
                  </p>
                  <p>
                    <i class="fas fa-washer"></i>Washing machine
                  </p>
                  <p>
                    <i class="fas fa-cabinet-filing"></i>Closet
                  </p>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="room-info">
              <h1>Room info</h1>

              <div className="room-info-1">
                <Row>
                  <h6>Price: ${house.price}</h6>

                  <h6>Location: {house.location}</h6>
                </Row>
              </div>
              <div className="room-info-2">
                <Row>
                  <h6>Flat Size: {house.flatSize}</h6>
                </Row>
              </div>

              <p>Description: {house.description}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <div></div>
        </Row>
      </Container>
    </div>
  );
}
