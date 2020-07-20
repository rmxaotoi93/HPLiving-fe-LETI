import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      {" "}
      <h1>
        We Are Available <br /> For You 24/7
      </h1>
      <p>OUR ONLINE SUPPORT SERVICE IS ALWAYS 24 HOURS</p>
      <Container>
        <Row>
          <Col lg={6}>
            <div>
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC871wKM6aoCLSV_pT3xBVsYzNGXaDh7Pw&q=121King+St,Melbourne+VIC+3000,Australia"></iframe>
            </div>
          </Col>
          <Col lg={6}>
            <Row style={{ marginTop: 15 }}>
              <Col className="footer-info">
                <div className="flex-footer">
                  {" "}
                  <i className="fa fa-address-book"></i>
                  <h5>Address</h5>
                </div>
                <p>112/B - Road 121, King/St Melbourne Australia</p>
              </Col>
              <Col className="footer-info">
                <div className="flex-footer">
                  <i className="fa fa-envelope"></i>
                  <h5>Mail</h5>
                </div>
                <p>yourmail@domain.com houserent@domain.com</p>
              </Col>
            </Row>
            <Row>
              <Col className="footer-info">
                <div className="flex-footer">
                  <i className="fa fa-phone-square"></i>
                  <h5>Call</h5>
                </div>
                <p>+99 0215469875 666 35874692050</p>
              </Col>
              <Col className="footer-info">
                <div className="flex-footer">
                  <i className="fa fa-user-circle"></i>
                  <h5>Social Account</h5>
                </div>
                <div style={{ display: "flex" }}>
                  <a href="#">
                    {" "}
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="fab fa-google"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="footer-end">
        <p>LETI ©2020</p>
        <p style={{ color: "#FCA22A", fontWeight: 600 }}>FinalProject</p>
      </div>
    </div>
  );
}
