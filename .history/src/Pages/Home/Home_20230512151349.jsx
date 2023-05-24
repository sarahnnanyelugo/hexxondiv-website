import React from "react";
import "./home.scss";
import Logo from "../../assets/images/logo.jpeg";
function Home() {
  return (
    <>
      <div className="col-md-8 offset-md-2 home-container flexy">
        <div className="col-md-6">
          <h1>Streamlining Operations and Driving Growth.</h1>
          <p>
            Hire a team of Developers, Designers, Quality Assurance Specialists,
            DevOps Engineers, and other experts you may need to work
            hand-by-hand on your digital product.
          </p>
          <button>Get started</button>
        </div>
        <div className="col-md-6">
          {" "}
          <img className="   logo" src={Logo} alt="Scholar" width="50%" />
        </div>
      </div>
    </>
  );
}

export default Home;
