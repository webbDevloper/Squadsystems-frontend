import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaGlobe,
  FaShieldAlt,
  FaUserShield,
  FaFilter,
  FaChartBar,
  FaCogs,
  FaCheckCircle,
  FaLock,
} from "react-icons/fa";

const WebSurfingManagement = () => {
  const steps = [
    {
      icon: <FaFilter className="text-danger" size={40} />,
      title: "Step 1: Traffic Analysis & Categorization",
      desc: "We begin by assessing your network’s web traffic, identifying user behavior patterns and classifying websites based on risk levels and compliance standards.",
    },
    {
      icon: <FaShieldAlt className="text-danger" size={40} />,
      title: "Step 2: Policy Definition & Access Control",
      desc: "Set clear browsing rules — block malicious or non-work-related sites, manage access schedules, and apply departmental browsing policies.",
    },
    {
      icon: <FaCogs className="text-danger" size={40} />,
      title: "Step 3: Implementation & Integration",
      desc: "Integrate secure web gateways and proxy servers into your existing infrastructure to monitor and enforce real-time web usage policies.",
    },
    {
      icon: <FaChartBar className="text-danger" size={40} />,
      title: "Step 4: Continuous Monitoring & Reporting",
      desc: "Generate actionable insights, usage reports, and automated alerts to detect anomalies, policy violations, or high-risk browsing activity.",
    },
  ];

  const benefits = [
    "Protects against malicious websites and phishing attacks.",
    "Improves employee productivity by blocking non-work content.",
    "Ensures compliance with corporate IT and cybersecurity policies.",
    "Reduces malware infections and data exfiltration risks.",
    "Provides visibility into browsing activity and user behavior.",
    "Easy to scale across multiple offices and remote users.",
  ];

  return (
    <div className="web-surfing-management">
      {/* 🌐 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "30vh",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5))",
          }}
        ></div>
        <Container className="position-relative z-2 py-3">
          <FaGlobe size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Web Surfing Management
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Safeguard your network and workforce by controlling, monitoring, and
            optimizing web browsing activities. Prevent cyber threats and ensure
            compliance through intelligent web access management.
          </p>
          <Button
            variant="danger"
            size="sm"
            className="mt-2 px-4 py-2 fw-semibold shadow-sm border-0"
            href="/contact"
          >
            Get Started →
          </Button>
        </Container>
      </section>

      {/* 🔍 ABOUT SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://images.pexels.com/photos/3861953/pexels-photo-3861953.jpeg"
                alt="Web Surfing Management Illustration"
                className="img-fluid rounded shadow-lg border border-2 border-danger-subtle"
                style={{
                  transform: "scale(1)",
                  transition: "all 0.4s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold text-danger mb-3">
                What is Web Surfing Management?
              </h2>
              <p className="text-muted mb-3">
                Web Surfing Management involves regulating and securing internet
                access within an organization to protect against threats and
                improve efficiency. It ensures that employees only visit safe,
                compliant, and relevant websites while using corporate networks.
              </p>
              <p className="text-muted">
                Our solution leverages intelligent web filtering, real-time
                analytics, and compliance enforcement to enhance your
                organization’s cybersecurity posture and productivity.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ⚙️ IMPLEMENTATION STEPS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark">
            <FaUserShield className="text-danger me-2" />
            How We Implement Web Surfing Management
          </h2>
          <Row className="g-4">
            {steps.map((step, index) => (
              <Col md={6} lg={3} key={index}>
                <Card
                  className="border-0 shadow-sm text-center h-100"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    borderRadius: "12px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(220, 53, 69, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Card.Body className="py-4">
                    <div className="mb-3">{step.icon}</div>
                    <Card.Title className="fw-bold mb-2 text-dark">
                      {step.title}
                    </Card.Title>
                    <Card.Text className="text-muted small">
                      {step.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 🚀 BENEFITS SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark">
            Key Benefits of Web Surfing Management
          </h2>
          <Row className="g-4">
            {benefits.map((benefit, index) => (
              <Col md={6} key={index}>
                <div className="d-flex align-items-start bg-white rounded-3 p-3 shadow-sm h-100">
                  <FaCheckCircle
                    size={22}
                    className="text-danger me-3 mt-1 flex-shrink-0"
                  />
                  <p className="text-muted mb-0">{benefit}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ✉️ CALL TO ACTION */}
      <section className="py-5 text-center text-white position-relative">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Manage and Secure Internet Usage — Smartly
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Empower your organization with visibility, control, and protection
            over web activity — ensuring a safer, more productive digital
            environment.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Schedule a Consultation →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default WebSurfingManagement;
