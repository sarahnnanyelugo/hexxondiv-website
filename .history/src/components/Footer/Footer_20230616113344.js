import React from "react";

function Footer(props) {
  const [bg, logo] = props;
  return (
    <>
      <footer>
        <div className="flexy col-md-12" style={{ background: bg }}></div>
      </footer>
    </>
  );
}

export default Footer;
