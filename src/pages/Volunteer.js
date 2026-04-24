import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Volunteer() {
  return (
    <>
      <Helmet>
        <title>Volunteer - Next Wave Dev</title>
      </Helmet>
      <Navbar />

      <div style={{ paddingTop: "2rem", paddingLeft: "3vw", paddingRight: "3vw", maxWidth: "2200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem", color: "#004da8" }}>
          Volunteer
        </h1>
        <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "gray-600" }}>
          Coming soon
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Volunteer;