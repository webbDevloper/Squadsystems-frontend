import React from "react";
import { Link } from "react-router-dom";
import { FaDatabase, FaCheckCircle } from "react-icons/fa";

const backupItems = [
  {
    title: "Data Replication, Auto Loaders",
    img: "https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg",
    desc: "Replicate critical business data across multiple systems with automated loaders.",
    highlights: ["Real-time replication", "Multi-location sync", "Automated loaders"],
  },
  {
    title: "Business Continuity Planning",
    img: "https://images.pexels.com/photos/3182764/pexels-photo-3182764.jpeg",
    desc: "Plan and implement continuity strategies to ensure minimal downtime.",
    highlights: ["Disaster preparedness", "Downtime reduction", "Risk mitigation"],
  },
  {
    title: "Automated Desktop/Laptop Backup",
    img: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg",
    desc: "Seamless backup of endpoint devices to protect user data.",
    highlights: ["Scheduled backups", "File versioning", "Cloud sync"],
  },
  {
    title: "Automated Server Backup",
    img: "https://images.pexels.com/photos/1181330/pexels-photo-1181330.jpeg",
    desc: "Ensure your servers are protected with automated, consistent backups.",
    highlights: ["Incremental backups", "Full server images", "Centralized management"],
  },
  {
    title: "DAT/DLT/Tape Library",
    img: "https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg",
    desc: "Traditional tape storage systems for long-term secure data archiving.",
    highlights: ["High-capacity storage", "Cost-effective", "Long retention period"],
  },
  {
    title: "Disaster Recovery Solutions",
    img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
    desc: "Rapid recovery solutions to minimize downtime during unexpected failures.",
    highlights: ["Failover systems", "Recovery testing", "Hot & cold sites"],
  },
  {
    title: "NAS/SAN/Unified Data Storage Solutions",
    img: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    desc: "Enterprise-grade storage to ensure scalability and reliability.",
    highlights: ["Centralized storage", "High performance", "Scalable capacity"],
  },
];

// Utility to make route-friendly slugs
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Backup() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg')",
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
            <FaDatabase className="me-2 text-danger" />
            Reliable Backup Solutions
          </h1>
          <p className="lead mb-4">
            Protect your business with automated backup, disaster recovery, and enterprise-grade storage.  
            Ensure business continuity with minimal downtime.
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
          {backupItems.map((item, index) => (
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
                    <FaDatabase className="text-danger me-2" />
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
                      to={`/solutions/backup/${slugify(item.title)}`}
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

        {/* Case Study Section */}
        <div className="text-center mt-5">
          <h4 className="mb-3 fw-bold">Case Study</h4>
          <p className="text-muted mb-4">
            Achieved <b>99.9% uptime</b> by implementing automated backup and disaster recovery.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="text-center mt-5">
          <h4 className="mb-3 fw-bold">Ready to secure your data?</h4>
          <p className="text-muted mb-4">
            Connect with our experts to explore tailored backup and recovery solutions.
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
