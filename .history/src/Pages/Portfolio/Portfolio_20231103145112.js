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
      <div className="col-md-10 offset-md-1 m">
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
              <div className="col-md-5 offset-md-1">
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
      <Footer bg="#092540" />
    </>
  );
};
