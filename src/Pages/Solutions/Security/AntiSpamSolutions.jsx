import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaShieldAlt,
  FaEnvelopeOpenText,
  FaUserShield,
  FaNetworkWired,
  FaCheckCircle,
} from "react-icons/fa";

const AntiSpamSolutions = () => {
  const steps = [
    {
      icon: <FaUserShield className="text-danger" size={40} />,
      title: "Step 1: Analyze Email Traffic",
      desc: "We monitor inbound and outbound emails to detect suspicious patterns and potential spam threats.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-danger" size={40} />,
      title: "Step 2: Configure Filtering Rules",
      desc: "Implement advanced spam filters, blacklists, whitelists, and AI-powered detection to protect your inboxes.",
    },
    {
      icon: <FaNetworkWired className="text-danger" size={40} />,
      title: "Step 3: Seamless Integration",
      desc: "Integrate anti-spam solutions across your email servers, cloud platforms, and collaboration tools with minimal disruption.",
    },
    {
      icon: <FaCheckCircle className="text-danger" size={40} />,
      title: "Step 4: Monitoring & Reporting",
      desc: "Continuous monitoring, reporting, and user training to ensure optimal email security and operational efficiency.",
    },
  ];

  const benefits = [
    "Blocks phishing, malware, and unwanted spam emails effectively.",
    "Protects sensitive data and prevents credential theft.",
    "Enhances email reliability and improves employee productivity.",
    "Ensures compliance with global email security standards.",
    "Reduces operational risk and mitigates cyber threats.",
    "Scalable and adaptable to enterprises of any size.",
  ];

  return (
    <div className="anti-spam-solutions">
      {/* HERO SECTION */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "30vh",
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{ background: "rgba(0,0,0,0.6)" }}
        ></div>
        <Container className="position-relative py-4">
          <FaShieldAlt size={50} className="text-danger mb-2" />
          <h1 className="fw-bold text-uppercase mb-2 fs-4 fs-md-3">
            Anti-Spam Solutions
          </h1>
          <p className="text-light mb-3 fs-6 fs-md-5" style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>
            Protect your organization from phishing, malware, and unwanted spam emails with enterprise-grade filtering and monitoring solutions.
          </p>
          <Button
            href="/contact"
            variant="danger"
            size="md"
            className="fw-semibold px-4 px-md-5 py-2 py-md-3 shadow-sm border-0"
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
              <img
                src="https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg"
                alt="Anti-Spam Illustration"
                className="img-fluid rounded shadow-lg"
                style={{ transition: "all 0.3s ease" }}
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold text-danger mb-3 fs-5 fs-md-3">
                What is Anti-Spam Solution?
              </h2>
              <p className="text-muted mb-3 fs-7 fs-md-6">
                Anti-Spam Solutions prevent unwanted, harmful, and phishing emails from reaching your organization. They secure your inboxes and protect sensitive business data.
              </p>
              <p className="text-muted fs-7 fs-md-6">
                Our solutions are scalable and integrate seamlessly into your email servers, cloud platforms, and collaboration tools, ensuring security without disrupting productivity.
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
            How We Implement Anti-Spam
          </h2>
          <Row className="g-4">
            {steps.map((step, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card
                  className="border-0 shadow-sm text-center h-100 p-3"
                  style={{ transition: "transform 0.3s, box-shadow 0.3s", borderRadius: "12px" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
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
          <h2 className="fw-bold text-center mb-5 fs-5 fs-md-3">Key Benefits</h2>
          <Row className="g-4">
            {benefits.map((benefit, idx) => (
              <Col md={6} key={idx}>
                <div className="d-flex align-items-start bg-white rounded-3 p-3 shadow-sm h-100">
                  <FaCheckCircle className="text-danger me-3 mt-1" size={22} />
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
            backgroundImage:
              "url('https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative">
          <h2 className="fw-bold display-6 mb-3 fs-5 fs-md-3">
            Protect Your Email Infrastructure Today
          </h2>
          <p
            className="lead mb-4 fs-7 fs-md-6"
            style={{ maxWidth: "720px", margin: "0 auto", color: "#e0e0e0" }}
          >
            Empower your organization with advanced anti-spam technology. Stay protected, compliant, and trusted.
          </p>
          <Button
            href="/contact"
            size="lg"
            variant="danger"
            className="fw-semibold px-5 py-3 shadow-sm border-0"
          >
            Schedule a Consultation →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default AntiSpamSolutions;
