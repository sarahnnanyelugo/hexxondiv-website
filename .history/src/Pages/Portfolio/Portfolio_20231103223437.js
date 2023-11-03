import React from "react";
import "./portfolio.scss";
import ProductImg from "../../assets/images/portfolio2.webp";
import Physics from "../../assets/images/physics.png";
import Vocter from "../../assets/images/vocter.png";
import Magetek from "../../assets/images/magetek.png";
import Cage from "../../assets/images/cage.png";
import SFS from "../../assets/images/sfs.png";
import VIN from "../../assets/images/vin.png";
import Bento from "../../assets/images/bento.png";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../components/Footer/Footer";
import CountUp from "react-countup";
import Logo from "../../assets/images/tech-hub.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import Switchapp from "../../assets/images/switchapp.svg";
import Silverbird from "../../assets/images/silverbird.png";
import Educare from "../../assets/images/educare.png";
import Powerjet from "../../assets/images/powerjet.png";
// import "../../../tech-hub.scss";

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
export const Portfolio = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
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
      <div className="col-md-10 offset-md-1 port-para">
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
              <div className="col-md-6 preview">
                {" "}
                <img className="" src={Physics} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1 port-details">
                <h4>PHYSICS DEPARTMENT (Uniport)</h4>
                <p>
                  Behold the digital masterpiece that is the Physics Department
                  website for the University of Port Harcourt, a shining gem in
                  our portfolio. Our mission was to bring the wonders of the
                  academic world to life, and we achieved just that. With a keen
                  eye for aesthetics and a passion for precision, we
                  meticulously crafted a virtual realm where knowledge and
                  innovation converge. This website stands as a beacon of
                  academic excellence, seamlessly blending captivating
                  aesthetics with a treasure trove of information. From the
                  elegance of its design to the depth of its content, it's a
                  testament to our commitment to delivering outstanding digital
                  solutions. Explore the universe of knowledge with us as we
                  proudly present this remarkable project, a testament to our
                  dedication to empowering educational institutions through
                  cutting-edge technology.
                </p>
                <Link to={"#"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6 preview">
                {" "}
                <img className="" src={Vocter} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <h4>IJVOCTER</h4>
                <p>
                  At Hexxondiv TechHub, we take pride in the artistry of
                  technology, and our collaboration with IJVOCTER, a
                  distinguished publishing house for academic journals, truly
                  embodies this ethos. The IJVOCTER website is a testament to
                  the fusion of aesthetics and information, where the world of
                  academia seamlessly converges with the world of design. Our
                  design philosophy for IJVOCTER was simple yet profound: create
                  a virtual haven where the pursuit of academic excellence feels
                  as captivating as it is enlightening. The website exudes
                  sophistication, from its intuitive navigation to its visually
                  engaging layouts, allowing visitors to effortlessly immerse
                  themselves in a world of scholarly insight.
                </p>
                <Link to={"https://ijvocter.com/"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6 preview">
                {" "}
                <img className="" src={Magetek} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <h4>MAGYTEK LIMITED</h4>
                <p>
                  At Hexxondiv TechHub, we take immense pride in our journey
                  with Magytek Limited, a visionary leader in water treatment
                  solutions. Together, we embarked on a transformative mission
                  to bring clean and pure water to the forefront of Nigeria's
                  landscape. With a wealth of experience in reverse osmosis
                  systems, Magytek Limited emerged as a testament to our
                  collaborative spirit and unwavering commitment to excellence.
                  Through tireless dedication and cutting-edge technology, we
                  crafted a website that reflects Magytek Limited's unwavering
                  commitment to innovation, quality, and sustainability. As you
                  explore the Magytek Limited website in our portfolio, you'll
                  witness a harmonious blend of aesthetics and functionality.
                  Our collaboration has not only elevated their online presence
                  but has also empowered them to reach a wider audience,
                  spreading the message of water purification and its vital role
                  in safeguarding health and wellbeing.
                </p>
                <Link to={"https://www.magyteklimited.com/"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6 preview">
                {" "}
                <img className="" src={Cage} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <h4>PROJECT CAGE</h4>
                <p>
                  ProjectCage is a cutting-edge learning and project development
                  platform, meticulously crafted by Hexxondiv TechHub for one of
                  our valued clients. This vibrant platform serves as a
                  nurturing ground for students and technology enthusiasts,
                  where they embark on a journey into the realms of Robotics and
                  Artificial Intelligence. At Hexxondiv TechHub, we thrive on
                  the challenge of turning dreams into reality, and ProjectCage
                  embodies this spirit perfectly. From the ground up, we have
                  developed awe-inspiring projects that inspire and empower the
                  minds of future technologists. Join us in celebrating this
                  collaboration where we've brought the future of education and
                  technology together, one project at a time.
                </p>
                <Link to={"https://projectcage.com/"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6 preview">
                {" "}
                <img className="" src={SFS} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <h4>SFS FUND</h4>
                <p>
                  Welcome to the world of seamless investing, where financial
                  innovation meets user-friendly technology. Introducing
                  sfsfund.com, a shining gem in our portfolio at Hexxondiv
                  TechHub. This cutting-edge platform was meticulously crafted
                  to empower investors to participate effortlessly in the SFS
                  Fixed Income Fund. With no manual hurdles or human
                  intervention required, it transforms the investment journey
                  into a hassle-free experience. Since its inception,
                  sfsfund.com has consistently delivered on its promise, paying
                  out dividends to unit holders on a quarterly basis. We take
                  immense pride in bringing this vision to life for our client,
                  ensuring that their commitment to excellence is matched by our
                  dedication to creating exceptional digital solutions.
                </p>
                <Link to={"https://sfsfund.com/"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6 preview">
                {" "}
                <img className="" src={VIN} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <h4>VIN PUBLISHING</h4>
                <p>
                  VinPublishing; a digital haven for the world of academia! At
                  Hexxondiv TechHub, we take immense pride in presenting one of
                  our most illustrious creations, VinPublishing. Designed and
                  meticulously crafted for our esteemed client, VinPublishing
                  stands as a testament to our commitment to innovation and
                  excellence. This dynamic platform serves as a gateway to a
                  world of knowledge, where academic journals find their digital
                  home. With user-friendly interfaces, seamless navigation, and
                  a commitment to enhancing the scholarly experience,
                  VinPublishing exemplifies our dedication to pushing boundaries
                  in the digital realm. Join us on a journey where information
                  meets elegance, and research finds its digital sanctuary.
                </p>
                <Link to={"https://vinpublishing.com/"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-8 offset-md-2 flexy portfolio-section">
              <div className="col-md-6 preview">
                {" "}
                <img className="" src={Bento} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <h4>BENTO DELIVAZ</h4>
                <p>
                  Step into a world of seamless convenience with the
                  groundbreaking online purchasing software crafted by Hexxondiv
                  TechHub for one of our esteemed clients. At Hexxondiv TechHub,
                  we take immense pride in showcasing a project that we've
                  skillfully developed to revolutionize the way people shop.
                  Imagine a platform that effortlessly integrates your favorite
                  food vendors, trusted pharmacy outlets, and well-stocked
                  supermarkets, all within a single digital realm. Say goodbye
                  to the hassle of commuting, queues, and endless search for
                  your preferred vendors. With our innovative solution, users
                  can now make purchases from the comfort of their homes,
                  ensuring that every shopping experience is not just convenient
                  but also tailored to their preferences. Join us as we
                  celebrate this remarkable achievement in collaboration with
                  our client, and together, we redefine the future of shopping,
                  bringing a world of choices right to your fingertips.
                </p>
                <Link to={"#"} target="_blank">
                  Visit Site
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-md-12 swipper-container flexy">
        <div className="col-md-4 offset-md-1 swipes col-12 col-12">
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
      <div className="col-md-10 offset-md-1 stats-div">
        <center>
          {" "}
          <h1>Hexxondiv Tech Hub in numbers</h1>
        </center>
        <div className="flexy">
          {" "}
          <div className="col-md-4 stat">
            <center>
              {" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={30}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <p>Customers served</p>
            </center>
          </div>{" "}
          <div className="col-md-4 stat">
            <center>
              {" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <p>Projects completed</p>
            </center>
          </div>{" "}
          <div className="col-md-4 stat">
            <center>
              {" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={5.0}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix=".0"
                  enableScrollSpy={true}
                />
              </h1>
              <p>Ratings</p>
            </center>
          </div>
        </div>
      </div>
      <Footer bg="#092540" />
    </>
  );
};
