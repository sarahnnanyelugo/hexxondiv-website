import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Video from "../../assets/images/tech_vid.mp4";
import Logo from "../../assets/images/tech-hub.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
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
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              // eslint-disable-next-line react/jsx-no-duplicate-props
            >
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider1</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider2</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider3</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider4</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider5</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider6</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider7</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-slide">
                  <h4>slider8</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="col-md-6 offset-md-1"></div>
    </>
  );
}

export default TechHub;