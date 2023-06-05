import React from "react";
import ProductImg from "../../assets/images/laptop.jpeg";
import "./products.scss";
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
      <h1>Some of Our Inspirations</h1>
    </>
  );
}

export default Products;
