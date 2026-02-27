import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import Main from './pages/Main';
import Contact from './pages/Contact';
import ContactThankYou from './pages/ContactThankYou';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import DevelopersPage from './pages/DevelopersPage';
import GraduatesPage from './pages/GraduatesPage';
import CompaniesPage from './pages/CompaniesPage';
import ApplyPage from "./pages/ApplyPage";
import Donation from './pages/Donation';
import ServicesPage from './pages/ServicesPage';

// Pageview tracker component
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const page = location.hash.replace("#", "") || "/Home";

    ReactGA.send({ hitType: "pageview", page });

    if (window.gtag) {
      window.gtag("config", "AW-17737966605", {
        page_path: page,
      });
    }
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    ReactGA.initialize("G-G27MNF49YJ");
  }, []);

  return (
    <Router>
      <PageTracker />

      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Main />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Contact-Thank-You" element={<ContactThankYou />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/Developers" element={<DevelopersPage />} />
        <Route path="/graduates" element={<GraduatesPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Donate" element={<Donation />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
}

export default App;