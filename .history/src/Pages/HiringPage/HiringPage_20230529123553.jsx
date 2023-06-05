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
        <label for="html">
          <p>Build a project from scratch</p>
        </label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label for="css">
          <p>Scale existing project</p>
        </label>
        <br />
        <br />
        <br />
        <h5>What kind of project do you need?*</h5> <br />
        <br />
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1">
          {" "}
          <p>Mobile</p>
        </label>{" "}
        <br />
        <input type="checkbox" id="web" name="web" value="web" />
        <label for="web">
          {" "}
          <p>Web</p>
        </label>
        <br />
        <input type="checkbox" id="backend" name="backend" value="backend" />
        <label for="web">
          {" "}
          <p>Backend</p>
        </label>
        <br />
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="checkbox" />
          <div class="mydisplay"></div>
          <div class="mylabel">Checkbox label</div>
        </label>
        <label for="web">
          {" "}
          <p>Integration</p>
        </label>
        <br />
        <input type="checkbox" id="design" name="design" value="design" />
        <label for="web">
          {" "}
          <p>UI/UX design</p>
        </label>
        <br />
        <input type="checkbox" id="web" name="web" value="web" />
        <label for="web">
          {" "}
          <p>Web</p>
        </label>
        <br />
        <input type="checkbox" id="web" name="web" value="web" />
        <label for="web">
          {" "}
          <p>Web</p>
        </label>
        <br />
        <input type="checkbox" id="web" name="web" value="web" />
        <label for="web">
          {" "}
          <p>Web</p>
        </label>
        <br />
        <input type="checkbox" id="web" name="web" value="web" />
        <label for="web">
          {" "}
          <p>Web</p>
        </label>
        <br />
        <input type="checkbox" id="web" name="web" value="web" />
        <label for="web">
          {" "}
          <p>Web</p>
        </label>
        <br />
      </form>
    </div>
  );
}

export default HiringPage;
