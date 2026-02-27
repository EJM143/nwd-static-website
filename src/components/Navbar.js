import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NWDLogo from "../images/NextWaveDevLogo/NextWaveDev_FINAL_SMALL.jpg";
import { WhiteSpacing } from "./microComponents/navbar/whiteSpacing";
import { Item } from "./microComponents/navbar/item";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#004da8",
        padding: "0.75rem 1rem",
        position: "relative",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/Home">
          <img
            src={NWDLogo}
            alt="Next Wave Dev Logo"
            style={{ width: "4rem", height: "4rem" }}
          />
        </Link>

        {isMobile && (
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "2rem",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* Navigation Items */}
      {(!isMobile || menuOpen) && (
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Item name="Contact" />
          <WhiteSpacing />
          <Item name="About" />
          <WhiteSpacing />
          <Item name="Developers" />
          <WhiteSpacing />
          <Item name="Portfolio" />
          <WhiteSpacing />
          <Item name="Services" />
          <WhiteSpacing />

          <div className="nav-dropdown">
            <span
              className="nav-dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ cursor: "pointer", color: "white" }}
            >
              Join Us
            </span>

            {isDropdownOpen && (
              <div className="nav-dropdown-menu">
                <Link
                  to="/Graduates"
                  className="nav-dropdown-item"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Graduates
                </Link>
                <Link
                  to="/apply"
                  className="nav-dropdown-item"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Apply
                </Link>
                <Link
                  to="/Companies"
                  className="nav-dropdown-item"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Companies
                </Link>
              </div>
            )}
          </div>

          <WhiteSpacing />
          <Item
            name="Shop"
            to="https://bonfire.com/store/next-wave-dev-store/"
            external
          />
          <WhiteSpacing />
          <Item name="Donation" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;