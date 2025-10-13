import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaEnvelopeOpenText,
  FaShieldAlt,
  FaSearch,
  FaUserShield,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

const EmailMonitoringControl = () => {
  const steps = [
    {
      icon: <FaSearch className="text-danger" size={40} />,
      title: "Step 1: Analyze Email Traffic",
      desc: "We assess email communication patterns to identify potential risks, phishing attempts, and data leak indicators within your organization.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-danger" size={40} />,
      title: "Step 2: Implement Policy Controls",
      desc: "Define granular email policies to restrict unauthorized attachments, keyword-based triggers, and external data sharing.",
    },
    {
      icon: <FaUserShield className="text-danger" size={40} />,
      title: "Step 3: Real-Time Monitoring & Alerts",
      desc: "Enable continuous monitoring of inbound and outbound emails with instant alerts for suspicious activity or policy violations.",
    },
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 4: Reporting & Compliance Management",
      desc: "Generate detailed audit reports and compliance dashboards for regulatory adherence, risk mitigation, and executive insights.",
    },
  ];

  const benefits = [
    "Protects against phishing, spoofing, and business email compromise (BEC) attacks.",
    "Prevents sensitive data leakage through email content or attachments.",
    "Enhances organizational compliance with regulations like GDPR, HIPAA, and ISO 27001.",
    "Provides full visibility into internal and external communications.",
    "Improves incident response with automated alerts and actionable insights.",
    "Ensures consistent policy enforcement across cloud and on-premise email systems.",
  ];

  return (
    <div className="email-monitoring-control">
      {/* 🌟 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg')",
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
            Email Monitoring & Control
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Strengthen your email security with intelligent monitoring,
            automated control, and advanced protection from phishing and data
            breaches — all within your communication network.
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
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
                alt="Email Monitoring Illustration"
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
                What is Email Monitoring & Control?
              </h2>
              <p className="text-muted mb-3">
                Email Monitoring & Control is a proactive cybersecurity approach
                that tracks, analyzes, and regulates email traffic to prevent
                data loss, policy breaches, and cyber threats within your
                organization.
              </p>
              <p className="text-muted">
                Our solution provides centralized visibility, automated
                compliance enforcement, and AI-driven insights — ensuring that
                every email sent or received adheres to your organization’s
                security and privacy policies.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ⚙️ IMPLEMENTATION STEPS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark">
            <FaEnvelopeOpenText className="text-danger me-2" />
            How We Implement Email Monitoring
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
            Key Benefits of Email Monitoring & Control
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
              "url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Secure Every Message — Protect Your Communications
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Gain full visibility and control over your email environment. Stop
            threats before they reach inboxes and ensure safe, compliant
            communication for your organization.
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

export default EmailMonitoringControl;
