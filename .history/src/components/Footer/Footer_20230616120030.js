import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
function Footer(props) {
  const { bg, logo } = props;
  return (
    <>
      <footer>
        <div className="col-md-12 footer-container" style={{ background: bg }}>
          <div className="col-md-10 offset-md-1 flexy">
            <div className="col-md-3">
              <img className="col-md-8" src={logo} alt="Scholar" width="100%" />{" "}
              <h4>SERVICES</h4>
              <p>
                {" "}
                <Link to={"/tech-hub-page"}>Self-managed Teams</Link>
              </p>
              <p>
                {" "}
                <Link to={"/tech-hub-page"}>Unique user experiences</Link>
              </p>
            </div>{" "}
            <div className="col-md-3">
              <h4>OUR DIVISIONS</h4>
              <p>
                {" "}
                <Link to={"/tech-hub-page"}>Hexxondiv TechHub</Link>
              </p>
              <p>
                {" "}
                <Link to={"/tech-hub-page"}>Hexxondiv Agro</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
