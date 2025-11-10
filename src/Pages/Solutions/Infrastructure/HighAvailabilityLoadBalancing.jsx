import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaServer,
  FaBalanceScale,
  FaNetworkWired,
  FaCogs,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const HighAvailabilityLoadBalancing = () => {
  const steps = [
    {
      icon: <FaNetworkWired className="text-danger" size={40} />,
      title: "Step 1: Infrastructure Assessment",
      desc: "We assess your existing infrastructure to identify potential single points of failure and evaluate the current load management efficiency.",
    },
    {
      icon: <FaBalanceScale className="text-danger" size={40} />,
      title: "Step 2: Architecture Design",
      desc: "Our experts design a high-availability architecture with redundant systems, failover clusters, and load balancing for optimal performance.",
    },
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 3: Implementation & Integration",
      desc: "We implement load balancing solutions across servers and networks, ensuring fault tolerance, seamless traffic distribution, and uptime reliability.",
    },
    {
      icon: <FaCogs className="text-danger" size={40} />,
      title: "Step 4: Monitoring & Optimization",
      desc: "We continuously monitor performance and optimize configurations to maintain consistent availability and responsiveness under varying loads.",
    },
  ];

  const benefits = [
    "Ensures 24/7 uptime and uninterrupted service delivery.",
    "Prevents downtime with automatic failover and redundancy.",
    "Balances network and server traffic efficiently.",
    "Improves scalability to handle increasing workloads.",
    "Enhances system resilience and disaster recovery readiness.",
    "Optimizes performance and user experience across applications.",
  ];

  return (
    <div className="high-availability-load-balancing">
      {/* 🌟 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg')",
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
          <FaBalanceScale size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            High Availability & Load Balancing
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Build a resilient IT infrastructure that guarantees uptime, stability, and performance through advanced high-availability and load balancing technologies.
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
                alt="High Availability & Load Balancing"
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
                What is High Availability & Load Balancing?
              </h2>
              <p className="text-muted mb-3">
                High Availability ensures continuous system operation even in the event of hardware or software failure, while Load Balancing distributes workloads evenly across servers for optimized performance.
              </p>
              <p className="text-muted">
                Our solutions combine fault-tolerant architecture with intelligent load distribution, guaranteeing maximum uptime, data integrity, and business continuity.
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
            How We Implement High Availability & Load Balancing
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
            Benefits of High Availability & Load Balancing
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
            Keep Your Systems Always Available & Reliable
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Enhance your system reliability and performance with robust High Availability and Load Balancing solutions designed for modern enterprise environments.
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

export default HighAvailabilityLoadBalancing;
