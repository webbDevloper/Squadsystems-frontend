import { Link } from "react-router-dom";
import { FaBuilding, FaShoppingCart, FaHeartbeat, FaGraduationCap } from "react-icons/fa";

const Industries = () => {
  const industries = [
    {
      icon: <FaBuilding size={40} className="text-red-600" />,
      title: "Real Estate",
      description:
        "Comprehensive digital solutions for property management, virtual tours, and real estate marketplaces.",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
      solutions: [
        "Property management systems",
        "Virtual tour platforms",
        "CRM for real estate agents",
        "Market analytics dashboards",
      ],
      caseStudy: "Increased property sales by 40% with our virtual tour platform",
    },
    {
      icon: <FaShoppingCart size={40} className="text-red-600" />,
      title: "E-commerce & Retail",
      description:
        "Scalable e-commerce platforms, inventory management, and omnichannel retail solutions.",
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg",
      solutions: [
        "Custom e-commerce platforms",
        "Inventory management systems",
        "Point-of-sale solutions",
        "Customer analytics tools",
      ],
      caseStudy: "Boosted online sales by 300% with our e-commerce platform",
    },
    {
      icon: <FaHeartbeat size={40} className="text-red-600" />,
      title: "Healthcare",
      description:
        "HIPAA-compliant solutions for patient management, telemedicine, and healthcare analytics.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      solutions: [
        "Electronic health records",
        "Telemedicine platforms",
        "Patient portal systems",
        "Healthcare analytics",
      ],
      caseStudy: "Improved patient care efficiency by 50% with our EHR system",
    },
    {
      icon: <FaGraduationCap size={40} className="text-red-600" />,
      title: "Education",
      description:
        "Learning management systems, student portals, and educational technology solutions.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      solutions: [
        "Learning management systems",
        "Student information systems",
        "Online course platforms",
        "Educational mobile apps",
      ],
      caseStudy: "Enhanced student engagement by 60% with our LMS platform",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="text-red-600">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We bring deep industry expertise and tailored technology solutions to help businesses across various
              sectors achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center mb-6">
                      <div className="mr-4">{industry.icon}</div>
                      <h2 className="text-3xl font-bold">{industry.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Our Solutions:</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-center text-sm">
                            <span className="text-red-600 mr-2">✓</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-sm mb-2">Success Story:</h4>
                      <p className="text-sm text-gray-600 italic">{industry.caseStudy}</p>
                    </div>

                    {/* <button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                      Learn More →
                    </button> */}
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cross-Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common technology solutions that benefit businesses across all industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cloud Migration",
                description: "Seamless transition to cloud infrastructure for scalability and cost efficiency",
              },
              {
                title: "Data Analytics",
                description: "Transform raw data into actionable insights for better decision making",
              },
              {
                title: "Mobile Solutions",
                description: "Native and cross-platform mobile apps to reach customers anywhere",
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your business and customers",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-3">{solution.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See Your Industry?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We work with businesses across all sectors. Our adaptable approach means we can create custom solutions
              for any industry challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Discuss Your Needs →
              </Link>
              <Link
                to="/success-stories"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-red-600 bg-transparent border-2 border-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
