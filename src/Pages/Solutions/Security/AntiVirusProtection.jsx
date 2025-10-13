import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaShieldAlt,
  FaBug,
  FaLock,
  FaSyncAlt,
  FaChartLine,
  FaCheckCircle,
  FaUserShield,
} from "react-icons/fa";

const AntiVirusProtection = () => {
  const steps = [
    {
      icon: <FaBug className="text-danger" size={40} />,
      title: "Step 1: Threat Assessment & Identification",
      desc: "We analyze your network and endpoints to detect malware, viruses, and vulnerabilities that can compromise system integrity.",
    },
    {
      icon: <FaShieldAlt className="text-danger" size={40} />,
      title: "Step 2: Deploy Advanced Antivirus Solutions",
      desc: "Our antivirus systems provide 24/7 protection against viruses, ransomware, spyware, and other malicious threats with real-time detection.",
    },
    {
      icon: <FaSyncAlt className="text-danger" size={40} />,
      title: "Step 3: Automated Updates & Patch Management",
      desc: "Ensure continuous defense with regular virus definition updates and automatic security patches to counter new and evolving threats.",
    },
    {
      icon: <FaChartLine className="text-danger" size={40} />,
      title: "Step 4: Monitoring, Reporting & Optimization",
      desc: "We monitor system health, generate detailed reports on threat prevention, and continuously optimize your protection strategy.",
    },
  ];

  const benefits = [
    "Protection against viruses, ransomware, and malware.",
    "Real-time detection and automated response to threats.",
    "Prevents unauthorized access and data loss.",
    "Regular updates to stay ahead of emerging cyber threats.",
    "Improves network stability and minimizes downtime.",
    "Scalable and compatible with multi-device environments.",
  ];

  return (
    <div className="anti-virus-protection">
      {/* 🛡️ HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380663/pexels-photo-5380663.jpeg')",
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
            Anti-Virus Protection
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Protect your digital infrastructure with next-gen antivirus
            technology designed to defend your systems against malware, viruses,
            ransomware, and emerging cyber threats.
          </p>
          <Button
            variant="danger"
            size="sm"
            className="mt-2 px-4 py-2 fw-semibold shadow-sm border-0"
            href="/contact"
            style={{ letterSpacing: "0.5px" }}
          >
            Get Protected →
          </Button>
        </Container>
      </section>

      {/* 💡 ABOUT SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
                alt="Anti-Virus Protection Illustration"
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
                What is Anti-Virus Protection?
              </h2>
              <p className="text-muted mb-3">
                Anti-Virus Protection is a crucial defense layer that safeguards
                your systems from malicious software designed to infiltrate or
                damage your network. It ensures your digital assets remain
                secure, reliable, and compliant with modern cybersecurity
                standards.
              </p>
              <p className="text-muted">
                Our antivirus solutions use AI-driven detection and real-time
                scanning to identify and neutralize potential threats before
                they can cause harm.
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
            How We Implement Anti-Virus Protection
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
            Key Benefits of Anti-Virus Protection
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
            Stay Ahead of Cyber Threats — Secure Today
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Empower your business with enterprise-grade antivirus solutions that
            safeguard your devices, networks, and data from every known and
            emerging threat.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Schedule a Free Assessment →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default AntiVirusProtection;
