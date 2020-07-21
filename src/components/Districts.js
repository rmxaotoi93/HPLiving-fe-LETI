import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Districts() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="district">
      <Container>
        <Slider {...settings}>
          <div className="popular">
            <div className="mr-2">
              <Link to="/">
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 1</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 2</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 3</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 4</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 5</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 6</p>
              </Link>
            </div>
          </div>

          <div className="popular">
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 7</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 8</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 9</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 10</p>
              </Link>
            </div>
            <div className="mr-2">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 11</p>
              </Link>
            </div>
            <div className="mr-3">
              <Link>
                <img
                  width={176}
                  height={128}
                  src="https://www.itourvn.com/images/easyblog_images/2017/hcmc_districts_overview/ho-chi-minh-city-districts-overview-district-1-quach-thi-trang-roundabout.jpg"
                />
                <p>District 12</p>
              </Link>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
}
