import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaLock,
  FaShieldAlt,
  FaEye,
  FaNetworkWired,
  FaBug,
  FaCheckCircle,
} from "react-icons/fa";

const IntrusionDetectionPrevention = () => {
  const steps = [
    {
      icon: <FaEye className="text-danger" size={40} />,
      title: "Step 1: Network Visibility Assessment",
      desc: "We evaluate your infrastructure and traffic patterns to identify potential intrusion vectors and weak monitoring zones.",
    },
    {
      icon: <FaNetworkWired className="text-danger" size={40} />,
      title: "Step 2: Solution Design & Deployment",
      desc: "Our team designs and deploys a robust intrusion detection and prevention architecture — combining signature-based, anomaly-based, and behavioral analytics.",
    },
    {
      icon: <FaBug className="text-danger" size={40} />,
      title: "Step 3: Real-Time Monitoring & Response",
      desc: "Continuous monitoring detects suspicious activities instantly, triggering automated responses to block or isolate threats in real time.",
    },
    {
      icon: <FaCheckCircle className="text-danger" size={40} />,
      title: "Step 4: Reporting & Continuous Improvement",
      desc: "We provide detailed threat reports, incident analysis, and ongoing optimization to enhance system resilience and minimize attack surfaces.",
    },
  ];

  const benefits = [
    "Detects and prevents malicious activities in real time across networks and systems.",
    "Protects sensitive data from breaches, ransomware, and zero-day attacks.",
    "Enhances compliance with cybersecurity standards like ISO 27001, NIST, and GDPR.",
    "Improves visibility into network traffic and user behavior for proactive defense.",
    "Reduces incident response times with automated detection and mitigation.",
    "Integrates seamlessly with SIEM tools, firewalls, and endpoint protection systems.",
  ];

  return (
    <div className="intrusion-detection-prevention">
      {/* 🌟 HERO SECTION */}
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
          <FaShieldAlt size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Intrusion Detection & Prevention (IDPS)
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Strengthen your defense posture with intelligent threat detection and
            proactive prevention. Identify, monitor, and stop attacks before
            they impact your network or data.
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
                src="https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg"
                alt="Intrusion Detection and Prevention Illustration"
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
                What is Intrusion Detection & Prevention?
              </h2>
              <p className="text-muted mb-3">
                Intrusion Detection and Prevention Systems (IDPS) are
                cybersecurity solutions designed to detect, analyze, and block
                potential threats in real time. These systems help organizations
                monitor network traffic, identify anomalies, and prevent
                malicious activity before it causes harm.
              </p>
              <p className="text-muted">
                Our IDPS solutions provide end-to-end visibility and automated
                protection — empowering your security team to act faster, stay
                compliant, and protect critical assets around the clock.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ⚙️ IMPLEMENTATION STEPS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark">
            <FaLock className="text-danger me-2" />
            How We Implement IDPS
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
            Key Benefits of Implementing IDPS
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
              "url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Detect, Defend, and Prevent — Proactively
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Stay ahead of cyber threats with intelligent, automated defense
            systems that monitor and protect your environment — 24/7.
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

export default IntrusionDetectionPrevention;
