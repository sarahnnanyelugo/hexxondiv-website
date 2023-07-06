import React from "react";

function Footer(props) {
  const [bg, logo] = props;
  return (
    <>
      <footer>
        <div className="col-md-12" style={{ background: bg }}>
          <div className="col-md-10 offset-md-1 flexy">
            <div className="col-md-3">
              <img className="" src={logo} alt="Scholar" width="100%" />{" "}
              <h4>SERVICES</h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
