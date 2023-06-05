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
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="mobile" value="mobile" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Mobile</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="web" value="web" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Web</p>
          </div>
        </label>
        <label class="mylabel">
          <input
            class="myinput"
            type="checkbox"
            name="backend"
            value="backend"
          />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Backend</p>
          </div>
        </label>
        <label class="mylabel">
          <input
            class="myinput"
            type="checkbox"
            name="integration
"
            value="integration
"
          />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="checkbox" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="checkbox" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="checkbox" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="checkbox" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="checkbox" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="checkbox" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
      </form>
    </div>
  );
}

export default HiringPage;
