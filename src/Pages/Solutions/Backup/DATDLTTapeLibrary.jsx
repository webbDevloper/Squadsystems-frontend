import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaDatabase,
  FaHdd,
  FaExchangeAlt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const DATDLTTapeLibrary = () => {
  const steps = [
    {
      icon: <FaDatabase className="text-danger" size={40} />,
      title: "Step 1: Assess Backup Requirements",
      desc: "We evaluate your organization’s storage needs and retention policies to determine the right DAT, DLT, or tape library solution for optimal performance and reliability.",
    },
    {
      icon: <FaHdd className="text-danger" size={40} />,
      title: "Step 2: Configure Tape Library System",
      desc: "Our experts install and configure automated tape libraries, ensuring secure and organized data archiving with minimal manual intervention.",
    },
    {
      icon: <FaExchangeAlt className="text-danger" size={40} />,
      title: "Step 3: Implement Backup Scheduling",
      desc: "We automate data transfer to tapes through scheduled backups to ensure consistency, reliability, and efficient data retrieval when required.",
    },
    {
      icon: <FaShieldAlt className="text-danger" size={40} />,
      title: "Step 4: Test and Verify Data Integrity",
      desc: "Each backup cycle undergoes verification to confirm data integrity and ensure that your critical files are protected and recoverable at any time.",
    },
  ];

  const benefits = [
    "Provides cost-effective, long-term data archiving and storage.",
    "Ensures secure offline backups, protected from cyber threats.",
    "Supports high-capacity storage with scalable tape library systems.",
    "Automates backup scheduling for reduced manual intervention.",
    "Facilitates quick recovery and efficient data management.",
    "Ideal for enterprises with compliance and audit requirements.",
  ];

  return (
    <div className="dat-dlt-tape-library">
      {/* 🚀 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg')",
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
          <FaHdd size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            DAT / DLT / Tape Library
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Reliable and scalable data archiving solutions with DAT, DLT, and Tape Library systems to ensure secure, long-term data protection and recovery.
          </p>
          <Button
            variant="danger"
            size="sm"
            className="mt-2 px-4 py-2 fw-semibold shadow-sm border-0"
            href="/contact"
          >
            Learn More →
          </Button>
        </Container>
      </section>

      {/* 💡 ABOUT SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
                alt="DAT DLT Tape Library"
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
                What is DAT / DLT / Tape Library?
              </h2>
              <p className="text-muted mb-3">
                DAT (Digital Audio Tape) and DLT (Digital Linear Tape) libraries provide a secure and scalable way to back up large volumes of data. These tape-based storage systems are trusted for long-term archival and recovery purposes.
              </p>
              <p className="text-muted">
                Our solutions ensure that your organization’s data is safely stored, efficiently managed, and easily accessible when needed, with minimal downtime and maximum security.
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
            How We Implement DAT / DLT / Tape Library Solutions
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
            Key Benefits of DAT / DLT / Tape Library Solutions
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
            Reliable Data Archiving with DAT, DLT & Tape Libraries
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Secure your business data with scalable tape library solutions.
            Achieve long-term storage, compliance, and peace of mind.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Get a Free Consultation →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default DATDLTTapeLibrary;
