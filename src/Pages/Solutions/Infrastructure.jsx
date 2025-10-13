import React from "react";
import { Link } from "react-router-dom";
import { FaServer, FaCheckCircle } from "react-icons/fa";

// Infrastructure Items with images + description + highlights
const infrastructureItems = [
  {
    title: "Active Directory, Database Servers",
    img: "https://images.pexels.com/photos/11813164/pexels-photo-11813164.jpeg",
    desc: "Centralized directory services and powerful database servers for enterprise scalability.",
    highlights: ["Centralized user management", "Database clustering", "Secure access"],
  },
  {
    title: "Virtualisation (Desktop/Server/Application)",
    img: "https://images.pexels.com/photos/11813169/pexels-photo-11813169.jpeg",
    desc: "Optimize resources with virtualization to reduce costs and improve flexibility.",
    highlights: ["VMware & Hyper-V", "Desktop virtualization", "Application streaming"],
  },
  {
    title: "High Availability & Load Balancing",
    img: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    desc: "Ensure uptime and reliability with HA clusters and load balancing solutions.",
    highlights: ["Failover clustering", "Disaster recovery", "Traffic load distribution"],
  },
  {
    title: "Messaging & Collaboration Servers",
    img: "https://images.pexels.com/photos/1181340/pexels-photo-1181340.jpeg",
    desc: "Boost productivity with enterprise messaging and collaboration platforms.",
    highlights: ["Email servers", "Collaboration tools", "Team communication"],
  },
  {
    title: "Network Performance Management",
    img: "https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg",
    desc: "Monitor and optimize your network for maximum performance and uptime.",
    highlights: ["Real-time monitoring", "Bandwidth reports", "QoS management"],
  },
  {
    title: "Office Automation Applications",
    img: "https://images.pexels.com/photos/267447/pexels-photo-267447.jpeg",
    desc: "Automate business operations with cutting-edge office applications.",
    highlights: ["Workflow automation", "Document management", "Productivity tools"],
  },
  {
    title: "Switches/Routers, System Management Tools",
    img: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    desc: "Robust network hardware and tools to manage enterprise systems effectively.",
    highlights: ["Advanced switches/routers", "Centralized management", "Network security"],
  },
  {
    title: "Video/Print/Web Publishing",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    desc: "Enterprise-grade publishing solutions for video, print, and web content.",
    highlights: ["Digital publishing", "Print management", "Web content delivery"],
  },
  {
    title: "Wireless LAN",
    img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    desc: "High-speed, secure wireless LAN solutions for enterprise mobility.",
    highlights: ["Wi-Fi 6 ready", "Secure authentication", "Seamless roaming"],
  },
];

// Utility to make route-friendly slugs
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Infrastructure() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/11813164/pexels-photo-11813164.jpeg')",
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
            <FaServer className="me-2 text-danger" />
            Infrastructure Solutions
          </h1>
          <p className="lead mb-4">
            Build scalable, secure, and high-performing IT environments with our
            end-to-end infrastructure services. From virtualization to
            automation, we’ve got you covered.
          </p>
          <Link
            to="/contact"
            className="btn btn-danger btn-lg rounded-pill shadow-lg"
          >
            Explore Solutions
          </Link>
        </div>
      </section>

      {/* Cards Section */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {infrastructureItems.map((item, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden"
                style={{
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
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
                    <FaServer className="text-danger me-2" />
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
                      to={`/solutions/infrastructure/${slugify(item.title)}`}
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
          <h4 className="mb-3 fw-bold">Want to optimize your IT infrastructure?</h4>
          <p className="text-muted mb-4">
            Speak with our infrastructure specialists to design a solution
            tailored to your business.
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
