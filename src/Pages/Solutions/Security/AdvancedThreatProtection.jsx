import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaShieldAlt,
  FaBug,
  FaNetworkWired,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

const AdvancedThreatProtection = () => {
  const steps = [
    {
      icon: <FaBug className="text-danger" size={40} />,
      title: "Step 1: Threat Detection",
      desc: "We continuously monitor your systems to detect malware, ransomware, and emerging cyber threats in real-time.",
    },
    {
      icon: <FaNetworkWired className="text-danger" size={40} />,
      title: "Step 2: Threat Analysis",
      desc: "Advanced AI-powered analytics help us understand attack patterns and identify vulnerabilities in your network infrastructure.",
    },
    {
      icon: <FaSearch className="text-danger" size={40} />,
      title: "Step 3: Response & Mitigation",
      desc: "Implement automatic and manual mitigation strategies to neutralize threats and prevent breaches effectively.",
    },
    {
      icon: <FaCheckCircle className="text-danger" size={40} />,
      title: "Step 4: Reporting & Compliance",
      desc: "Generate detailed reports, perform audits, and ensure adherence to global cybersecurity standards and frameworks.",
    },
  ];

  const benefits = [
    "Real-time threat detection and prevention across all endpoints.",
    "Protects against malware, ransomware, phishing, and advanced persistent threats.",
    "AI-powered analytics to identify vulnerabilities and anticipate attacks.",
    "Minimizes operational downtime and secures sensitive business data.",
    "Ensures regulatory compliance and cybersecurity best practices.",
    "Scalable protection for organizations of any size or industry.",
  ];

  return (
    <div className="advanced-threat-protection">
      {/* HERO SECTION */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "35vh",
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5))",
          }}
        ></div>
        <Container className="position-relative py-4">
          <FaShieldAlt size={50} className="text-danger mb-3" />
          <h1 className="fw-bold text-uppercase mb-2 fs-5 fs-md-3">
            Advanced Threat Protection (ATP)
          </h1>
          <p
            className="text-light mx-auto mb-3 fs-7 fs-md-6"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Protect your organization from sophisticated cyber threats with advanced threat detection, mitigation, and compliance-ready security solutions.
          </p>
          <Button
            variant="danger"
            size="md"
            className="mt-2 px-4 px-md-5 py-2 py-md-3 fw-semibold shadow-sm border-0"
            href="/contact"
          >
            Get Started →
          </Button>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div style={{ height: "350px", overflow: "hidden", borderRadius: "12px" }}>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Advanced Threat Protection Illustration"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            </Col>
            <Col md={6}>
              <h2 className="fw-bold text-danger mb-3 fs-5 fs-md-3">
                What is Advanced Threat Protection?
              </h2>
              <p className="text-muted mb-3 fs-7 fs-md-6">
                Advanced Threat Protection (ATP) is a comprehensive cybersecurity solution designed to detect, prevent, and respond to sophisticated cyber attacks.
              </p>
              <p className="text-muted fs-7 fs-md-6">
                Our ATP solutions integrate seamlessly across endpoints, networks, and cloud environments to provide real-time threat intelligence and ensure organizational security.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* IMPLEMENTATION STEPS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark fs-5 fs-md-3">
            <FaShieldAlt className="text-danger me-2" />
            How We Implement ATP
          </h2>
          <Row className="g-4">
            {steps.map((step, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card
                  className="border-0 shadow-sm text-center h-100 p-3"
                  style={{ transition: "transform 0.3s, box-shadow 0.3s", borderRadius: "12px" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(220, 53, 69, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div className="mb-3">{step.icon}</div>
                  <Card.Title className="fw-bold mb-2 fs-6 fs-md-5">{step.title}</Card.Title>
                  <Card.Text className="text-muted small">{step.desc}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark fs-5 fs-md-3">
            Key Benefits of ATP
          </h2>
          <Row className="g-4">
            {benefits.map((benefit, idx) => (
              <Col md={6} key={idx}>
                <div className="d-flex align-items-start bg-white rounded-3 p-3 shadow-sm h-100">
                  <FaCheckCircle size={22} className="text-danger me-3 mt-1" />
                  <p className="text-muted mb-0 fs-7 fs-md-6">{benefit}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-5 text-center text-white position-relative">
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative">
          <h2 className="fw-bold display-6 mb-3 fs-5 fs-md-3">
            Secure Your Organization Against Advanced Threats
          </h2>
          <p
            className="lead mb-4 mx-auto fs-7 fs-md-6"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Protect your business with state-of-the-art threat detection and mitigation. Stay compliant, secure, and trusted in a connected world.
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

export default AdvancedThreatProtection;
