import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import Logo from "../../assets/images/tech-logo.png";

function Footer(props) {
  // const { bg } = props;
  return (
    <>
      <footer>
        <div className="col-md-12 footer-container">
          <center>
            <div className="col-md-4 col-4">
              {" "}
              <img
                className="col-md-8 footer-logo"
                src={Logo}
                alt="Scholar"
                width="100%"
              />{" "}
            </div>
          </center>
          <div className="col-md-10 offset-md-1 flexy mt7">
            <div className="col-md-6 flexy flexyM">
              {" "}
              <div className="col-md-6 services">
                <h4>SERVICES</h4>
                <p> Custom Software Development</p>
                <p> Mobile App Development</p> <p> Web Development</p>{" "}
                <p> UI/UX Design</p> <p> Consulting and Strategy</p>
              </div>
              <div className="col-md-6 ">
                <h4>POPULAR WORKS</h4>
                <p>
                  {" "}
                  <Link
                    to={"https://sfsfund.com/"}
                    className="footer-links"
                    target="_blank"
                  >
                    SFS Fund
                  </Link>
                </p>{" "}
                <p>
                  {" "}
                  <Link to={"/"} className="footer-links">
                    Bento Delivaz
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link
                    to={"https://vinpublishing.com/"}
                    className="footer-links"
                    target="_blank"
                  >
                    VinPublishing
                  </Link>
                </p>{" "}
                <p>
                  {" "}
                  <Link
                    to={"https://www.magyteklimited.com/"}
                    className="footer-links"
                    target="_blank"
                  >
                    Magytek Limited
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link to={"/"} className="footer-links">
                    Physics Department (Uniport)
                  </Link>
                </p>{" "}
              </div>{" "}
            </div>
            <div className="col-md-6 flexy flexyM">
              {" "}
              <div className="col-md-6 col-7">
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
              <div className="col-md-6 col-5 ">
                <h4>CONTACT US</h4>
                <p>
                  {" "}
                  <a href={"/tech-hub-page"} className="footer-links">
                    hexxondiv@gmail.com
                  </a>
                </p>
                <a href="#" className="footer-links">
                  08068122576
                </a>
                <ul
                  className="list-unstyled list-inline"
                  style={{ marginTop: "25px" }}
                >
                  <li className="list-inline-item">
                    <a href="#" target="_blank" className="footer-links">
                      {" "}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" className="footer-links">
                      {/* {" "}
                    <i class="icofont-linkedin"></i> */}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" className="footer-links">
                      {/* {" "}
                    <i class="icofont-instagram"></i> */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="flexy col-md-10 offset-md-1"
            style={{ borderTop: "solid 1px grey", paddingTop: "30px" }}
          >
            <p style={{ flexGrow: 1 }}>
              {" "}
              @ hexxondiv global services || All rights reserved
            </p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#" className="footer-links">
                  Terms
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="footer-links">
                  Privacy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="footer-links">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
