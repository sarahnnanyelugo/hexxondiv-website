import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Video from "../../assets/images/tech_vid.mp4";
import Logo from "../../assets/images/tech-hub.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";

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
              <div style={{ backgroundColor: "#fff" }}>
                <h1>"</h1>
                <p>
                  Partnering with Hexxondiv Tech Hub created a better customer
                  experience by making lightning payments simple. They take care
                  of all of the backend so we can focus on creating the most
                  comfortable shoes in the world.
                </p>
                <h5>Raymond Durk</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff" }}>
                {" "}
                2 <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff" }}>
                3 <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff" }}>
                {" "}
                4 <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ backgroundColor: "#fff" }}>
                {" "}
                5 <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default TechHub;
