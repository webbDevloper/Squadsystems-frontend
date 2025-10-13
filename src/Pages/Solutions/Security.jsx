import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";

// Security Items with images + description + highlights
const securityItems = [
  {
    title: "2 Factor Authentication",
    img: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    desc: "Add an extra layer of login security with OTPs and authenticator apps.",
    highlights: ["OTP & SMS verification", "Mobile authenticator", "Biometric support"],
  },
  {
    title: "Anti-spam Solutions",
    img: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg",
    desc: "Filter junk and malicious emails to keep your inbox safe and clean.",
    highlights: ["Spam filtering", "Phishing protection", "Custom rules"],
  },
  {
    title: "Advanced Threat Protection",
    img: "https://images.pexels.com/photos/2882631/pexels-photo-2882631.jpeg",
    desc: "Block sophisticated malware and phishing attempts in real time.",
    highlights: ["Zero-day attack defense", "Real-time monitoring", "Threat intelligence"],
  },
  {
    title: "Anti-virus Protection",
    img: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg",
    desc: "Stay protected from viruses with robust endpoint security.",
    highlights: ["Malware detection", "Automatic updates", "Endpoint scanning"],
  },
  {
    title: "Bandwidth Analysis & Management",
    img: "https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg",
    desc: "Monitor, analyze, and control your network traffic effectively.",
    highlights: ["Traffic reports", "QoS management", "Real-time analytics"],
  },
  {
    title: "Data Leakage Prevention",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    desc: "Ensure sensitive data doesn’t fall into the wrong hands.",
    highlights: ["Data encryption", "Policy enforcement", "Access monitoring"],
  },
  {
    title: "Email Monitoring & Control",
    img: "https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg",
    desc: "Track, scan, and protect your organization’s email communication.",
    highlights: ["Attachment scanning", "Email filtering", "Compliance reports"],
  },
  {
    title: "Encryption, Gateway Firewalls/UTM",
    img: "https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg",
    desc: "Safeguard your network with firewalls and strong encryption.",
    highlights: ["SSL/TLS encryption", "Unified threat management", "Access control"],
  },
  {
    title: "Intrusion Detection & Prevention",
    img: "https://images.pexels.com/photos/5380645/pexels-photo-5380645.jpeg",
    desc: "Detect and block suspicious activity proactively.",
    highlights: ["IDS/IPS systems", "Anomaly detection", "Attack prevention"],
  },
  {
    title: "PIM, SIEM, VPNs",
    img: "https://images.pexels.com/photos/5380657/pexels-photo-5380657.jpeg",
    desc: "Manage privileged access, analyze logs, and secure remote work.",
    highlights: ["Log monitoring", "Access control", "Secure VPNs"],
  },
  {
    title: "Web Surfing Management",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    desc: "Control browsing, block harmful sites, and ensure safe internet use.",
    highlights: ["URL filtering", "Time-based rules", "Safe browsing policies"],
  },
];

// Utility to make route-friendly slugs
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Security() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2882631/pexels-photo-2882631.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          borderRadius: "0 0 30px 30px",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0.65)",
            borderRadius: "0 0 30px 30px",
          }}
        ></div>

        <div className="text-center position-relative px-3">
          <h1 className="fw-bold display-4 mb-3">
            <FaShieldAlt className="me-2 text-danger" />
            Enterprise-Grade Security Solutions
          </h1>
          <p className="lead mb-4">
            Protect your business with next-gen security systems, advanced monitoring, and real-time threat prevention.  
            We deliver end-to-end solutions for organizations of all sizes.
          </p>
          <Link
            to="/contact"
            className="btn btn-danger btn-lg rounded-pill shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Cards Section */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {securityItems.map((item, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden"
                style={{
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0px 10px 30px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0px 5px 15px rgba(0,0,0,0.15)";
                }}
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title d-flex align-items-center fw-bold">
                    <FaShieldAlt className="text-danger me-2" />
                    {item.title}
                  </h5>
                  <p className="card-text text-muted">{item.desc}</p>
                  <ul className="list-unstyled small text-muted mb-3">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="d-flex align-items-center">
                        <FaCheckCircle className="text-success me-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      to={`/solutions/security/${slugify(item.title)}`}
                      className="btn btn-outline-danger btn-sm rounded-pill"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className="text-center mt-5">
          <h4 className="mb-3 fw-bold">Ready to take your security to the next level?</h4>
          <p className="text-muted mb-4">
            Connect with our experts to discuss tailored solutions for your business.
          </p>
          <Link
            to="/contact"
            className="btn btn-lg btn-danger rounded-pill px-4 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
