import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Video from "../../assets/images/tech_vid.mp4";
import Logo from "../../assets/images/tech-hub.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import Switchapp from "../../assets/images/switchapp.svg";
import Silverbird from "../../assets/images/silverbird.png";
import Educare from "../../assets/images/educare.png";
import Powerjet from "../../assets/images/powerjet.png";
import Service1 from "../../assets/images/service_image1.jpeg";
import Service2 from "../../assets/images/service_image2.jpg";
import {
  EffectCards,
  Autoplay,
  Pagination,
  EffectFade,
  // Parallax,
  // Navigation,
} from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./tech-hub.scss";
import Framework from "./Framework/Framework";
function TechHub() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div id="outer" className="col-md-12">
        <div className="tech-nav col-md-10 offset-md-1">
          {" "}
          <div className=" col-md-2 tech-logo-div">
            {" "}
            <img className="tech-logo" src={Logo} alt="Scholar" width="20%" />
          </div>
          <ul className="list-inline list-unstyled ">
            <li className="list-inline-item">
              <NavLink className="tech-links cool-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="tech-links cool-link">About Us</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="tech-links cool-link">Products</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="tech-links cool-link">Careers</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="tech-links cool-link">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div id="home-top-video">
          <video
            className="viddeo "
            width="100%"
            autoplay="true"
            loop="true"
            muted="true"
            playsinline=""
            src={Video}
          ></video>
        </div>
      </div>

      <div className="frameworks-div">
        <Framework />
      </div>

      <div className="col-md-12 swipper-container flexy">
        <div className="col-md-4 offset-md-1 swipes">
          {" "}
          <div className="col-md-11 ">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              pagination={pagination}
              // eslint-disable-next-line no-undef
              modules={[EffectCards, Autoplay, Pagination]}
              className="mySwiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              // eslint-disable-next-line react/jsx-no-duplicate-props
            >
              <SwiperSlide>
                <div className="logo-slide">
                  <img className="   logo" src={Educare} alt="Scholar" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <center>
                    {" "}
                    <img className="   logo" src={Silverbird} alt="Scholar" />
                  </center>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <center>
                    {" "}
                    <img className="   logo" src={Powerjet} alt="Scholar" />
                  </center>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <center>
                    {" "}
                    <img className="   logo" src={Switchapp} alt="Scholar" />
                  </center>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider5</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="col-md-4 offset-md-1 swipes2">
          <h1>How we’ve helped other businesses</h1>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            // pagination={{
            //   clickable: true,
            // }}
            pagination={pagination}
            modules={[EffectFade, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff", height: "500px" }}>
                <h1>"</h1>
                <p>
                  Partnering with Hexxondiv Tech Hub created a better customer
                  experience by making lightning payments simple. They take care
                  of all of the backend so we can focus on creating the most
                  comfortable shoes in the world.
                </p>
                <h5>Raymond Durk</h5>
                <span>Head of Experience at Atoms</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff", height: "500px" }}>
                {" "}
                <h1>"</h1>
                <p>
                  We integrated easily with Hexxondiv Tech Hub's API to accept
                  bitcoin transactions both on- and off-chain with minimal fuss.
                </p>
                <h5>Rusty Nash</h5>
                <span>CEO of Gift Off</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff" }}>
                <h1>"</h1>
                <p>
                  Integration with Hexxondiv Tech Hub' was a snap and the
                  support we received on all aspects was outstanding.
                </p>
                <h5>Shaun Gilchris</h5>
                <span>Founder of BitcoinAverage</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff", height: "500px" }}>
                {" "}
                <h1>"</h1>
                <p>
                  Hexxondiv Tech Hub' made it possible to pay for tickets to the
                  world’s largest bitcoin event, our Bitcoin 2019 conference, in
                  bitcoin. They made it simple for everyone involved.
                </p>
                <h5>David Bailey</h5>
                <span>CEO of BTC Inc.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff", height: "500px" }}>
                {" "}
                <h1>"</h1>
                <p>
                  Partnering with Hexxondiv Tech Hub created a better customer
                  experience by making lightning payments simple. They take care
                  of all of the backend so we can focus on creating the most
                  comfortable shoes in the world.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <h1>Services</h1>
          <img className="" src={Service1} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-12">
          <h1>Dedicated Development Teams</h1>
          <p>
            Hire a team of Developers, Designers, Quality Assurance Specialists,
            DevOps Engineers, and other experts you may need to work
            hand-by-hand on your digital product.
          </p>
          <Link to="" className="link">
            View Managed Teams →
          </Link>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <img className="" src={Service2} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-12">
          <h1>Dedicated Development Teams</h1>
          <p>
            Hire a team of Developers, Designers, Quality Assurance Specialists,
            DevOps Engineers, and other experts you may need to work
            hand-by-hand on your digital product.
          </p>
          <Link to="" className="link">
            View Managed Teams →
          </Link>
        </div>
      </div>
    </>
  );
}

export default TechHub;
