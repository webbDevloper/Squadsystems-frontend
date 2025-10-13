import { Link } from "react-router-dom";
import { FaShieldAlt, FaDatabase, FaServer, FaTools } from "react-icons/fa";

const Solutions = () => {
  const solutions = [
    {
      icon: <FaShieldAlt size={40} className="text-red-600" />,
      title: "Security",
      description:
        "Comprehensive security solutions to safeguard your business with advanced protection, real-time monitoring, data encryption, and proactive threat detection. Our services ensure compliance, resilience against cyberattacks, and 24/7 support to keep your operations secure and uninterrupted.",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      items: [
        "2 Factor Authentication",
        "Anti-spam Solutions",
        "Advanced Threat Protection",
        "Anti-virus Protection",
        "Bandwidth Analysis & Management",
        "Data Leakage Prevention",
        "Email Monitoring & Control",
        "Encryption, Gateway Firewalls/UTM",
        "Intrusion Detection & Prevention",
        "PIM, SIEM, VPNs",
        "Web Surfing Management",
      ],
      caseStudy:
        "Enhanced enterprise security by 70% with our multi-layered protection solutions.",
      link: "/solutions/security",
    },
    {
      icon: <FaDatabase size={40} className="text-red-600" />,
      title: "Backup",
      description:
        "Reliable and automated backup solutions to ensure business continuity and disaster recovery.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      items: [
        "Data Replication, Auto Loaders",
        "Business Continuity Planning",
        "Automated Desktop/Laptop Backup",
        "Automated Server Backup",
        "DAT/DLT/Tape Library",
        "Disaster Recovery Solutions",
        "NAS/SAN/Unified Data Storage Solutions",
      ],
      caseStudy:
        "Achieved 99.9% uptime by implementing automated backup and disaster recovery.",
      link: "/solutions/backup",
    },
    {
      icon: <FaServer size={40} className="text-red-600" />,
      title: "Infrastructure",
      description:
        "End-to-end infrastructure solutions to build scalable, secure, and high-performing IT environments.",
      image: "https://images.pexels.com/photos/11813164/pexels-photo-11813164.jpeg",
      items: [
        "Active Directory, Database Servers",
        "Virtualisation (Desktop/Server/Application)",
        "High Availability & Load Balancing",
        "Messaging & Collaboration Servers",
        "Network Performance Management",
        "Office Automation Applications",
        "Switches/Routers, System Management Tools",
        "Video/Print/Web Publishing",
        "Wireless LAN",
      ],
      caseStudy:
        "Reduced infrastructure costs by 40% with virtualization and automation.",
      link: "/solutions/infrastructure",
    },
    {
      icon: <FaTools size={40} className="text-red-600" />,
      title: "Services",
      description:
        "Expert IT services including consultancy, training, implementation, and troubleshooting support.",
      image: "https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg",
      items: [
        "Administration Training",
        "Consultancy",
        "Data Classification",
        "Implementation Services",
        "Post Implementation Support",
        "Troubleshooting Support",
      ],
      caseStudy:
        "Increased IT efficiency by 55% through dedicated consultancy and support services.",
      link: "/solutions/services",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ✨ New Hero Section with Background Image */}
      {/* <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/11813164/pexels-photo-11813164.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Innovative IT Solutions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Empowering businesses with secure, scalable, and smart technology solutions tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            Explore Now →
          </Link>
        </div>
      </section> */}

      {/* Existing Hero Section (No changes) */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-red-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We provide complete IT solutions covering hardware, infrastructure,
            security, backup, and support services to ensure your business runs
            smoothly and securely.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Text Section */}
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{solution.icon}</div>
                    <h2 className="text-3xl font-bold">{solution.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Key Offerings:
                    </h3>
                    <ul className="space-y-2">
                      {solution.items.map((item, i) => {
                        const itemSlug = item
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^\w-]+/g, "");
                        return (
                          <li key={i} className="flex items-center text-sm">
                            <span className="text-red-600 mr-2">✓</span>
                            <Link
                              to={`${solution.link}/${itemSlug}`}
                              className="text-gray-700 hover:text-red-600 underline transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-sm mb-2">
                      Success Story:
                    </h4>
                    <p className="text-sm text-gray-600 italic">
                      {solution.caseStudy}
                    </p>
                  </div>

                  <Link
                    to={solution.link}
                    className="inline-block px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>

                {/* Image Section */}
                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us at{" "}
            <a
              href="mailto:info@squadsystems.com"
              className="text-red-600 underline"
            >
              info@squadsystems.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:support@squadsystems.com"
              className="text-red-600 underline"
            >
              support@squadsystems.com
            </a>
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
