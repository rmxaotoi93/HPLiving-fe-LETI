import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Gallery() {
  return (
    <div className="gallery">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="gallery-row1">
              <Row>
                <img
                  src="https://htmlguru.net/house-rent/assets/images/gallery/gallery-one.png"
                  alt="Img not found"
                ></img>
                <img
                  src="https://htmlguru.net/house-rent/assets/images/gallery/gallery-two.png"
                  alt="Img not found"
                ></img>
                <img
                  src="https://htmlguru.net/house-rent/assets/images/gallery/gallery-three.png"
                  alt="Img not found"
                ></img>

                <img
                  src="https://htmlguru.net/house-rent/assets/images/gallery/gallery-four.png"
                  alt="Img not found"
                ></img>
                <img
                  src="https://htmlguru.net/house-rent/assets/images/gallery/gallery-five.png"
                  alt="Img not found"
                ></img>
                <img
                  src="https://htmlguru.net/house-rent/assets/images/gallery/gallery-six.png"
                  alt="Img not found"
                ></img>
              </Row>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <h1>
                Our
                <br />
                Photo Gallery
              </h1>
              <h6>
                Best of our <br /> event portfolio photos
              </h6>
              <p>
                Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae nibh nisl. Cras etitikis mauris eget lorem ultricies ferme
                ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec
                rhoncus. Nam ute ultricies.
              </p>
            </div>
            <Link to="/houses/gallery">
              <Button>All photos & Video</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
