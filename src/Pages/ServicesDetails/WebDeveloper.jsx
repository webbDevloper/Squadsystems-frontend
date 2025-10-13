import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  FaLaptopCode,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaMobileAlt,
  FaTools,
  FaProjectDiagram,
  FaUserCog,
  FaCogs,
  FaCodeBranch,
} from "react-icons/fa";

const WebDeveloper = () => {
  const services = [
    {
      icon: <FaLaptopCode size={50} style={{ color: '#800000' }} />,
      title: "Frontend Development",
      description:
        "Build responsive, interactive, and user-friendly interfaces with modern JavaScript libraries and frameworks like React.js, Angular, and Vue.js.",
    },
    {
      icon: <FaPaintBrush size={50} style={{ color: '#800000' }} />,
      title: "UI/UX Design",
      description:
        "Craft visually appealing designs and enhance user experience through intuitive layouts, color theory, typography, and accessibility best practices.",
    },
    {
      icon: <FaServer size={50} style={{ color: '#800000' }} />,
      title: "Backend Integration",
      description:
        "Connect your applications with robust APIs, implement authentication/authorization, and manage server-side logic for seamless performance.",
    },
    {
      icon: <FaDatabase size={50} style={{ color: '#800000' }} />,
      title: "Database Management",
      description:
        "Design, implement, and optimize relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases for scalability, performance, and reliability.",
    },
    {
      icon: <FaCloud size={50} style={{ color: '#800000' }} />,
      title: "Cloud Deployment",
      description:
        "Deploy applications on AWS, Azure, or Google Cloud. Implement CI/CD pipelines and containerization with Docker & Kubernetes for scalability.",
    },
    {
      icon: <FaShieldAlt size={50} style={{ color: '#800000' }} />,
      title: "Web Security",
      description:
        "Implement secure authentication, SSL/TLS, firewalls, and OWASP-based best practices to protect applications from vulnerabilities.",
    },
    {
      icon: <FaMobileAlt size={50} style={{ color: '#800000' }} />,
      title: "Mobile App Development",
      description:
        "Develop cross-platform mobile apps with React Native or Flutter, ensuring smooth user experiences on Android and iOS.",
    },
    {
      icon: <FaTools size={50} style={{ color: '#800000' }} />,
      title: "DevOps & Automation",
      description:
        "Streamline workflows with CI/CD, automated testing, and infrastructure as code using Jenkins, GitHub Actions, and Ansible.",
    },
    {
      icon: <FaProjectDiagram size={50} style={{ color: '#800000' }} />,
      title: "System Architecture",
      description:
        "Design scalable system architectures with microservices, event-driven systems, and distributed computing models.",
    },
    {
      icon: <FaUserCog size={50} style={{ color: '#800000' }} />,
      title: "CMS Development",
      description:
        "Customize and build content management systems (WordPress, Strapi, Ghost) for easy content updates and scalability.",
    },
    {
      icon: <FaCogs size={50} style={{ color: '#800000' }} />,
      title: "API Development",
      description:
        "Develop RESTful and GraphQL APIs with secure endpoints, rate-limiting, and documentation using Swagger/OpenAPI.",
    },
    {
      icon: <FaCodeBranch size={50} style={{ color: '#800000' }} />,
      title: "Version Control & Collaboration",
      description:
        "Manage code with Git and GitHub/GitLab. Implement branching strategies, code reviews, and CI/CD integrations for teamwork.",
    },
  ];

  const technologies = [
    "MERN Stack",
    "Next.js",
    "Angular",
    "Vue.js",
    "React Native",
    "Flutter",
    "Node.js",
    "Django",
    "Spring Boot",
    "AWS",
    "Docker",
    "Kubernetes",
  ];

  return (
    <Container className="py-5 bg-light">
      <h1 className="text-center mb-4" style={{ color: '#800000' }}>
        Web Developer Services
      </h1>
      <p className="text-center text-secondary mb-5">
        Offering end-to-end web development solutions including frontend,
        backend, cloud, databases, and security. Tailored services to help your
        business scale efficiently and securely.
      </p>

      {/* Services Section */}
      <Row className="g-4">
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 border-0 shadow-sm bg-light">
              <Card.Body>
                <div className="text-center mb-3">{service.icon}</div>
                <Card.Title className="text-center" style={{ color: '#800000' }}>
                  {service.title}
                </Card.Title>
                <Card.Text className="text-center text-secondary">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Technologies Section */}
      <div className="mt-5">
        <h2 className="text-center mb-4" style={{ color: '#800000' }}>
          Technologies We Use
        </h2>
        <Row className="justify-content-center">
          {technologies.map((tech, idx) => (
            <Col xs={6} md={3} className="mb-3" key={idx}>
              <Card className="border-0 shadow-sm text-center bg-white py-3">
                <Card.Body>
                  <span className="fw-bold text-secondary">{tech}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Contact Us Button */}
      <div className="text-center mt-5">
        <Link to="/contact">
          <Button variant="secondary" className="bg-danger border-0 px-4 py-2">
            Contact Us
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default WebDeveloper;
