import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./frame-works.scss";
import FW1 from "../../../assets/images/react.png";
import FW6 from "../../../assets/images/scss.png";
import FW4 from "../../../assets/images/bootstrap.svg";
import FW10 from "../../../assets/images/material-ui.jpeg";
import FW12 from "../../../assets/images/mdb.jpg";
import FW8 from "../../../assets/images/css.png";
import FW9 from "../../../assets/images/html.jpeg";
import FW3 from "../../../assets/images/carbon-design.png";
import FW7 from "../../../assets/images/php.jpg";
import FW11 from "../../../assets/images/python.jpeg";
import FW2 from "../../../assets/images/c#.png";
import FW5 from "../../../assets/images/node.png";
function FrameWorks() {
  const [key, setKey] = useState("home");

  return (
    // <Tabs
    //   id="controlled-tab-example"
    //   activeKey={key}
    //   onSelect={(k) => setKey(k)}
    //   className="mb-3"
    // >
    //   <Tab eventKey="home" title="Home">
    //     <div className="framework-container  col-md-10 offset-md-1">
    //       {" "}
    //       <div className=" col-md-12 flexy flexyM">
    //         <div className="frames small-frames col-md-2 s3 zoom-in-out-box">
    //           <img className="   logo" src={FW3} alt="Scholar" width="50%" />
    //           <h6>CarbonDesign </h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s4">
    //           <img className="   logo" src={FW4} alt="Scholar" width="50%" />
    //           <h6>Bootstrap</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s5">
    //           <img className="   logo" src={FW5} alt="Scholar" width="50%" />
    //           <h6>Nodejs</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s6">
    //           <img className="   logo" src={FW6} alt="Scholar" width="50%" />
    //           <h6>SCSS</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s7">
    //           <img className="   logo" src={FW7} alt="Scholar" width="50%" />
    //           <h6>PHP</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s8">
    //           <img className="   logo" src={FW8} alt="Scholar" width="50%" />
    //           <h6>CSS</h6>
    //         </div>
    //       </div>
    //       <div className=" col-md-10 offset-md-2 flexy flexyM">
    //         <div className="frames small-frames col-md-2 s9">
    //           <img className="   logo" src={FW9} alt="Scholar" width="50%" />
    //           <h6>HTML</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s10">
    //           <img className="   logo" src={FW10} alt="Scholar" width="50%" />
    //           <h6>Materialv Ui</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s11">
    //           <img className="   logo" src={FW11} alt="Scholar" width="60%" />
    //           <h6>Python</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s12">
    //           <img className="   logo" src={FW12} alt="Scholar" width="50%" />
    //           <h6>MDB</h6>
    //         </div>
    //       </div>
    //     </div>
    //   </Tab>
    //   <Tab eventKey="profile" title="Profile">
    //     <div className="framework-container  col-md-10 offset-md-1">
    //       {" "}
    //       <div className=" col-md-12 flexy flexyM">
    //         <div className="frames small-frames col-md-2 s3">
    //           <img className="   logo" src={FW3} alt="Scholar" width="50%" />
    //           <h6>CarbonDesign </h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s4">
    //           <img className="   logo" src={FW4} alt="Scholar" width="50%" />
    //           <h6>Bootstrap</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s5">
    //           <img className="   logo" src={FW5} alt="Scholar" width="50%" />
    //           <h6>Nodejs</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s6">
    //           <img className="   logo" src={FW6} alt="Scholar" width="50%" />
    //           <h6>SCSS</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s7">
    //           <img className="   logo" src={FW7} alt="Scholar" width="50%" />
    //           <h6>PHP</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s8">
    //           <img className="   logo" src={FW8} alt="Scholar" width="50%" />
    //           <h6>CSS</h6>
    //         </div>
    //       </div>
    //       <div className=" col-md-10 offset-md-2 flexy flexyM">
    //         <div className="frames small-frames col-md-2 s9">
    //           <img className="   logo" src={FW9} alt="Scholar" width="50%" />
    //           <h6>HTML</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s10">
    //           <img className="   logo" src={FW10} alt="Scholar" width="50%" />
    //           <h6>Materialv Ui</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s11">
    //           <img className="   logo" src={FW11} alt="Scholar" width="60%" />
    //           <h6>Python</h6>
    //         </div>
    //         <div className="frames small-frames col-md-2 s12">
    //           <img className="   logo" src={FW12} alt="Scholar" width="50%" />
    //           <h6>MDB</h6>
    //         </div>
    //       </div>
    //     </div>
    //   </Tab>
    // </Tabs>

    function FrameWorks() {
      return (
        <>
          <div id="wrapper">
            <div id="container">
              <section class="open-book">
                <header>
                  <h1>Book Layout</h1>
                  <h6>Erin E. Sullivan</h6>
                </header>
                <article>
                  <h2 class="chapter-title">Waiting on projects</h2>
                  <p>
                    Sublime Text 2 was opened and a new document was created. "I
                    love this time of year," Erin gleefully thought to herself.
                  </p>
                  <p>
                    The "time of year" that is being referenced relates to
                    Erin's job when the pile of projects temporarily slow down.
                    This doesn't happen to just her. The reduction of work
                    happens to many, but at various times throughout the year,
                    depending on their position. She could submit to boredom and
                    brainlessly surf the Internet, but this particular developer
                    decided to take advantage of the situation.
                  </p>
                  <p>
                    Erin brainstorms on ideas that are both fun and can
                    strengthen her development skills. After all, however she
                    spends her free time at work should be used in a way that
                    becomes helpful for future projects.
                  </p>
                  <p>
                    She already made quite the effort into fine-tuning her
                    skills with Flexbox, creating functional and accessible code
                    for an{" "}
                    <a href="https://codepen.io/erinesullivan/pen/LLoXoL">
                      organizational chart
                    </a>{" "}
                    and a{" "}
                    <a href="https://codepen.io/erinesullivan/pen/MvOdOE">
                      process chart
                    </a>
                    . For Erin's next personal project, she wanted something
                    different. Something with multiple (yet possibly useful)
                    features.
                  </p>
                  <p>
                    To <a href="https://codepen.io/">CodePen.io</a> she went,
                    but not brainlessly! Erin "Oohed" and "Ahhed" at the
                    recently picked pens. She envied the skills of those using
                    compilers she has yet to dabble in. Then she put together a
                    list of what she would like to achieve.
                  </p>
                  <p>
                    Erin chuckled to herself, "This sounds crazy, but what if I
                    develop a section of text that looks like a book?"
                  </p>
                  <p>
                    She paused, realizing that what she was about to do was a
                    trend years ago. This severely increased the chance of her
                    project being mocked after launch. What was the specific
                    trend Erin remembered? Skeuomorphism.
                  </p>
                  <dl>
                    <dt>
                      <strong>skeu&bull;o&bull;morph</strong>
                    </dt>
                    <dd>
                      <em>noun</em>
                      <br />
                      an object or feature that imitates the design of a similar
                      artifact made from another material.
                    </dd>
                  </dl>
                  <p>
                    Outside of skeuomorphism, the idea actually was not very
                    silly. Erin always had an appreciation towards print work.
                    The thought of mimicking similar designs onto a web
                    interface has always fascinated her. So, why not start with
                    the classic print design of a novel?
                  </p>
                  <p>
                    She began to jot down a list of elements that are typically
                    in a novel:
                  </p>
                  <ul>
                    <li>Serif typefaces</li>
                    <li>
                      Header area with the title of the book on the left, and
                      the author of said book on the right.{" "}
                      <em>
                        Erin is aware that content within the header of the same
                        page as a chapter title does not appear, but she made an
                        exception
                      </em>
                      .
                    </li>
                    <li>An adorned chapter title</li>
                    <li>
                      A dropcap for the first letter of the first paragraph of
                      the chapter
                    </li>
                    <li>Indented paragraphs</li>
                    <li>Page numbers</li>
                  </ul>
                  <p>
                    She was then picturing herself making marks on a novel like
                    she used to in school. In her true fashion, she got carried
                    away with "What ifs."
                  </p>
                  <ul>
                    <li>
                      "What if highlighting the text actually looked{" "}
                      <mark>like a highlighter</mark>?"
                      <ul>
                        <li>
                          "What if I wanted it to be{" "}
                          <mark class="pink">pink</mark>?"
                        </li>
                        <li>
                          "<mark class="blue">Blue</mark>?"
                        </li>
                        <li>
                          "<mark class="green">Green</mark>?"
                        </li>
                        <li>
                          "<mark class="orange">Orange</mark>?"
                        </li>
                      </ul>
                    </li>
                    <li>
                      "What if I found <s>a typo</s>
                      <sup>an error in the content</sup> and wanted to make a
                      correction?"
                    </li>
                    <li>"What if I was viewing this on mobile&mdash;"</li>
                  </ul>
                  <p>
                    The true obstacle showed its form. Responsiveness. How on
                    Earth will she make this work?
                  </p>
                  <p>
                    Erin pulled out her notepad and started sketching. First she
                    began to illustrate the wireframe of the book in its
                    entirety. Then she recorded some notes on how each element
                    would break down as the screen size got smaller. After
                    several minutes, the blueprint was complete. She came to the
                    conclusion that mobile viewing must stay minimal. The pages
                    go away, which makes the page numbers no longer have a
                    function so they must go away, and if those go away then
                    there is no need for a cover since it is used to help hold
                    and protect pages.
                  </p>
                  <p>
                    She looks back at the blinking cursor of her blank canvas in
                    Sublime Text 2. Doubt begins to linger in the back of her
                    mind with the thought of her new code never being used and
                    her time spent ends up being a waste. Her fingers were
                    typing anyway.
                  </p>
                  <p>Erin smirked, "Well at least I think it's worth a try."</p>
                </article>
                <footer>
                  <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                  </ol>
                </footer>
              </section>
            </div>
          </div>
        </>
      );
    }
  );
}

export default FrameWorks;
