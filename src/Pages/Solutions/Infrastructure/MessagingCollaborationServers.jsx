import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaComments,
  FaServer,
  FaUsersCog,
  FaSyncAlt,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const MessagingCollaborationServers = () => {
  const steps = [
    {
      icon: <FaServer className="text-danger" size={40} />,
      title: "Step 1: Requirement Assessment",
      desc: "We analyze your organization’s communication needs to determine the best-fit messaging and collaboration platform — on-premises, cloud, or hybrid.",
    },
    {
      icon: <FaComments className="text-danger" size={40} />,
      title: "Step 2: Server Setup & Configuration",
      desc: "We deploy and configure secure mail and chat servers such as Microsoft Exchange, Zimbra, or other enterprise-grade collaboration tools.",
    },
    {
      icon: <FaUsersCog className="text-danger" size={40} />,
      title: "Step 3: Integration & Access Control",
      desc: "Our team integrates collaboration servers with Active Directory, security gateways, and mobile devices for seamless, controlled access.",
    },
    {
      icon: <FaSyncAlt className="text-danger" size={40} />,
      title: "Step 4: Testing, Training & Support",
      desc: "Comprehensive testing ensures smooth communication flow, followed by user training and post-deployment support for optimal efficiency.",
    },
  ];

  const benefits = [
    "Centralized communication and collaboration for teams across locations.",
    "Secure and reliable email, messaging, and file-sharing systems.",
    "Integration with calendars, contacts, and workflow tools.",
    "Improved productivity and coordination across departments.",
    "High scalability and support for hybrid or cloud-based deployments.",
    "Robust data protection with encryption and access management.",
  ];

  return (
    <div className="messaging-collaboration-servers">
      {/* 🌟 HERO SECTION */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')",
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
          <FaComments size={45} className="text-danger mb-2" />
          <h1 className="h4 fw-bold mb-2 text-uppercase">
            Messaging & Collaboration Servers
          </h1>
          <p
            className="small mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Empower your organization with seamless communication, collaboration,
            and data sharing through secure, scalable messaging and collaboration
            server solutions.
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
                src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg"
                alt="Messaging & Collaboration Servers"
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
                What are Messaging & Collaboration Servers?
              </h2>
              <p className="text-muted mb-3">
                Messaging and Collaboration Servers provide a centralized platform
                for communication through emails, chats, calendars, and shared workspaces,
                helping teams stay connected and productive.
              </p>
              <p className="text-muted">
                Our solutions ensure reliability, data security, and smooth
                collaboration across all your business units, enabling efficient
                internal and external communication.
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
            How We Implement Messaging & Collaboration Servers
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
            Key Benefits of Messaging & Collaboration Servers
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
              "url('https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <Container className="position-relative z-2">
          <h2 className="fw-bold display-6 mb-3">
            Empower Your Team with Smarter Collaboration
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Streamline communication, enhance teamwork, and protect your enterprise
            data with modern Messaging and Collaboration Server solutions.
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

export default MessagingCollaborationServers;
