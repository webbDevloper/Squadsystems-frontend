import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaLock,
  FaShieldAlt,
  FaUserShield,
  FaMobileAlt,
  FaKey,
  FaCheckCircle,
} from "react-icons/fa";

const TwoFactorAuth = () => {
  const steps = [
    {
      icon: <FaUserShield className="text-danger" size={40} />,
      title: "Step 1: Identify Access Points",
      desc: "We analyze your infrastructure to pinpoint systems and user roles requiring enhanced authentication safeguards.",
    },
    {
      icon: <FaMobileAlt className="text-danger" size={40} />,
      title: "Step 2: Configure Authentication Method",
      desc: "Select the best fit — SMS OTP, email verification, authenticator apps, or hardware tokens — tailored to your organization’s security needs.",
    },
    {
      icon: <FaKey className="text-danger" size={40} />,
      title: "Step 3: Seamless Integration",
      desc: "Our team integrates 2FA with your ecosystem — CRMs, VPNs, and cloud apps — ensuring frictionless access with top-tier protection.",
    },
    {
      icon: <FaCheckCircle className="text-danger" size={40} />,
      title: "Step 4: Testing & Training",
      desc: "Comprehensive testing, documentation, and live user workshops to ensure smooth adoption and compliance readiness.",
    },
  ];

  const benefits = [
    "Powerful protection against phishing, credential theft, and brute-force attacks.",
    "Ensures compliance with global cybersecurity frameworks like ISO 27001, GDPR, and NIST.",
    "Enhances client trust and brand reputation with robust identity verification.",
    "Secures cloud applications, VPNs, and remote employee logins effectively.",
    "Drastically minimizes unauthorized access and insider threat risks.",
    "Scalable and customizable for enterprises of any size and sector.",
  ];

  return (
    <div className="two-factor-auth">
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
          <FaLock size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Two-Factor Authentication (2FA)
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Reinforce your organization’s cybersecurity posture with advanced
            multi-layer authentication. Safeguard sensitive systems and user
            data with seamless, enterprise-grade protection.
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
                alt="Two-Factor Authentication Illustration"
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
                What is Two-Factor Authentication?
              </h2>
              <p className="text-muted mb-3">
                Two-Factor Authentication (2FA) is a security protocol that adds
                an extra layer of protection beyond passwords. Even if a
                password is compromised, the attacker cannot proceed without a
                second verification factor.
              </p>
              <p className="text-muted">
                Our 2FA solutions are built for scalability and seamless
                integration, ensuring a frictionless experience for your users
                and IT teams alike — without compromising performance or
                usability.
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
            How We Implement 2FA
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
            Key Benefits of Implementing 2FA
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
            Secure Your Digital Identity — Today
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Empower your organization with future-ready authentication. Stay
            protected, compliant, and trusted in a connected world.
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

export default TwoFactorAuth;
