import React from "react";
import ProductImg from "../../assets/images/laptop.jpeg";
import "./products.scss";
import Phone from "../../assets/images/phone.png";
import Web from "../../assets/images/web-screen.png";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <center>
        <div className="col-md-12 product-container">
          <img className="" src={ProductImg} alt="Scholar" width="100%" />{" "}
          <div className="product-overlay">
            {" "}
            <h1>Empowering Growth with Seamless Technical Solutions</h1>
            <h4>Your Trusted Partner for Maximizing Impact and Results</h4>
          </div>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 mt">
        <h1>Some of Our Inspirations</h1>
        <div className="flexy">
          <div className="col-md-3">
            <h4 className="product1-heading mt6">
              <Link>Tiny.ng</Link>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              finibus at quam quis vehicula. In faucibus nunc eu aliquam
              volutpat. Donec varius lectus egestas semper lobortis. Maecenas et
              scelerisque felis. In luctus turpis et metus accumsan tincidunt.
              Cras rutrum massa nec enim bibendum egestas. Nulla facilisi.
              Vestibulum finibus vulputate tortor vel vestibulum. Aenean
              volutpat sed est et semper. Duis vehicula aliquet arcu accumsan
              pulvinar.{" "}
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
    </>
  );
}

export default Products;
