import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaServer,
  FaDatabase,
  FaHdd,
  FaCloud,
  FaCheckCircle,
  FaNetworkWired,
} from "react-icons/fa";

const DataStorageSolutions = () => {
  const steps = [
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 1: Assessment & Planning",
      desc: "We evaluate your existing infrastructure and business needs to recommend the best storage architecture — NAS, SAN, or Unified solutions.",
    },
    {
      icon: <FaDatabase className="text-danger" size={40} />,
      title: "Step 2: Architecture Design",
      desc: "Our engineers design a scalable, high-performance storage system that ensures fast data access, redundancy, and security.",
    },
    {
      icon: <FaHdd className="text-danger" size={40} />,
      title: "Step 3: Deployment & Integration",
      desc: "We implement your storage solution with seamless integration into your existing IT systems, ensuring data migration and minimal downtime.",
    },
    {
      icon: <FaNetworkWired className="text-danger" size={40} />,
      title: "Step 4: Monitoring & Optimization",
      desc: "Continuous monitoring, performance tuning, and proactive maintenance to keep your data storage system operating at peak efficiency.",
    },
  ];

  const benefits = [
    "Centralized and efficient data management for enterprises of all sizes.",
    "Scalable storage capacity that grows with your business demands.",
    "Enhanced data protection through redundancy and automated backups.",
    "Supports both structured and unstructured data across hybrid environments.",
    "Improves collaboration and accessibility across multiple departments.",
    "Optimized for virtualization, database hosting, and cloud workloads.",
  ];

  return (
    <div className="data-storage-solutions">
      {/* 🌟 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/288122/pexels-photo-288122.jpeg')",
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
          <FaDatabase size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            NAS / SAN / Unified Data Storage Solutions
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Optimize your business operations with reliable, high-speed, and
            scalable NAS, SAN, and Unified Data Storage systems built to secure
            your critical business data and improve accessibility.
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
                src="https://images.pexels.com/photos/288123/pexels-photo-288123.jpeg"
                alt="Data Storage Solutions"
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
                What are NAS, SAN & Unified Storage Solutions?
              </h2>
              <p className="text-muted mb-3">
                Network Attached Storage (NAS), Storage Area Network (SAN), and
                Unified Storage systems are advanced data storage technologies
                that enable businesses to efficiently manage, store, and access
                large volumes of data.
              </p>
              <p className="text-muted">
                Our solutions deliver seamless integration, high availability,
                and secure storage that supports virtualized environments, data
                analytics, and business-critical applications with maximum
                uptime.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ⚙️ IMPLEMENTATION STEPS */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 text-dark">
            <FaHdd className="text-danger me-2" />
            How We Implement Data Storage Solutions
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
            Key Benefits of NAS/SAN/Unified Storage Solutions
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
              "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Modernize Your Data Infrastructure Today
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Transform your organization with reliable, high-performance NAS/SAN
            and unified storage solutions that ensure data security, speed, and
            scalability.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Talk to Our Experts →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default DataStorageSolutions;
