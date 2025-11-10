import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaCloud,
  FaServer,
  FaSyncAlt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const DisasterRecoverySolutions = () => {
  const steps = [
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 1: Risk & Impact Assessment",
      desc: "We analyze your IT infrastructure to identify potential risks and evaluate the business impact of downtime, helping define your recovery priorities.",
    },
    {
      icon: <FaCloud className="text-danger" size={40} />,
      title: "Step 2: Strategy Design & Planning",
      desc: "Our team designs a tailored disaster recovery strategy that includes RTO/RPO targets, backup frequency, and cloud or hybrid recovery options.",
    },
    {
      icon: <FaSyncAlt className="text-danger" size={40} />,
      title: "Step 3: Implementation & Automation",
      desc: "We implement automated backup replication, failover mechanisms, and system redundancy to ensure rapid recovery and minimal downtime.",
    },
    {
      icon: <FaShieldAlt className="text-danger" size={40} />,
      title: "Step 4: Testing & Maintenance",
      desc: "Regular disaster recovery drills and maintenance ensure your systems remain resilient and recovery-ready at all times.",
    },
  ];

  const benefits = [
    "Ensures business continuity and minimizes downtime during disasters.",
    "Protects critical data through regular and automated backups.",
    "Reduces financial and operational losses with rapid recovery.",
    "Provides flexibility with cloud, on-premise, or hybrid recovery setups.",
    "Supports compliance with data protection and disaster recovery standards.",
    "Scalable for businesses of any size or infrastructure complexity.",
  ];

  return (
    <div className="disaster-recovery-solutions">
      {/* 🌟 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5325082/pexels-photo-5325082.jpeg')",
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
          <FaCloud size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Disaster Recovery Solutions
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Empower your business with robust disaster recovery strategies that
            ensure continuous operations and data protection, even during
            unexpected outages.
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

      {/* 💡 ABOUT SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
                alt="Disaster Recovery Solutions"
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
                What are Disaster Recovery Solutions?
              </h2>
              <p className="text-muted mb-3">
                Disaster Recovery Solutions (DRS) are strategies and
                technologies that enable businesses to recover data, restore
                operations, and minimize downtime after natural or
                man-made disruptions.
              </p>
              <p className="text-muted">
                Our Disaster Recovery offerings combine automation, cloud
                redundancy, and proactive monitoring to help your business
                remain operational — no matter what challenges arise.
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
            How We Implement Disaster Recovery
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
            Key Benefits of Disaster Recovery Solutions
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
              "url('https://images.pexels.com/photos/1181310/pexels-photo-1181310.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Ensure Business Continuity with Disaster Recovery
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Don’t let unexpected events stop your business. Our disaster
            recovery strategies guarantee resilience, reliability, and rapid
            recovery for all your critical operations.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Schedule a Free Consultation →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default DisasterRecoverySolutions;
