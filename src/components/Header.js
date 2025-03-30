import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/images/moleclear_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "visible";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Moleclear Logo" className="logo-image" />
          <div className="logo-text">
            <h1>MOLECLEAR</h1>
            <p>SUSTAINABLE CHEMISTRIES FOR PROCESS SCALE CONTROL</p>
          </div>
        </div>

        {isMobile && (
          <button
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <nav
          className={`${isMobile ? "mobile-nav" : ""} ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#who-we-are" onClick={closeMenu}>
                Who We Are
              </a>
            </li>
            <li>
              <a href="#solutions" onClick={closeMenu}>
                Solutions
              </a>
            </li>
            <li>
              <a href="#why-choose-us" onClick={closeMenu}>
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#industries" onClick={closeMenu}>
                Industries
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
