import React, { useState } from "react";
import "./tech-hub.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import HRDashboard from "../../../assets/images/mobile-app.jpg";
import HRDashboard3 from "../../../assets/images/dash3.jpg";
import HRDashboard2 from "../../../assets/images/dash4.jpg";
import HRDashboard4 from "../../../assets/images/ui.png";

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
                  Custom Software Development
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  From concept to execution, we design and develop tailor-made
                  software solutions that meet your specific business needs.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={() => displayImageImage2()}>
                <h6>
                  <span>
                    <i class="icofont-search-job"></i>
                  </span>{" "}
                  Mobile App Development
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Harness the power of the mobile ecosystem with beautifully
                  crafted and high-performing mobile apps for iOS and Android.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => displayImageImage3()}>
                <h6>
                  <span>
                    <i class="icofont-black-board"></i>
                  </span>
                  Web Development
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Whether it's a simple mobile responsive website or a complex
                  web application, we create stunning digital experiences that
                  engage and convert.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="3">
              <Accordion.Header onClick={() => displayImageImage4()}>
                <h6>
                  <span>
                    <i class="icofont-group-students"></i>
                  </span>
                  UI/UX Design
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Our talented designers ensure your software not only works
                  flawlessly but also offers a delightful user experience.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="4">
              <Accordion.Header onClick={() => displayImageImage4()}>
                <h6>
                  <span>
                    <i class="icofont-group-students"></i>
                  </span>
                  Consulting and Strategy
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Have an idea but not sure where to start? We provide expert
                  consulting to shape your vision into a robust project plan.
                  <Link to={"/contact"}> Contact us today</Link>
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
