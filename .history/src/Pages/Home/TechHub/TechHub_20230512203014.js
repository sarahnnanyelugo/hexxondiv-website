import React, { useState } from "react";
import "./tech-hub.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import HRDashboard from "../../../assets/images/dash1.png";
import HRDashboard3 from "../../../assets/images/dash2.png";
import HRDashboard2 from "../../../assets/images/dash3.svg";
import HRDashboard4 from "../../../assets/images/dash4.svg";

const TechHub = () => {
  const [updateImage, setUpdateImage] = useState(HRDashboard);
  function displayImageImage() {
    setUpdateImage(HRDashboard);
  }
  function displayImageImage2() {
    setUpdateImage(HRDashboard2);
  }
  function displayImageImage3() {
    setUpdateImage(HRDashboard3);
  }
  function displayImageImage4() {
    setUpdateImage(HRDashboard4);
  }
  return (
    <div className="dashboard-accordion-container flexy col-md-12 ">
      <div className="col-md-7 dashboard-display">
        {" "}
        <img className="   logo" src={updateImage} alt="Scholar" width="100%" />
      </div>
      <div className="col-md-5">
        <div className="col-md-11">
          {" "}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => displayImageImage()}>
                <h6>Optimize your time and attendance</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Streamline time and attendance tracking with our HRM <br />
                  efficient system. Accurately monitor work hours, manage time
                  <br /> off requests, and access error-free reports, all while
                  freeing <br />
                  up time for increased productivity.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={() => displayImageImage2()}>
                <h6> Enhanced perfomace management at its best</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Transform the way you manage performance with our
                  <br /> powerful software solution. From goal setting and
                  appraisals
                  <br /> to feedback and development plans, our Performance
                  <br /> Management module empowers you to drive employee
                  <br /> engagement, productivity, and growth.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => displayImageImage3()}>
                <h6>Redefine the way your team learns and develops</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  educare HR Manager simplifies and empowers the <br />
                  management and delivery of a quality learning experience to{" "}
                  <br />
                  your workforce. Our learning and development system
                  <br /> offers dynamic learning opportunities for all teams,
                  featuring <br />
                  engaging content and virtual training.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => displayImageImage4()}>
                <h6>Redefine the way your team learns and develops</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  educare HR Manager simplifies and empowers the <br />
                  management and delivery of a quality learning experience to{" "}
                  <br />
                  your workforce. Our learning and development system
                  <br /> offers dynamic learning opportunities for all teams,
                  featuring <br />
                  engaging content and virtual training.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default TechHub;
