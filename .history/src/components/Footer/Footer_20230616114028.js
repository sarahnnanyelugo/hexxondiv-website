import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const { bg, logo } = props;
  return (
    <>
      <footer>
        <div className="col-md-12" style={{ background: bg }}>
          <div className="col-md-10 offset-md-1 flexy">
            <div className="col-md-3">
              <img className="" src={logo} alt="Scholar" width="100%" />{" "}
              <h4>SERVICES</h4>
              <ul>
                <Link to={"/tech-hub-page"}>Self-managed Teams</Link>
                <Link to={"/tech-hub-page"}>Unique user experiences</Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
