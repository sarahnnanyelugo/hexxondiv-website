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
import AboutUs from "./Pages/About-Us/AboutUs";
import Footer from "./components/Footer/Footer";
import Logo from "../assets/images/logo.png";

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
        <Route path="about" element={<AboutUs />} />
      </Routes>
      <Footer bg="#092540" logo={Logo} />
    </>
  );
}

export default App;
