import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import TechHub from "./Pages/TechHubPage/TechHub";
import TeamHire from "./Pages/TeamHire/TeamHire";
function App() {
  return (
    <>
    <NavBar
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="tech-hub-page" element={<TechHub />} />
        <Route path="team-hire" element={<TeamHire />} />
      </Routes>
    </>
  );
}

export default App;
