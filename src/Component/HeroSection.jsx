import React from "react";
"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="position-relative overflow-hidden w-100"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container-fluid py-5">
        <div className="row align-items-center g-4">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="text-center text-lg-start">
              <h1 className="display-3 fw-bold text-dark mb-4">make IT happen</h1>
              <h2 className="display-6 fw-semibold text-danger mb-4">
                We Bring Solutions To Make Life Easier For Your Business.
              </h2>
              <p className="lead text-muted mb-5">
                we help you leverage latest technology with highest degree of optimization
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Link
                  to="/about"
                  className="btn btn-danger btn-lg px-4 py-3 d-flex align-items-center justify-content-center"
                >
                  KNOW MORE
                  <ArrowRight size={20} className="ms-2" />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-danger btn-lg px-4 py-3"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="col-12 col-lg-6 px-4 px-lg-5 mt-4 mt-lg-0">
            <div
              className="position-relative bg-gradient p-3 p-lg-4 rounded-3 shadow-lg overflow-visible"
              style={{
                background: "linear-gradient(135deg, #dc3545 0%, #b02a37 100%)",
                transition: "transform 0.5s, box-shadow 0.5s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
                alt="Business professionals discussing technology solutions"
                className="img-fluid rounded-3 shadow w-100"
              />

              {/* Decorative floating shapes with outer white circle */}
              <div
                className="position-absolute rounded-circle shadow"
                style={{
                  width: "60px",
                  height: "60px",
                  top: "-25px",
                  right: "-25px",
                  backgroundColor: "#fff", // outer circle
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                <div
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#dc3545", // inner circle
                  }}
                ></div>
              </div>

              <div
                className="position-absolute rounded-circle shadow"
                style={{
                  width: "45px",
                  height: "45px",
                  bottom: "-20px",
                  left: "-20px",
                  backgroundColor: "#fff", // outer circle
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "float 4s ease-in-out infinite",
                }}
              >
                <div
                  className="rounded-circle"
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#6c757d", // inner circle
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
