import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Card() {
  return (
    <div className="card">
      <Container>
        <Row>
          <Col>
            <div className="animation-img">
              <img
                width={300}
                height={200}
                src="http://butterfly.9teespace.com/images/image-replace/room/room-01.jpg"
              />
              <div className="card-info">
                <h3>Title</h3>
                <div className="card-info-flex">
                  <div>
                    <p>Type</p>
                    <p>Area</p>
                    <p>Location</p>
                  </div>
                  <p>Price</p>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="animation-img">
              <img
                width={300}
                height={200}
                src="http://butterfly.9teespace.com/images/image-replace/room/room-01.jpg"
              />
              <div className="card-info">
                <h3>Title</h3>
                <div className="card-info-flex">
                  <div>
                    <p>Type</p>
                    <p>Area</p>
                    <p>Location</p>
                  </div>
                  <p>Price</p>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="animation-img">
              <img
                width={300}
                height={200}
                src="http://butterfly.9teespace.com/images/image-replace/room/room-01.jpg"
              />
              <div className="card-info">
                <h3>Title</h3>
                <div className="card-info-flex">
                  <div>
                    <p>Type</p>
                    <p>Area</p>
                    <p>Location</p>
                  </div>
                  <p>Price</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
