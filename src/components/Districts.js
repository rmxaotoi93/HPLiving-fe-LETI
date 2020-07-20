import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Districts() {
  return (
    <div className="district">
      <h2>Popular Looking</h2>
      <Container>
        <Row>
          <Col lg={2} md={3} sm={4} xs={6}>
            <div className="popular">
              <Link to="#">
                {" "}
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
              </Link>
              <p>District 1</p>
            </div>
          </Col>

          <Col lg={2} md={3} sm={4} xs={6}>
            <div className="popular">
              <img
                width={176}
                height={128}
                src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
              />
              <p>District 1</p>
            </div>
          </Col>

          <Col lg={2} md={3} sm={4} xs={6}>
            <div className="popular">
              <img
                width={176}
                height={128}
                src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
              />
              <p>District 1</p>
            </div>
          </Col>

          <Col lg={2} md={3} sm={4} xs={6}>
            <div className="popular">
              <img
                width={176}
                height={128}
                src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
              />
              <p>District 1</p>
            </div>
          </Col>

          <Col lg={2} md={3} sm={4} xs={6}>
            <div className="popular">
              <img
                width={176}
                height={128}
                src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
              />
              <p>District 1</p>
            </div>
          </Col>

          <Col lg={2} md={3} sm={4} xs={6}>
            <div className="popular">
              <img
                width={176}
                height={128}
                src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
              />
              <p>District 1</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
