import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaUserShield,
  FaKey,
  FaCogs,
  FaChartLine,
  FaServer,
  FaChartBar,
  FaBell,
  FaShieldAlt,
  FaNetworkWired,
  FaUserLock,
  FaGlobe,
  FaCheckCircle,
  FaLock,
} from "react-icons/fa";

const SecurityServices = () => {
  // All sections data
  const sections = [
    {
      id: "pim",
      title: "Privileged Identity Management (PIM)",
      desc: "Secure and monitor privileged access to protect sensitive systems, ensuring accountability and compliance across your organization.",
      img: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      infoTitle: "What is Privileged Identity Management?",
      infoDesc: [
        "Privileged Identity Management (PIM) helps control, monitor, and secure accounts with elevated permissions to prevent misuse and data breaches.",
        "Our solutions provide just-in-time access, session monitoring, and automation to simplify compliance and enhance governance.",
      ],
      steps: [
        {
          icon: <FaUserShield className="text-danger" size={40} />,
          title: "Identify Privileged Accounts",
          desc: "Audit your systems to locate privileged identities and assess risks associated with elevated permissions.",
        },
        {
          icon: <FaKey className="text-danger" size={40} />,
          title: "Implement Access Policies",
          desc: "Apply least-privilege principles with time-bound and role-based access control for sensitive systems.",
        },
        {
          icon: <FaCogs className="text-danger" size={40} />,
          title: "Automate Access Control",
          desc: "Automate account provisioning and deprovisioning to minimize errors and enhance security.",
        },
        {
          icon: <FaChartLine className="text-danger" size={40} />,
          title: "Continuous Monitoring",
          desc: "Track privileged activity in real time with detailed reports, alerts, and audit trails.",
        },
      ],
      benefits: [
        "Protects critical systems from insider threats.",
        "Provides real-time visibility into privileged activities.",
        "Ensures compliance with ISO, SOX, and GDPR standards.",
        "Implements least privilege access and just-in-time control.",
        "Automates access management to reduce administrative load.",
        "Enhances accountability through audit trails.",
      ],
    },
    {
      id: "siem",
      title: "Security Information & Event Management (SIEM)",
      desc: "Gain end-to-end visibility across your IT infrastructure. Detect, analyze, and respond to security threats in real time with our comprehensive SIEM solutions.",
      img: "https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg",
      infoTitle: "What is SIEM?",
      infoDesc: [
        "SIEM collects, correlates, and analyzes security event data to provide actionable intelligence for faster detection and response.",
        "Our SIEM services help detect threats, maintain compliance, and strengthen your security posture through automation and analytics.",
      ],
      steps: [
        {
          icon: <FaServer className="text-danger" size={40} />,
          title: "Log Data Collection",
          desc: "Collect and centralize security logs from all systems and applications for unified monitoring.",
        },
        {
          icon: <FaChartBar className="text-danger" size={40} />,
          title: "Correlation & Analysis",
          desc: "Use advanced analytics to correlate data and identify potential threats or anomalies.",
        },
        {
          icon: <FaBell className="text-danger" size={40} />,
          title: "Real-Time Alerting",
          desc: "Generate alerts for suspicious activities to enable rapid response.",
        },
        {
          icon: <FaShieldAlt className="text-danger" size={40} />,
          title: "Compliance & Reporting",
          desc: "Provide dashboards and automated reports to ensure regulatory compliance.",
        },
      ],
      benefits: [
        "Centralized visibility into security events.",
        "Detects and responds to threats in real time.",
        "Simplifies compliance with ISO, PCI-DSS, and NIST.",
        "Reduces alert fatigue via smart correlation.",
        "Improves incident response efficiency.",
        "Enhances insights with detailed dashboards.",
      ],
    },
    {
      id: "vpns",
      title: "Virtual Private Networks (VPNs)",
      desc: "Secure remote connectivity for your workforce with enterprise-grade VPNs, ensuring data confidentiality and integrity across all networks.",
      img: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      infoTitle: "What is a Virtual Private Network?",
      infoDesc: [
        "A Virtual Private Network (VPN) ensures secure communication over public or shared networks through encryption and authentication.",
        "Our VPN solutions offer scalable, reliable, and secure remote access to corporate resources — enabling flexibility without compromising data integrity.",
      ],
      steps: [
        {
          icon: <FaUserLock className="text-danger" size={40} />,
          title: "Assess Connectivity Needs",
          desc: "Identify secure remote access and branch connectivity requirements.",
        },
        {
          icon: <FaNetworkWired className="text-danger" size={40} />,
          title: "Design & Configure VPNs",
          desc: "Deploy secure IPsec or SSL VPNs with strong encryption and authentication.",
        },
        {
          icon: <FaServer className="text-danger" size={40} />,
          title: "Integration & User Onboarding",
          desc: "Integrate VPN access with authentication systems like AD or SSO providers.",
        },
        {
          icon: <FaGlobe className="text-danger" size={40} />,
          title: "Monitoring & Optimization",
          desc: "Continuously monitor VPN performance and security for reliability.",
        },
      ],
      benefits: [
        "Enables secure remote work worldwide.",
        "Encrypts sensitive data over public networks.",
        "Prevents unauthorized access and interception.",
        "Integrates easily with MFA systems.",
        "Ensures compliance with global standards.",
        "Scalable for organizations of any size.",
      ],
    },
  ];

  return (
    <div className="security-services">
      {/* 🌟 Global Hero Section */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "35vh",
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
          <FaLock size={50} className="text-danger mb-3" />
          <h1 className="display-6 fw-bold mb-3 text-uppercase">
            Enterprise Security Solutions
          </h1>
          <p
            className="lead mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Protect, monitor, and optimize your organization’s digital ecosystem
            with comprehensive cybersecurity services including PIM, SIEM, and VPN
            management.
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

      {/* 🧱 Sections */}
      {sections.map((sec, i) => (
        <div key={sec.id} id={sec.id}>
          {/* Info Section */}
          <section className={`py-5 ${i % 2 === 0 ? "bg-light" : ""}`}>
            <Container>
              <Row className="align-items-center">
                <Col md={6}>
                  <img
                    src={sec.img}
                    alt={sec.title}
                    className="img-fluid rounded shadow-lg border border-2 border-danger-subtle"
                  />
                </Col>
                <Col md={6}>
                  <h2 className="fw-bold text-danger mb-3">{sec.infoTitle}</h2>
                  {sec.infoDesc.map((p, idx) => (
                    <p key={idx} className="text-muted">
                      {p}
                    </p>
                  ))}
                </Col>
              </Row>
            </Container>
          </section>

          {/* Steps */}
          <section className="py-5">
            <Container>
              <h2 className="fw-bold text-center mb-5 text-dark">
                How We Implement {sec.title.split("(")[0].trim()}
              </h2>
              <Row className="g-4">
                {sec.steps.map((step, index) => (
                  <Col md={6} lg={3} key={index}>
                    <Card className="border-0 shadow-sm text-center h-100">
                      <Card.Body>
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

          {/* Benefits */}
          <section className={`py-5 ${i % 2 === 0 ? "" : "bg-light"}`}>
            <Container>
              <h2 className="fw-bold text-center mb-5 text-dark">
                Benefits of {sec.title.split("(")[0].trim()}
              </h2>
              <Row className="g-4">
                {sec.benefits.map((benefit, index) => (
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
        </div>
      ))}

      {/* 🌍 Global Footer */}
      <section className="py-5 text-center text-white position-relative">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Strengthen Your Security Posture
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Get tailored enterprise security solutions that protect your
            infrastructure, detect threats, and ensure compliance across all levels.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Request a Consultation →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default SecurityServices;
