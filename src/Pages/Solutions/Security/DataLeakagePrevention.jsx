import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaShieldAlt,
  FaLock,
  FaSearch,
  FaUserSecret,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";

const DataLeakagePrevention = () => {
  const steps = [
    {
      icon: <FaSearch className="text-danger" size={40} />,
      title: "Step 1: Data Discovery & Classification",
      desc: "We identify and classify sensitive data across on-premises and cloud environments to ensure visibility and control.",
    },
    {
      icon: <FaDatabase className="text-danger" size={40} />,
      title: "Step 2: Policy Definition & Enforcement",
      desc: "Define and enforce DLP policies to prevent unauthorized data sharing, storage, or transfer across communication channels.",
    },
    {
      icon: <FaUserSecret className="text-danger" size={40} />,
      title: "Step 3: Real-Time Monitoring & Alerts",
      desc: "Implement continuous monitoring with intelligent alerts that detect and block potential data leaks instantly.",
    },
    {
      icon: <FaLock className="text-danger" size={40} />,
      title: "Step 4: Incident Response & Compliance",
      desc: "We provide automated incident response, reporting, and compliance mapping aligned with GDPR, HIPAA, and ISO standards.",
    },
  ];

  const benefits = [
    "Protects intellectual property, confidential data, and client information from exposure.",
    "Ensures compliance with data privacy regulations like GDPR, HIPAA, and ISO 27001.",
    "Minimizes insider threats through proactive monitoring and behavioral analysis.",
    "Reduces financial and reputational risks from data breaches and compliance violations.",
    "Supports hybrid and cloud environments with centralized visibility and control.",
    "Provides actionable insights through detailed data flow analytics and audit trails.",
  ];

  return (
    <div className="data-leakage-prevention">
      {/* 🌟 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg')",
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
          <FaShieldAlt size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Data Leakage Prevention (DLP)
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Safeguard sensitive information and maintain regulatory compliance
            with advanced DLP strategies that prevent data exposure across all
            communication and storage channels.
          </p>
          <Button
            variant="danger"
            size="sm"
            className="mt-2 px-4 py-2 fw-semibold shadow-sm border-0"
            href="/contact"
            style={{ letterSpacing: "0.5px" }}
          >
            Get Started →
          </Button>
        </Container>
      </section>

      {/* 💡 ABOUT SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
                alt="Data Leakage Prevention Illustration"
                className="img-fluid rounded shadow-lg border border-2 border-danger-subtle"
                style={{
                  transform: "scale(1)",
                  transition: "all 0.4s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold text-danger mb-3">
                What is Data Leakage Prevention?
              </h2>
              <p className="text-muted mb-3">
                Data Leakage Prevention (DLP) is a strategic approach that
                protects sensitive organizational data from unauthorized access,
                sharing, or exfiltration. It combines technology and policy to
                ensure that data stays secure — inside and outside your network.
              </p>
              <p className="text-muted">
                Our DLP solutions integrate seamlessly with your IT ecosystem,
                offering continuous visibility, proactive alerts, and policy-based
                enforcement for complete data protection.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ⚙️ IMPLEMENTATION STEPS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark">
            <FaShieldAlt className="text-danger me-2" />
            How We Implement DLP
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
            Key Benefits of Data Leakage Prevention
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
              "url('https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Protect Your Data — Before It’s Too Late
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Strengthen your data defense with proactive DLP solutions designed
            to prevent leaks, secure information, and ensure full compliance.
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

export default DataLeakagePrevention;
