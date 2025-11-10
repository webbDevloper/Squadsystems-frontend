import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaChartLine,
  FaServer,
  FaCogs,
  FaNetworkWired,
  FaSignal,
  FaBell,
  FaCheckCircle,
  FaLock,
} from "react-icons/fa";

const NetworkPerformanceManagement = () => {
  // -------------------- Data --------------------
  const sections = [
    {
      id: "real-time-monitoring",
      title: "Real-Time Network Monitoring",
      desc: "Gain instant visibility into your network’s health and performance to identify issues before they impact users.",
      img: "https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg",
      infoTitle: "What is Network Performance Monitoring?",
      infoDesc: [
        "Network Performance Monitoring provides real-time visibility into the performance of network devices, servers, and applications.",
        "Our tools enable proactive detection of latency, packet loss, and bandwidth issues to ensure consistent uptime and reliability.",
      ],
      steps: [
        {
          icon: <FaTachometerAlt className="text-danger" size={40} />,
          title: "Monitor Key Metrics",
          desc: "Track latency, packet loss, bandwidth utilization, and connection stability continuously.",
        },
        {
          icon: <FaChartLine className="text-danger" size={40} />,
          title: "Identify Bottlenecks",
          desc: "Pinpoint performance degradation or misconfigurations through intelligent analytics.",
        },
        {
          icon: <FaServer className="text-danger" size={40} />,
          title: "Optimize Infrastructure",
          desc: "Adjust network configurations and load balancing for smoother operations.",
        },
        {
          icon: <FaBell className="text-danger" size={40} />,
          title: "Automated Alerts",
          desc: "Receive instant alerts on anomalies or threshold breaches for quick resolution.",
        },
      ],
      benefits: [
        "Improves network uptime and reliability.",
        "Detects performance issues before users are affected.",
        "Reduces troubleshooting time with detailed insights.",
        "Ensures optimal bandwidth utilization.",
        "Supports capacity planning and scaling.",
        "Enhances end-user experience with stable connectivity.",
      ],
    },
    {
      id: "traffic-optimization",
      title: "Traffic Optimization & Load Balancing",
      desc: "Balance network traffic effectively across devices and servers to maximize efficiency and prevent congestion.",
      img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      infoTitle: "Why Traffic Optimization Matters",
      infoDesc: [
        "Efficient traffic management reduces latency, prevents bottlenecks, and ensures smooth user access to resources.",
        "We implement intelligent routing and load balancing to optimize bandwidth and resource utilization.",
      ],
      steps: [
        {
          icon: <FaNetworkWired className="text-danger" size={40} />,
          title: "Analyze Traffic Patterns",
          desc: "Study data flow and usage behavior across your entire network ecosystem.",
        },
        {
          icon: <FaCogs className="text-danger" size={40} />,
          title: "Implement Load Balancing",
          desc: "Distribute workloads evenly across servers and applications for consistent performance.",
        },
        {
          icon: <FaSignal className="text-danger" size={40} />,
          title: "Bandwidth Allocation",
          desc: "Prioritize business-critical applications through dynamic bandwidth management.",
        },
        {
          icon: <FaChartLine className="text-danger" size={40} />,
          title: "Continuous Optimization",
          desc: "Leverage analytics and AI-based recommendations to enhance network throughput.",
        },
      ],
      benefits: [
        "Prevents network congestion and downtime.",
        "Improves data delivery and transfer speeds.",
        "Optimizes bandwidth and resource utilization.",
        "Enhances performance for cloud and hybrid environments.",
        "Supports scalability and future growth.",
        "Reduces operational costs by automating optimization.",
      ],
    },
  ];

  // -------------------- Render --------------------
  return (
    <div className="network-performance">
      {/* 🌟 Global Hero Section */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "35vh",
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
          <FaLock size={50} className="text-danger mb-3" />
          <h1 className="display-6 fw-bold mb-3 text-uppercase">
            Network Performance Management
          </h1>
          <p
            className="lead mx-auto text-light"
            style={{ maxWidth: "700px", lineHeight: "1.5" }}
          >
            Monitor, analyze, and optimize your network infrastructure for
            improved performance, reliability, and business continuity.
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

      {/* 🧱 Sections */}
      {sections.map((sec, i) => (
        <div key={sec.id} id={sec.id}>
          {/* Info Section */}
          <section className={`py-5 ${i % 2 === 0 ? "bg-light" : ""}`}>
            <Container>
              <Row className="align-items-center">
                <Col md={6}>
                  <img
                    src={sec.img}
                    alt={sec.title}
                    className="img-fluid rounded shadow-lg border border-2 border-danger-subtle"
                  />
                </Col>
                <Col md={6}>
                  <h2 className="fw-bold text-danger mb-3">{sec.infoTitle}</h2>
                  {sec.infoDesc.map((p, idx) => (
                    <p key={idx} className="text-muted">
                      {p}
                    </p>
                  ))}
                </Col>
              </Row>
            </Container>
          </section>

          {/* Steps Section */}
          <section className="py-5">
            <Container>
              <h2 className="fw-bold text-center mb-5 text-dark">
                How We Implement {sec.title.split("(")[0].trim()}
              </h2>
              <Row className="g-4">
                {sec.steps.map((step, index) => (
                  <Col md={6} lg={3} key={index}>
                    <Card className="border-0 shadow-sm text-center h-100">
                      <Card.Body>
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

          {/* Benefits Section */}
          <section className={`py-5 ${i % 2 === 0 ? "" : "bg-light"}`}>
            <Container>
              <h2 className="fw-bold text-center mb-5 text-dark">
                Benefits of {sec.title.split("(")[0].trim()}
              </h2>
              <Row className="g-4">
                {sec.benefits.map((benefit, index) => (
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
        </div>
      ))}

      {/* 🌍 Global Footer */}
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
            Boost Your Network Efficiency
          </h2>
          <p
            className="lead mb-4 mx-auto"
            style={{ maxWidth: "720px", color: "#e0e0e0" }}
          >
            Ensure seamless performance, reduce downtime, and enhance
            productivity with our end-to-end Network Performance Management
            solutions.
          </p>
          <Button
            variant="danger"
            size="lg"
            className="px-5 py-3 fw-semibold shadow-lg border-0"
            href="/contact"
          >
            Request a Consultation →
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default NetworkPerformanceManagement;
