import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="contact-footer">
              <h6>Contact us</h6>
              <p>Address: 20/F Green Road, Dhanmondi, Dhaka</p>
              <p>Email: info@themevessel.com</p>
              <p>Phone: +0477 85X6 552</p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-google"></i>
            </div>
          </Col>

          <Col lg={3}>
            <div className="gallery-footer">
              <h6>Gallery </h6>
              <img
                height={70}
                width={70}
                src="https://essblog.wpengine.com/wp-content/uploads/2018/05/flex-room-ideas-1.jpg"
              />
              <img
                height={70}
                width={70}
                src="https://essblog.wpengine.com/wp-content/uploads/2018/05/flex-room-ideas-1.jpg"
              />
              <img
                height={70}
                width={70}
                src="https://essblog.wpengine.com/wp-content/uploads/2018/05/flex-room-ideas-1.jpg"
              />
              <img
                height={70}
                width={70}
                src="https://essblog.wpengine.com/wp-content/uploads/2018/05/flex-room-ideas-1.jpg"
              />
              <img
                height={70}
                width={70}
                src="https://essblog.wpengine.com/wp-content/uploads/2018/05/flex-room-ideas-1.jpg"
              />
              <img
                height={70}
                width={70}
                src="https://essblog.wpengine.com/wp-content/uploads/2018/05/flex-room-ideas-1.jpg"
              />
            </div>
          </Col>

          <Col>
            <div className="subscribe-footer">
              <h6>Subscribe </h6>
              <input placeholder="Enter Address" /> <br />
              <Button type="button ">Subscribe</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
