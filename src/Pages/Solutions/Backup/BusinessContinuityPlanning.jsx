import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaProjectDiagram,
  FaShieldAlt,
  FaClipboardCheck,
  FaSyncAlt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const BusinessContinuityPlanning = () => {
  const steps = [
    {
      icon: <FaProjectDiagram className="text-danger" size={40} />,
      title: "Step 1: Risk Assessment & Analysis",
      desc: "We analyze your critical business processes, identify vulnerabilities, and assess potential risks to prepare a resilient continuity plan.",
    },
    {
      icon: <FaClipboardCheck className="text-danger" size={40} />,
      title: "Step 2: Plan Development",
      desc: "We create comprehensive continuity strategies, including recovery procedures, backup protocols, and emergency response measures tailored to your organization.",
    },
    {
      icon: <FaSyncAlt className="text-danger" size={40} />,
      title: "Step 3: Implementation & Integration",
      desc: "Our team integrates BCP procedures into your daily operations, ensuring seamless response during disruptions and minimal impact on business activities.",
    },
    {
      icon: <FaChartLine className="text-danger" size={40} />,
      title: "Step 4: Testing, Training & Monitoring",
      desc: "We conduct simulation exercises, staff training, and continuous monitoring to ensure your organization is fully prepared for any disruption.",
    },
  ];

  const benefits = [
    "Minimizes downtime and ensures operational continuity.",
    "Protects critical business processes and data assets.",
    "Supports regulatory compliance and industry standards.",
    "Enhances organizational resilience against unexpected events.",
    "Improves stakeholder confidence and customer trust.",
    "Provides clear procedures for disaster recovery and emergency response.",
  ];

  return (
    <div className="business-continuity-planning">
      {/* 🚀 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')",
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
            Business Continuity Planning
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Prepare your organization to withstand disruptions and maintain
            critical operations with our comprehensive Business Continuity
            Planning solutions.
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Business Continuity Planning Illustration"
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
                What is Business Continuity Planning?
              </h2>
              <p className="text-muted mb-3">
                Business Continuity Planning (BCP) is a proactive approach to
                ensure that critical business functions continue during and after
                a disruption. It involves risk analysis, contingency planning, and
                emergency response strategies.
              </p>
              <p className="text-muted">
                Our solutions help organizations maintain operations, protect
                assets, and recover quickly from unexpected events like cyber
                incidents, natural disasters, or system failures.
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
            How We Implement Business Continuity Planning
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
            Key Benefits of Business Continuity Planning
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
              "url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Ensure Business Continuity — Prepare Today
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Protect your organization from unexpected disruptions with a
            structured continuity plan. Maintain operations, safeguard assets,
            and build resilience with our BCP services.
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

export default BusinessContinuityPlanning;
