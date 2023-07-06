import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./frame-works.scss";
import FW1 from "../../../assets/images/react.png";
import FW6 from "../../../assets/images/scss.png";
import FW4 from "../../../assets/images/bootstrap.svg";
import FW10 from "../../../assets/images/material-ui.jpeg";
import FW12 from "../../../assets/images/mdb.jpg";
import FW8 from "../../../assets/images/css.png";
import FW9 from "../../../assets/images/html.jpeg";
import FW3 from "../../../assets/images/carbon-design.png";
import FW7 from "../../../assets/images/php.jpg";
import FW11 from "../../../assets/images/python.jpeg";
import FW2 from "../../../assets/images/c#.png";
import FW5 from "../../../assets/images/node.png";
function FrameWorks() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <div className="framework-container  col-md-10 offset-md-1">
          {" "}
          <div className=" col-md-12 flexy flexyM">
            <div className="frames small-frames col-md-2 s3">
              <img className="   logo" src={FW3} alt="Scholar" width="50%" />
              <h6>CarbonDesign </h6>
            </div>
            <div className="frames small-frames col-md-2 s4">
              <img className="   logo" src={FW4} alt="Scholar" width="50%" />
              <h6>Bootstrap</h6>
            </div>
            <div className="frames small-frames col-md-2 s5">
              <img className="   logo" src={FW5} alt="Scholar" width="50%" />
              <h6>Nodejs</h6>
            </div>
            <div className="frames small-frames col-md-2 s6">
              <img className="   logo" src={FW6} alt="Scholar" width="50%" />
              <h6>SCSS</h6>
            </div>
            <div className="frames small-frames col-md-2 s7">
              <img className="   logo" src={FW7} alt="Scholar" width="50%" />
              <h6>PHP</h6>
            </div>
            <div className="frames small-frames col-md-2 s8">
              <img className="   logo" src={FW8} alt="Scholar" width="50%" />
              <h6>CSS</h6>
            </div>
          </div>
          <div className=" col-md-10 offset-md-2 flexy flexyM">
            <div className="frames small-frames col-md-2 s9">
              <img className="   logo" src={FW9} alt="Scholar" width="50%" />
              <h6>HTML</h6>
            </div>
            <div className="frames small-frames col-md-2 s10">
              <img className="   logo" src={FW10} alt="Scholar" width="50%" />
              <h6>Materialv Ui</h6>
            </div>
            <div className="frames small-frames col-md-2 s11">
              <img className="   logo" src={FW11} alt="Scholar" width="60%" />
              <h6>Python</h6>
            </div>
            <div className="frames small-frames col-md-2 s12">
              <img className="   logo" src={FW12} alt="Scholar" width="50%" />
              <h6>MDB</h6>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <div className="framework-container  col-md-10 offset-md-1">
          {" "}
          <div className=" col-md-12 flexy flexyM">
            <div className="frames small-frames col-md-2 s3">
              <img className="   logo" src={FW3} alt="Scholar" width="50%" />
              <h6>CarbonDesign </h6>
            </div>
            <div className="frames small-frames col-md-2 s4">
              <img className="   logo" src={FW4} alt="Scholar" width="50%" />
              <h6>Bootstrap</h6>
            </div>
            <div className="frames small-frames col-md-2 s5">
              <img className="   logo" src={FW5} alt="Scholar" width="50%" />
              <h6>Nodejs</h6>
            </div>
            <div className="frames small-frames col-md-2 s6">
              <img className="   logo" src={FW6} alt="Scholar" width="50%" />
              <h6>SCSS</h6>
            </div>
            <div className="frames small-frames col-md-2 s7">
              <img className="   logo" src={FW7} alt="Scholar" width="50%" />
              <h6>PHP</h6>
            </div>
            <div className="frames small-frames col-md-2 s8">
              <img className="   logo" src={FW8} alt="Scholar" width="50%" />
              <h6>CSS</h6>
            </div>
          </div>
          <div className=" col-md-10 offset-md-2 flexy flexyM">
            <div className="frames small-frames col-md-2 s9">
              <img className="   logo" src={FW9} alt="Scholar" width="50%" />
              <h6>HTML</h6>
            </div>
            <div className="frames small-frames col-md-2 s10">
              <img className="   logo" src={FW10} alt="Scholar" width="50%" />
              <h6>Materialv Ui</h6>
            </div>
            <div className="frames small-frames col-md-2 s11">
              <img className="   logo" src={FW11} alt="Scholar" width="60%" />
              <h6>Python</h6>
            </div>
            <div className="frames small-frames col-md-2 s12">
              <img className="   logo" src={FW12} alt="Scholar" width="50%" />
              <h6>MDB</h6>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default FrameWorks;
