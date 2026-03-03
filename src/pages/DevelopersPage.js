// src/pages/DevelopersPage.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Developer from "../components/Developer";
import data from "../developers.json";
import { Helmet } from "react-helmet";

const developers = data.developers;

const DevelopersPage = () => {
  return (
    <div>
      <Helmet>
        <title> Next Wave Dev - Developers </title>
      </Helmet>
      <Navbar />
      <div className="developers-flexcolumn">
        <h1 className="developers-flexcolumn__h1">Our Developers</h1>
        {developers.map((developer, index) => (
          <Developer key={index} {...developer} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DevelopersPage;
