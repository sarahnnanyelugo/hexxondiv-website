import React from "react";
import "./portfolio.scss";
import ProductImg from "../../assets/images/portfolio.webp";

export const Portfolio = () => {
  return (
    <>
      <div className="col-md-12 page-wrapper">
        <center>
          <div className="col-md-12 product-container">
            <img className="" src={ProductImg} alt="Scholar" width="100%" />{" "}
            <div className="product-overlay ">
              {" "}
              <h1>Empowering Growth with Seamless Technical Solutions</h1>
              <h4>Your Trusted Partner for Maximizing Impact and Results</h4>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
