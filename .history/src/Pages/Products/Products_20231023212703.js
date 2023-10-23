import React from "react";
import ProductImg from "../../assets/images/laptop.jpeg";
import "./products.scss";
import Phone from "../../assets/images/phone.png";
import Web from "../../assets/images/web-screen.png";
import PJM from "../../assets/images/pjM2.png";
import PJW from "../../assets/images/pjW.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/images/tech-hub.png";

function Products() {
  return (
    <>
      <div className="col-md-12 page-wrapper">
        <center>
          <div className="col-md-12 product-container">
            <img className="" src={ProductImg} alt="Scholar" width="100%" />{" "}
            <div className="product-overlay ">
              {" "}
              <center>
                {" "}
                <h1>Empowering Growth with Seamless Technical Solutions</h1>
                <h4>Your Trusted Partner for Maximizing Impact and Results</h4>
              </center>
            </div>
          </div>
        </center>
        <div className="col-md-10 offset-md-1 mt">
          <h1 style={{ fontSize: "50px" }}>Some of Our Inspirations</h1>
          <div className="flexy mtt">
            <div className="col-md-3">
              <Link className="product1-heading mt6">Tiny.ng</Link>
              <br />
              <br />
              <p>
                Introducing Tiny.ng, the ultimate solution for transforming
                those cumbersome, lengthy URLs into sleek, concise, and
                eye-catching links! Our innovative software application
                specializes in shortening those long and unsightly web
                addresses, making them not only more visually appealing but also
                uniquely identifiable. Whether you're crafting an
                attention-grabbing advertisement banner or sharing links in a
                professional context, Tiny.ng is your secret weapon. Say goodbye
                to clunky URLs that clutter your marketing materials; with
                Tiny.ng, elegance and precision are just a click away. Make your
                online presence stand out effortlessly with Tiny.ng – your
                trusted partner in URL optimization!
              </p>
            </div>
            <div className="flexy col-md-8 offset-md-1">
              <div className="col-md-3">
                {" "}
                <img className="" src={Phone} alt="Scholar" width="100%" />{" "}
              </div>{" "}
              <div className="col-md-9">
                {" "}
                <img className="" src={Web} alt="Scholar" width="100%" />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-10 offset-md-1 mtt">
          <div className="flexy">
            <div className="flexy col-md-8">
              <div className="col-md-3">
                {" "}
                <img className="" src={PJM} alt="Scholar" width="100%" />{" "}
              </div>{" "}
              <div className="col-md-9">
                {" "}
                <img className="" src={PJW} alt="Scholar" width="100%" />{" "}
              </div>
            </div>
            <div className="col-md-3  offset-md-1">
              <a
                href="https://powerjet.ng/"
                className="product3-heading mt6"
                target="_blank"
              >
                Powerjet.ng
              </a>
              <br />
              <br />
              <p>
                PowerJet.Ng is the fastest, most reliable and simplified utility
                payment in Nigeria. It helps pay for your electricity bills
                online, from the comfort of your homes and offices, having your
                token printed out and sent to your mail or dashboard.
                Powerjet.ng has the sole purpose to bridge customers complain on
                the availability of the comfort in electricity bill/unit payment
                and ensure adequate reliable process for this need. You can send
                us a mail at{""}
                <a href="#">powerjetng@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-10 offset-md-1 mtt">
          <div className="flexy">
            <div className="col-md-3  ">
              <Link className="product2-heading mt6">FIARide</Link>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                finibus at quam quis vehicula. In faucibus nunc eu aliquam
                volutpat. Donec varius lectus egestas semper lobortis. Maecenas
                et scelerisque felis. In luctus turpis et metus accumsan
                tincidunt. Cras rutrum massa nec enim bibendum egestas. Nulla
                facilisi. Vestibulum finibus vulputate tortor vel vestibulum.
                Aenean volutpat sed est et semper. Duis vehicula aliquet arcu
                accumsan pulvinar.{" "}
              </p>
            </div>
            <div className="flexy col-md-8 offset-md-1">
              <div className="col-md-3">
                {" "}
                <img className="" src={Phone} alt="Scholar" width="100%" />{" "}
              </div>{" "}
              <div className="col-md-9">
                {" "}
                <img className="" src={Web} alt="Scholar" width="100%" />{" "}
              </div>
            </div>
          </div>
        </div>
        <Footer bg="black" logo={Logo} />
      </div>
    </>
  );
}

export default Products;
