import React from "react";
import Logo from "../../assets/images/tech-hub.png";
import "./hiring-page.scss";
function HiringPage() {
  return (
    <div className="col-md-8 offset-md-2 hire-form">
      <center>
        <img className="tech-logo" src={Logo} alt="Scholar" width="20%" />
      </center>
      <center>
        <div className="col-md-6 intro-div">
          <p>
            Thanks for your interest in hiring Chimera! Before we get started,
            we’d like to ask a few questions to better understand your business
            needs.
          </p>
        </div>
      </center>
      <h5>I want to*</h5>
      <form>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">Build a project from scratch</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label for="css">
          <h5>Scale existing project</h5>
        </label>
        <br />
      </form>
    </div>
  );
}

export default HiringPage;