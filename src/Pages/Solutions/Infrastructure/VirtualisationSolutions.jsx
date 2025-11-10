import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaServer,
  FaDesktop,
  FaCogs,
  FaNetworkWired,
  FaCheckCircle,
  FaCloud,
} from "react-icons/fa";

const VirtualisationSolutions = () => {
  const steps = [
    {
      icon: <FaDesktop className="text-danger" size={40} />,
      title: "Step 1: Assessment & Planning",
      desc: "We evaluate your current infrastructure and identify opportunities to implement virtualisation across desktops, servers, and applications for maximum efficiency.",
    },
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 2: Deployment & Configuration",
      desc: "We design and deploy secure, scalable virtual environments using leading platforms such as VMware, Hyper-V, and Citrix.",
    },
    {
      icon: <FaCogs className="text-danger" size={40} />,
      title: "Step 3: Integration & Optimization",
      desc: "We integrate virtualised systems with your existing IT infrastructure, ensuring high performance, resource optimization, and seamless user access.",
    },
    {
      icon: <FaCloud className="text-danger" size={40} />,
      title: "Step 4: Monitoring & Support",
      desc: "We continuously monitor, maintain, and optimize your virtual environments to ensure uptime, reliability, and security.",
    },
  ];

  const benefits = [
    "Reduced hardware and maintenance costs.",
    "Increased flexibility with scalable virtual environments.",
    "Improved disaster recovery and business continuity.",
    "Enhanced security and centralized management.",
    "Faster deployment of desktops and applications.",
    "Optimized resource utilization across servers and networks.",
  ];

  return (
    <div className="virtualisation-solutions">
      {/* 🌟 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg')",
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
          <FaNetworkWired size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Virtualisation (Desktop / Server / Application)
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Transform your IT infrastructure with advanced virtualisation
            solutions that improve scalability, flexibility, and security across
            desktop, server, and application environments.
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
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
                alt="Virtualisation Solutions"
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
                What is Virtualisation?
              </h2>
              <p className="text-muted mb-3">
                Virtualisation allows multiple virtual machines or applications
                to run on a single physical server, enhancing performance,
                reducing costs, and simplifying management.
              </p>
              <p className="text-muted">
                Our virtualisation services cover Desktop, Server, and
                Application virtualisation, enabling businesses to create agile,
                efficient, and scalable IT ecosystems.
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
            How We Implement Virtualisation Solutions
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
            Benefits of Virtualisation Solutions
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
              "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Optimize Your IT Infrastructure with Virtualisation
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Streamline your operations, reduce costs, and boost productivity
            with our customized Desktop, Server, and Application Virtualisation
            solutions.
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

export default VirtualisationSolutions;
