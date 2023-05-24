import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Video from "../../assets/images/tech_vid.mp4";
import Logo from "../../assets/images/tech-hub.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import "./tech-hub.scss";
import Framework from "./Framework/Framework";
function TechHub() {
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
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default TechHub;
