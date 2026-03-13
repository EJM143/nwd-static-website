import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>

        <p className="notfound-message">
          Oops! The page you're looking for doesn’t exist or may have been moved.
        </p>

        <div className="notfound-actions">
          <Link to="/Home">
            <button className="notfound-button">Go Home</button>
          </Link>

          <Link to="/Services">
            <button className="notfound-button">View Services</button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;