import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import TechHub from "./Pages/TechHubPage/TechHub";
import TeamHire from "./Pages/TeamHire/TeamHire";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/scrollToTop";
import HiringPage from "./Pages/HiringPage/HiringPage";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import CareersPage from "./Pages/CareersPage/CareersPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="tech-hub-page" element={<TechHub />} />
        <Route path="team-hire" element={<TeamHire />} />
        <Route path="hire-page" element={<HiringPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="careers" element={<CareersPage />} />
      </Routes>
    </>
  );
}

export default App;
