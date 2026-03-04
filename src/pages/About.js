import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import NWD_about_photo from "../images/about/New_NWD_about_photo.png";

function About() {
  return (
    <>
      <Helmet>
        <title> Next Wave Dev - About </title>
      </Helmet>
      <Navbar />

      <div
        style={{
          marginTop: "10vh",
          marginBottom: "10vh",
          height: "100%",
        }}
      >
        <div
          style={{
            ...flexParent,
            height: "auto",
          }}
          className="about-flex-parent"
        >
          {/* Title */}
          <div
            style={{
              ...flexChild,
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
              width: "30%",
            }}
            className="about-flex-child about-title"
          >
            <div
              style={{
                width: "90%",
                fontSize: "68px",
                fontWeight: 600,
              }}
            >
              Next Wave Dev
            </div>
          </div>

          {/* About Us Text */}
          <div
            style={{
              ...flexChild,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
            className="about-flex-child about-text"
          >
            <div
              style={{
                ...flexChild,
                fontSize: "1.5rem",
                width: "80%",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <strong>About Us:</strong>
                <br /><br />
                Bridging the gap between classroom learning and career success,
                we equip students and recent graduates with the skills,
                mentorship, and real-world experience needed to deliver
                high-quality tech solutions.
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={NWD_about_photo}
        alt="Picture of NWD"
        className="about-page-image"
        style={{
          width: "100%",
          display: "block",
          height: "80vh",
          objectFit: "fill",
        }}
      />
      <Footer />
    </>
  );
}

const flexChild = {
  position: "relative",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default About;
