import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      {/* <div class="holder flipH">
        <div class="card">
          <div class="front">
            Aggrrrrrrrrrrrrrrrrrrrrddddddddddddddddddddddddddddddddddddddddddddddddddrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
          </div>
          <div class="back">
            Atwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          </div>
        </div>
      </div> */}
      <NavBar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <div
        class="flip-container"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div class="flipper">
          <div class="front"></div>
          <div class="back"></div>
        </div>
      </div> */}
    </>
  );
}

export default App;
