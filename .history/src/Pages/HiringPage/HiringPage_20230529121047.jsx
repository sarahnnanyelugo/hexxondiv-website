import React from "react";
import Logo from "../../assets/images/tech-hub.png";

function HiringPage() {
  return (
    <div className="col-md-8 offset-md-2">
      <center>
        <img className="tech-logo" src={Logo} alt="Scholar" width="20%" />
      </center>
      <center>
        <div className="col-md-10">
          <p>
            Thanks for your interest in hiring Chimera! Before we get started,
            we’d like to ask a few questions to better understand your business
            needs.
          </p>
        </div>
      </center>
      <h5>I want to*</h5>
      <form><input type="radio" id="html" name="fav_language" value="HTML" />
<label for="html">HTML</label><br>
<input type="radio" id="css" name="fav_language" value="CSS" /></form>
    </div>
  );
}

export default HiringPage;
