import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaNetworkWired,
  FaChartLine,
  FaServer,
  FaCogs,
  FaCheckCircle,
  FaWifi,
} from "react-icons/fa";

const BandwidthAnalysis = () => {
  const steps = [
    {
      icon: <FaNetworkWired className="text-danger" size={40} />,
      title: "Step 1: Network Discovery & Mapping",
      desc: "We analyze your entire network topology to identify traffic flow, endpoints, and bandwidth-consuming resources.",
    },
    {
      icon: <FaChartLine className="text-danger" size={40} />,
      title: "Step 2: Data Collection & Monitoring",
      desc: "Using intelligent tools, we collect real-time traffic data and performance metrics for in-depth bandwidth visibility.",
    },
    {
      icon: <FaCogs className="text-danger" size={40} />,
      title: "Step 3: Bandwidth Optimization",
      desc: "We implement QoS rules, traffic shaping, and load balancing strategies to optimize performance and reduce latency.",
    },
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 4: Reporting & Continuous Management",
      desc: "Comprehensive analytics dashboards and reports ensure consistent monitoring, scaling, and proactive issue prevention.",
    },
  ];

  const benefits = [
    "Enhances network efficiency by identifying and eliminating bandwidth bottlenecks.",
    "Enables proactive monitoring of critical applications and devices in real-time.",
    "Supports scalability and business continuity through optimized traffic management.",
    "Reduces operational costs by improving network resource utilization.",
    "Ensures seamless user experience even during peak usage periods.",
    "Customizable dashboards for transparent performance analytics and SLA compliance.",
  ];

  return (
    <div className="bandwidth-analysis">
      {/* 🌟 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5077044/pexels-photo-5077044.jpeg')",
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
          <FaWifi size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Bandwidth Analysis & Management
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Gain real-time visibility into network traffic, optimize resource
            allocation, and ensure high performance through intelligent
            bandwidth analysis and management solutions.
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
                src="https://images.pexels.com/photos/5077044/pexels-photo-5077044.jpeg"
                alt="Bandwidth Analysis Illustration"
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
                What is Bandwidth Analysis & Management?
              </h2>
              <p className="text-muted mb-3">
                Bandwidth Analysis & Management focuses on monitoring,
                measuring, and optimizing network bandwidth usage. It ensures
                that critical applications and users receive the necessary
                network resources without degradation.
              </p>
              <p className="text-muted">
                Our solutions offer dynamic traffic prioritization, automated
                alerts, and insightful analytics — helping you maximize network
                performance, security, and reliability.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ⚙️ IMPLEMENTATION STEPS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark">
            <FaCogs className="text-danger me-2" />
            How We Manage Bandwidth Efficiently
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
            Key Benefits of Bandwidth Management
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
              "url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Take Control of Your Network Performance
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Streamline network operations and ensure peak efficiency with
            intelligent bandwidth management solutions tailored to your business
            needs.
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

export default BandwidthAnalysis;
