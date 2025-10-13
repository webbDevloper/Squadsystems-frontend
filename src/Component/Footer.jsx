import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white w-100 pt-5">
      <div className="container px-4">
        <div className="row gy-5">
          {/* Company Info */}
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <h5 className="mb-0">Squad Systems</h5>
            </div>
            <p className="text-secondary mb-4">
              Delivering innovative technology solutions that drive business
              growth and success across all industries.
            </p>
            {/* Social Media Icons */}
            <div className="d-flex gap-4 justify-content-center justify-content-lg-start">
              <a
                href="https://twitter.com/squadsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4 hover-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/squad-systems-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4 hover-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/godigital1087/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4 hover-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/1Gkma3nkH3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4 hover-icon"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-secondary text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-secondary text-decoration-none"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/industries"
                  className="text-secondary text-decoration-none"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-secondary text-decoration-none"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-8 col-lg-6">
            <h6 className="text-uppercase mb-3">Contact Info</h6>
            <ul className="list-unstyled text-secondary">
              <li className="mb-3 d-flex">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Squad Systems Pvt Ltd, UG-10, First Floor, Reliable City Center,
                Sector 6, Vasundhara, Ghaziabad, Uttar Pradesh 201012
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-telephone-fill me-2"></i>
                +91 9911700247
              </li>
              <li className="d-flex">
                <i className="bi bi-envelope-fill me-2"></i>
                info@squadsystems.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-top border-secondary mt-5 pt-3 text-center">
          <p className="text-secondary mb-0 small">
            © {new Date().getFullYear()} Squad Systems. All rights reserved. |{" "}
            <Link
              to="/privacy"
              className="text-secondary text-decoration-none ms-1"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              to="/terms"
              className="text-secondary text-decoration-none ms-1"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>

      {/* Hover Effect */}
      <style jsx>{`
        .hover-icon:hover {
          color: #dc3545 !important;
          transform: scale(1.2);
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
