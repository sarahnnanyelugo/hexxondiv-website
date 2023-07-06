import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./frame-works.scss";
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
        <div className=" col-md-12 flexy flexyM">
          <div className="frames small-frames col-md-2 s3" ref={blueRef3}>
            <img className="   logo" src={FW3} alt="Scholar" width="50%" />
            <h6>CarbonDesign </h6>
          </div>
          <div className="frames small-frames col-md-2 s4" ref={blueRef4}>
            <img className="   logo" src={FW4} alt="Scholar" width="50%" />
            <h6>Bootstrap</h6>
          </div>
          <div className="frames small-frames col-md-2 s5" ref={blueRef5}>
            <img className="   logo" src={FW5} alt="Scholar" width="50%" />
            <h6>Nodejs</h6>
          </div>
          <div className="frames small-frames col-md-2 s6" ref={blueRef6}>
            <img className="   logo" src={FW6} alt="Scholar" width="50%" />
            <h6>SCSS</h6>
          </div>
          <div className="frames small-frames col-md-2 s7" ref={blueRef7}>
            <img className="   logo" src={FW7} alt="Scholar" width="50%" />
            <h6>PHP</h6>
          </div>
          <div className="frames small-frames col-md-2 s8" ref={blueRef8}>
            <img className="   logo" src={FW8} alt="Scholar" width="50%" />
            <h6>CSS</h6>
          </div>
        </div>
        <div className=" col-md-10 offset-md-2 flexy flexyM">
          <div className="frames small-frames col-md-2 s9" ref={blueRef9}>
            <img className="   logo" src={FW9} alt="Scholar" width="50%" />
            <h6>HTML</h6>
          </div>
          <div className="frames small-frames col-md-2 s10" ref={blueRef10}>
            <img className="   logo" src={FW10} alt="Scholar" width="50%" />
            <h6>Materialv Ui</h6>
          </div>
          <div className="frames small-frames col-md-2 s11" ref={blueRef11}>
            <img className="   logo" src={FW11} alt="Scholar" width="60%" />
            <h6>Python</h6>
          </div>
          <div className="frames small-frames col-md-2 s12" ref={blueRef12}>
            <img className="   logo" src={FW12} alt="Scholar" width="50%" />
            <h6>MDB</h6>
          </div>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <div className=" col-md-12 flexy flexyM">
          <div className="frames small-frames col-md-2 s3" ref={blueRef3}>
            <img className="   logo" src={FW3} alt="Scholar" width="50%" />
            <h6>CarbonDesign </h6>
          </div>
          <div className="frames small-frames col-md-2 s4" ref={blueRef4}>
            <img className="   logo" src={FW4} alt="Scholar" width="50%" />
            <h6>Bootstrap</h6>
          </div>
          <div className="frames small-frames col-md-2 s5" ref={blueRef5}>
            <img className="   logo" src={FW5} alt="Scholar" width="50%" />
            <h6>Nodejs</h6>
          </div>
          <div className="frames small-frames col-md-2 s6" ref={blueRef6}>
            <img className="   logo" src={FW6} alt="Scholar" width="50%" />
            <h6>SCSS</h6>
          </div>
          <div className="frames small-frames col-md-2 s7" ref={blueRef7}>
            <img className="   logo" src={FW7} alt="Scholar" width="50%" />
            <h6>PHP</h6>
          </div>
          <div className="frames small-frames col-md-2 s8" ref={blueRef8}>
            <img className="   logo" src={FW8} alt="Scholar" width="50%" />
            <h6>CSS</h6>
          </div>
        </div>
        <div className=" col-md-10 offset-md-2 flexy flexyM">
          <div className="frames small-frames col-md-2 s9" ref={blueRef9}>
            <img className="   logo" src={FW9} alt="Scholar" width="50%" />
            <h6>HTML</h6>
          </div>
          <div className="frames small-frames col-md-2 s10" ref={blueRef10}>
            <img className="   logo" src={FW10} alt="Scholar" width="50%" />
            <h6>Materialv Ui</h6>
          </div>
          <div className="frames small-frames col-md-2 s11" ref={blueRef11}>
            <img className="   logo" src={FW11} alt="Scholar" width="60%" />
            <h6>Python</h6>
          </div>
          <div className="frames small-frames col-md-2 s12" ref={blueRef12}>
            <img className="   logo" src={FW12} alt="Scholar" width="50%" />
            <h6>MDB</h6>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default FrameWorks;
