import React, { useState } from "react";
import "./tech-hub.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import HRDashboard from "../../../assets/images/dash1.png";
import HRDashboard3 from "../../../assets/images/dash2.png";
import HRDashboard2 from "../../../assets/images/dash3.svg";
import HRDashboard4 from "../../../assets/images/dash4.svg";
import Icofont from "react-icofont";

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
        <img
          className=" tech-img"
          src={updateImage}
          alt="Scholar"
          width="100%"
        />
      </div>
      <div className="col-md-5 offset-md-">
        {" "}
        <div className="col-md-11">
          {" "}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => displayImageImage()}>
                <h6>
                  <span>
                    <i class="icofont-web"></i>
                  </span>
                  Web Applications{" "}
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Streamline time and attendance tracking with our HRM efficient
                  system. Accurately
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={() => displayImageImage2()}>
                <h6>
                  <span>
                    <i class="icofont-search-job"></i>
                  </span>{" "}
                  Recruitment and Training
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Transform the way you manage performance with our powerful
                  software solution. From goal setting and
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => displayImageImage3()}>
                <h6>
                  <span>
                    <i class="icofont-black-board"></i>
                  </span>
                  Tutorials{" "}
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  educare HR Manager simplifies and empowers the <br />
                  management
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="3">
              <Accordion.Header onClick={() => displayImageImage4()}>
                <h6>
                  <span>
                    <i class="icofont-group-students"></i>
                  </span>
                  Internships
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>educare HR Manager simplifies and empowers the manage</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default TechHub;
