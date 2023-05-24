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
  Parallax,
  Navigation,
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
        <div className="col-md-6 offset-md-1 swipes2">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Autoplay]}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                "background-image":
                  "url(https://swiperjs.com/demos/images/nature-1.jpg)",
              }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 2
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 3
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 4
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle5
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  kjdiiwhiri uriuhiwuhirwurhiuhfi rbfiwurfuriufiuf
                  iwufiwhfuiwifeuhwif hbbudbhbd ubdhbdb vd dvj bv fhbv
                  vfbviubdvuyvjdhcib cuhid u fdk vhbrpijhdbjwbdiwi f
                  dbiffdbwiufhihf ibiued jopc osdk djnudjkndckd chbc j fighb
                  difidgi vbvv buvhdbuduyd dgjhbdj ducdjbcj db dhbd bhbdjcn ikdh
                  hcbdkc iocc hdiudhdhvbidbdih jd
                </p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 5
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default TechHub;
