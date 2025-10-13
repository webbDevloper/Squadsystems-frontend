import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaLock,
  FaShieldAlt,
  FaNetworkWired,
  FaKey,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

const EncryptionGatewayUTM = () => {
  const steps = [
    {
      icon: <FaLock className="text-danger" size={40} />,
      title: "Step 1: Data Encryption Setup",
      desc: "We implement robust encryption standards such as AES-256 and SSL/TLS to safeguard data in transit and at rest, ensuring confidentiality and integrity.",
    },
    {
      icon: <FaNetworkWired className="text-danger" size={40} />,
      title: "Step 2: Configure Secure Gateway Firewalls",
      desc: "Deploy and configure gateway firewalls or UTM systems to monitor, filter, and control incoming and outgoing traffic across your network.",
    },
    {
      icon: <FaShieldAlt className="text-danger" size={40} />,
      title: "Step 3: Intrusion Detection & Prevention",
      desc: "Enable IDS/IPS capabilities within the UTM to detect malicious activities and automatically block potential threats in real-time.",
    },
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 4: Centralized Policy Management",
      desc: "Manage all security configurations, firewall rules, VPN access, and threat logs through a single, intuitive dashboard.",
    },
  ];

  const benefits = [
    "Provides a unified defense mechanism combining firewall, antivirus, intrusion prevention, and web filtering.",
    "Ensures encrypted data transmission and secure VPN access for remote users.",
    "Enhances overall network performance through intelligent traffic management.",
    "Prevents unauthorized access and protects against malware, ransomware, and phishing attacks.",
    "Simplifies compliance with standards like ISO 27001, GDPR, and HIPAA.",
    "Reduces administrative overhead with centralized monitoring and control.",
  ];

  return (
    <div className="encryption-gateway-utm">
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
            Encryption, Gateway Firewalls / UTM
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Strengthen your network perimeter with advanced encryption, unified
            threat management (UTM), and secure gateway firewalls — providing
            multilayered protection for your enterprise infrastructure.
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
                alt="Encryption Gateway Illustration"
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
                What is Encryption & Gateway Firewalls / UTM?
              </h2>
              <p className="text-muted mb-3">
                Encryption and Gateway Firewalls/UTM (Unified Threat Management)
                work together to secure network communication and defend against
                modern cyber threats. Encryption ensures that your data remains
                confidential and tamper-proof, while firewalls and UTM provide
                perimeter defense and traffic control.
              </p>
              <p className="text-muted">
                This powerful combination helps organizations prevent
                unauthorized access, stop intrusions, detect malicious activity,
                and maintain compliance — all from a centralized management
                system.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ⚙️ IMPLEMENTATION STEPS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark">
            <FaKey className="text-danger me-2" />
            How We Implement Encryption & UTM
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
            Key Benefits of Encryption & Gateway Firewalls / UTM
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

      {/* 🔐 CALL TO ACTION */}
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
            Secure Your Network with Next-Gen Encryption & UTM
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Protect your infrastructure with multilayered defense — combining
            encryption, gateway firewalls, and unified threat management for
            complete cybersecurity coverage.
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

export default EncryptionGatewayUTM;
