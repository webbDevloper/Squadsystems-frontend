import { useState } from "react";
import { Link } from "react-router-dom";
import WebDeveloper from "./ServicesDetails/WebDeveloper";
import {
  FaMoneyBillWave,
  FaHospital,
  FaUmbrellaBeach,
  FaHome,
  FaBook,
  FaLaptop,
  FaRocket,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const Career = () => {
  const benefits = [
    {
      icon: <FaMoneyBillWave size={40} className="text-red-600" />,
      title: "Competitive Salary",
      description: "Market-leading compensation packages",
    },
    {
      icon: <FaHospital size={40} className="text-red-600" />,
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage",
    },
    {
      icon: <FaUmbrellaBeach size={40} className="text-red-600" />,
      title: "Flexible PTO",
      description: "Unlimited paid time off policy",
    },
    {
      icon: <FaHome size={40} className="text-red-600" />,
      title: "Remote Work",
      description: "Flexible work-from-home options",
    },
    {
      icon: <FaBook size={40} className="text-red-600" />,
      title: "Learning Budget",
      description: "$2,000 annual learning and development budget",
    },
    {
      icon: <FaLaptop size={40} className="text-red-600" />,
      title: "Latest Tech",
      description: "Top-of-the-line equipment and tools",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("Thank you for applying! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      resume: null,
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-red-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Build your career with a company that values innovation, growth, and work-life balance. We're always
              looking for talented individuals to join our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team members and providing an environment where everyone can thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What makes Squad Systems a great place to work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4"><FaRocket size={40} className="text-red-600" /></div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed">
                We encourage experimentation and creative problem-solving. Your ideas matter and can shape our products.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4"><FaHandshake size={40} className="text-red-600" /></div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Environment</h3>
              <p className="text-gray-600 leading-relaxed">
                Work with talented colleagues who support each other's growth and celebrate shared successes.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4"><FaChartLine size={40} className="text-red-600" /></div>
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear career progression paths, mentorship programs, and continuous learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Tell us why you're a great fit!"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Still have questions? Feel free to <Link to="/contact" className="text-red-600 font-medium underline">contact us</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Career;
