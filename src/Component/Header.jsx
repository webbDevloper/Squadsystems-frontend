"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaBlog, FaImages, FaQuoteRight } from "react-icons/fa";
import HeaderLogo from "../../src/assets/Images/Logo1.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Solution", href: "/solution" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div
        style={{ backgroundColor: "#ad2121ff", opacity: 0.9 }}
        className="text-white py-2"
      >
        <div className="container px-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            {/* Contact Info */}
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-3 mb-md-0">
              <div className="d-flex align-items-center mb-2 mb-md-0 me-md-4">
                <FiMail className="me-2" />
                <span>info@squadsystems.com</span>
              </div>
              <div className="d-flex align-items-center">
                <FiPhone className="me-2" />
                <span>+91 9911700247</span>
              </div>
            </div>

            {/* Links */}
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <Link
                to="/blogs"
                className="text-white text-decoration-none mb-2 mb-md-0 me-md-3 d-flex align-items-center"
              >
                <FaBlog className="me-1" /> Blog
              </Link>
              <Link
                to="/gallery"
                className="text-white text-decoration-none mb-2 mb-md-0 me-md-3 d-flex align-items-center"
              >
                <FaImages className="me-1" /> Gallery
              </Link>
              <Link
                to="/testimonials"
                className="text-white text-decoration-none d-flex align-items-center"
              >
                <FaQuoteRight className="me-1" /> Testimonials
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm w-100"
        style={{
          minHeight: "70px",
          position: "sticky",
          top: 0,
          zIndex: 1030,
        }}
      >
        <div className="container-fluid px-4">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={HeaderLogo}
              alt="Squad Systems Logo"
              style={{
                height: "50px",
                width: isMobile ? "200px" : "250px",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navigation.map((item) => (
                <li className="nav-item" key={item.name}>
                  <Link
                    to={item.href}
                    className={`nav-link ${
                      location.pathname === item.href
                        ? "active text-danger"
                        : "text-dark"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
