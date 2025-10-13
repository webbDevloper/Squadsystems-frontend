import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaDatabase,
  FaSyncAlt,
  FaCloudUploadAlt,
  FaServer,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const DataReplicationAutoLoaders = () => {
  const steps = [
    {
      icon: <FaDatabase className="text-danger" size={40} />,
      title: "Step 1: Assessment & Planning",
      desc: "We analyze your data architecture and identify systems where replication and automated loaders will enhance reliability and scalability.",
    },
    {
      icon: <FaCloudUploadAlt className="text-danger" size={40} />,
      title: "Step 2: Configure Data Pipelines",
      desc: "Our team sets up secure, automated pipelines that replicate data across databases, data warehouses, and cloud platforms with zero downtime.",
    },
    {
      icon: <FaSyncAlt className="text-danger" size={40} />,
      title: "Step 3: Real-Time Synchronization",
      desc: "We implement continuous synchronization to ensure all systems stay updated, maintaining consistency and accuracy across environments.",
    },
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 4: Monitoring & Optimization",
      desc: "Automated monitoring tools track replication performance, detect failures, and trigger alerts for proactive issue resolution.",
    },
  ];

  const benefits = [
    "Ensures high availability and fault tolerance of critical data.",
    "Eliminates manual intervention with automated data loaders.",
    "Enhances data consistency across multiple systems and platforms.",
    "Improves backup and disaster recovery capabilities.",
    "Supports real-time analytics and reporting across global servers.",
    "Scalable for enterprise data environments and cloud migrations.",
  ];

  return (
    <div className="data-replication-auto-loaders">
      {/* 🚀 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg')",
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
            Data Replication & Auto Loaders
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Ensure seamless data synchronization and high availability with
            automated data replication and loader systems designed for
            performance, accuracy, and scalability.
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
                src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
                alt="Data Replication Illustration"
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
                What is Data Replication & Auto Loaders?
              </h2>
              <p className="text-muted mb-3">
                Data Replication and Auto Loaders are critical technologies that
                ensure data is copied, synchronized, and available across multiple
                systems or environments — enabling resilience, speed, and
                reliability for businesses handling large datasets.
              </p>
              <p className="text-muted">
                Our automated data loaders streamline data movement, eliminate
                manual processes, and ensure continuous updates across local and
                cloud-based storage systems.
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
            How We Implement Data Replication & Auto Loaders
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
            Key Benefits of Data Replication & Auto Loaders
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
              "url('https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Automate, Replicate & Optimize Your Data Workflows
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Simplify data management with our advanced replication and auto
            loader systems — ensuring consistency, performance, and business
            continuity across platforms.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Schedule a Demo →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default DataReplicationAutoLoaders;
