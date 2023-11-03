import React from "react";
import "./portfolio.scss";
import ProductImg from "../../assets/images/portfolio2.webp";
import Physics from "../../assets/images/physics.png";
import Vocter from "../../assets/images/vocter.png";
import Magetek from "../../assets/images/magetek.png";
import Cage from "../../assets/images/cage.png";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../components/Footer/Footer";

export const Portfolio = () => {
  return (
    <>
      <div className="col-md-12 page-wrapper">
        <center>
          <div className="col-md-12 product-container2">
            <img className="" src={ProductImg} alt="Scholar" width="100%" />{" "}
            <div className="product-overlay2 offset-md-1">
              {" "}
              <h1>OUR PORTFOLIO</h1>
              {/* <h4>Your Trusted Partner for Maximizing Impact and Results</h4> */}
            </div>
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 mtt" style={{ padding: "80px 0" }}>
        {" "}
        <center>
          <h1>OUR PORTFOLIO</h1>
          <p>
            Welcome to the heart of innovation, where possibilities become
            realities and where Hexxondiv Tech Hub brings dreams to life through
            code. Our journey began with a fervent belief in the transformative
            power of technology, and today, we stand at the forefront of a
            digital revolution. Step into our world, where passion meets
            purpose, and witness how we've been reshaping industries and
            improving lives, one line of code at a time. Explore our portfolio,
            and discover the future we're crafting – a future defined by
            innovation, excellence, and the relentless pursuit of a better
            digital world
          </p>
        </center>
      </div>
      <div className="col-md-12 portfolio-slide">
        {" "}
        <Carousel>
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6">
                {" "}
                <img className="" src={Physics} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1 mt">
                <p>
                  Welcome to the heart of innovation, where possibilities become
                  realities and where Hexxondiv Tech Hub brings dreams to life
                  through code. Our journey began with a fervent belief in the
                  transformative power of technology, and today, we stand at the
                  forefront of a digital revolution. Step into our world, where
                  passion meets purpose, and witness how we've been reshaping
                  industries and improving lives, one line of code at a time.
                  Explore our portfolio, and discover the future we're crafting
                  – a future defined by innovation, excellence, and the
                  relentless pursuit of a better digital world
                </p>
                <Link to={"#"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6">
                {" "}
                <img className="" src={Vocter} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1 mt">
                <p>
                  Welcome to the heart of innovation, where possibilities become
                  realities and where Hexxondiv Tech Hub brings dreams to life
                  through code. Our journey began with a fervent belief in the
                  transformative power of technology, and today, we stand at the
                  forefront of a digital revolution. Step into our world, where
                  passion meets purpose, and witness how we've been reshaping
                  industries and improving lives, one line of code at a time.
                  Explore our portfolio, and discover the future we're crafting
                  – a future defined by innovation, excellence, and the
                  relentless pursuit of a better digital world
                </p>
                <Link to={"#"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6">
                {" "}
                <img className="" src={Magetek} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1 mt">
                <p>
                  Welcome to the heart of innovation, where possibilities become
                  realities and where Hexxondiv Tech Hub brings dreams to life
                  through code. Our journey began with a fervent belief in the
                  transformative power of technology, and today, we stand at the
                  forefront of a digital revolution. Step into our world, where
                  passion meets purpose, and witness how we've been reshaping
                  industries and improving lives, one line of code at a time.
                  Explore our portfolio, and discover the future we're crafting
                  – a future defined by innovation, excellence, and the
                  relentless pursuit of a better digital world
                </p>
                <Link to={"#"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6">
                {" "}
                <img className="" src={Cage} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-6 mt">
                <p>
                  Welcome to the heart of innovation, where possibilities become
                  realities and where Hexxondiv Tech Hub brings dreams to life
                  through code. Our journey began with a fervent belief in the
                  transformative power of technology, and today, we stand at the
                  forefront of a digital revolution. Step into our world, where
                  passion meets purpose, and witness how we've been reshaping
                  industries and improving lives, one line of code at a time.
                  Explore our portfolio, and discover the future we're crafting
                  – a future defined by innovation, excellence, and the
                  relentless pursuit of a better digital world
                </p>
                <Link to={"#"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer bg="#092540" />
    </>
  );
};
