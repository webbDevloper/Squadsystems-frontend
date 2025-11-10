import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaServer,
  FaCloudUploadAlt,
  FaSyncAlt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const AutomatedServerBackup = () => {
  const steps = [
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 1: Assess Server Backup Requirements",
      desc: "We analyze your server infrastructure to identify critical data, applications, and configurations that require automated backup and recovery.",
    },
    {
      icon: <FaCloudUploadAlt className="text-danger" size={40} />,
      title: "Step 2: Configure Automated Server Backup",
      desc: "Our team sets up secure automated backup routines that store your server data locally or in the cloud, ensuring minimal downtime.",
    },
    {
      icon: <FaSyncAlt className="text-danger" size={40} />,
      title: "Step 3: Scheduled Synchronization",
      desc: "Backups are scheduled automatically to ensure your server data is always up-to-date and protected against accidental loss or corruption.",
    },
    {
      icon: <FaShieldAlt className="text-danger" size={40} />,
      title: "Step 4: Monitoring & Verification",
      desc: "We monitor server backup tasks, verify integrity, and provide reports to guarantee successful backups and rapid recovery when needed.",
    },
  ];

  const benefits = [
    "Protects critical server data against system failure or disasters.",
    "Automates backup processes to reduce manual errors and intervention.",
    "Supports cloud and local backup solutions for flexibility.",
    "Ensures rapid recovery and minimal downtime during disruptions.",
    "Regular monitoring maintains data integrity and reliability.",
    "Scalable for enterprise servers, virtual machines, and hybrid environments.",
  ];

  return (
    <div className="automated-server-backup">
      {/* 🚀 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg')",
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
          <FaServer size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Automated Server Backup
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Safeguard your server infrastructure with automated backup solutions that ensure security, reliability, and quick recovery for critical business data.
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
                src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg"
                alt="Automated Server Backup Illustration"
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
                What is Automated Server Backup?
              </h2>
              <p className="text-muted mb-3">
                Automated Server Backup solutions continuously protect your server data, applications, and configurations, ensuring operational continuity and minimizing risks of data loss.
              </p>
              <p className="text-muted">
                Our system schedules regular backups, monitors backup tasks, and ensures fast recovery in case of server failure, data corruption, or disasters.
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
            How We Implement Automated Server Backup
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
            Key Benefits of Automated Server Backup
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
            Keep Your Servers Safe with Automated Backups
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Protect your servers from data loss with automated backups. Ensure business continuity, fast recovery, and peace of mind for your IT infrastructure.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Schedule a Backup Setup →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default AutomatedServerBackup;
