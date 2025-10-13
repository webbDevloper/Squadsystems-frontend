import React from "react";
import { Link } from "react-router-dom";
import { FaTools, FaCheckCircle } from "react-icons/fa";

const serviceItems = [
  {
    title: "Administration Training",
    img: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    desc: "Comprehensive training programs to empower IT teams with administrative skills.",
    highlights: ["Hands-on learning", "Certified trainers", "Customized modules"],
  },
  {
    title: "Consultancy",
    img: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg",
    desc: "Expert guidance to design, optimize, and implement IT strategies.",
    highlights: ["Process optimization", "Strategic planning", "Technology adoption"],
  },
  {
    title: "Data Classification",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    desc: "Classify and secure sensitive data to ensure compliance and security.",
    highlights: ["Policy-based tagging", "Data sensitivity levels", "Compliance ready"],
  },
  {
    title: "Implementation Services",
    img: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
    desc: "Seamless IT system deployments to ensure smooth operations.",
    highlights: ["End-to-end setup", "Integration services", "Zero-downtime approach"],
  },
  {
    title: "Post Implementation Support",
    img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    desc: "Ongoing support to keep your IT systems performing at peak efficiency.",
    highlights: ["24/7 assistance", "Performance monitoring", "Proactive updates"],
  },
  {
    title: "Troubleshooting Support",
    img: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    desc: "Quick resolution of IT issues to minimize downtime and disruptions.",
    highlights: ["Remote support", "On-site engineers", "Issue escalation"],
  },
];

// Utility to make route-friendly slugs
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg')",
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
            <FaTools className="me-2 text-danger" />
            Professional IT Services
          </h1>
          <p className="lead mb-4">
            Expert consultancy, training, implementation, and support to keep your IT environment efficient and future-ready.  
            Our services ensure optimized performance and proactive solutions.
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
          {serviceItems.map((item, index) => (
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
                    <FaTools className="text-danger me-2" />
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
                      to={`/solutions/services/${slugify(item.title)}`}
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
            Increased <b>IT efficiency by 55%</b> through dedicated consultancy and support services.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="text-center mt-5">
          <h4 className="mb-3 fw-bold">Looking for expert IT services?</h4>
          <p className="text-muted mb-4">
            Connect with our professionals to get consultancy, training, and ongoing IT support tailored to your business.
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
