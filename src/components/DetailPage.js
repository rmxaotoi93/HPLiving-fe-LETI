import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "./Review";
import UpdateHouse from "./UpdateHouse";

export default function DetailPage() {
  let { houseId } = useParams();
  let [house, setHouse] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/houses/${houseId}`)
      .then((res) => {
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
                house.images.map((e, index) => {
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
                  <h6>Contact: 0224373924</h6>
                </Row>
              </div>

              <p>Description: {house.description}</p>
              <div className="handle-btn">
                <Button className="btn btn-success" onClick={handleShow}>
                  Update
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Review />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update House</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateHouse houseId={houseId} handleClose={handleClose} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
