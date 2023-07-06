import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
function Footer(props) {
  const { bg, logo } = props;
  return (
    <>
      <footer>
        <div className="col-md-12 footer-container" style={{ background: bg }}>
          <center>
            <div className="col-md-4">
              {" "}
              <img
                className="col-md-8"
                src={logo}
                alt="Scholar"
                width="100%"
              />{" "}
            </div>
          </center>
          <div className="col-md-10 offset-md-1 flexy">
            <div className="col-md-3 ">
              <h4>OUR DIVISIONS</h4>
              <p>
                {" "}
                <Link to={"/tech-hub-page"} className="footer-links">
                  Hexxondiv TechHub
                </Link>
              </p>
              <p>
                {" "}
                <Link to={"/tech-hub-page"} className="footer-links">
                  Hexxondiv Agro
                </Link>
              </p>
            </div>
            <div className="col-md-3">
              <h4>SERVICES</h4>
              <p>
                {" "}
                <Link to={"/tech-hub-page"} className="footer-links">
                  Self-managed Teams
                </Link>
              </p>
              <p>
                {" "}
                <Link to={"/tech-hub-page"} className="footer-links">
                  Unique user experiences
                </Link>
              </p>
            </div>{" "}
            <div className="col-md-3 ">
              <h4>OUR PRODUCTS</h4>
              <p>
                {" "}
                <Link to={"/tech-hub-page"} className="footer-links">
                  Tiny.ng
                </Link>
              </p>
              <p>
                {" "}
                <Link to={"/tech-hub-page"} className="footer-links">
                  FIARide
                </Link>
              </p>
              <p>
                {" "}
                <Link to={"/tech-hub-page"} className="footer-links">
                  Powerjet.ng
                </Link>
              </p>
            </div>
            <div className="col-md-3 ">
              <h4>CONTACT US</h4>
              <p>
                {" "}
                <a href={"/tech-hub-page"} className="footer-links">
                  hexxondiv@gmail.com
                </a>
              </p>
              <small>08068122576</small>
              <ul
                className="list-unstyled list-inline"
                style={{ marginTop: "25px" }}
              >
                <li className="list-inline-item">
                  <i class="icofont-facebook"></i>
                </li>
                <li className="list-inline-item">
                  <i class="icofont-linkedin"></i>
                </li>
                <li className="list-inline-item">
                  <i class="icofont-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flexy">
            <p style={{ flexGrow: 1 }}>
              {" "}
              @ hexxondiv global services || All rights reserved
            </p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
