import React from "react";
import { Link } from "react-router-dom";
import {
  FiTarget,
  FiUsers,
  FiAward,
  FiEye,
  FiClock,
  FiMail,
} from "react-icons/fi";

const About = () => {
  const values = [
    {
      icon: <FiTarget className="mx-auto text-4xl mb-4 text-red-600" />,
      title: "Innovation",
      description:
        "We stay at the forefront of technology to deliver cutting-edge solutions that drive business success.",
    },
    {
      icon: <FiUsers className="mx-auto text-4xl mb-4 text-red-600" />,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring transparent communication and shared success.",
    },
    {
      icon: <FiAward className="mx-auto text-4xl mb-4 text-red-600" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <FiTarget className="mx-auto text-3xl mb-2 text-red-600" />,
    },
    {
      number: "150+",
      label: "Happy Clients",
      icon: <FiUsers className="mx-auto text-3xl mb-2 text-red-600" />,
    },
    {
      number: "8+",
      label: "Years Experience",
      icon: <FiAward className="mx-auto text-3xl mb-2 text-red-600" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <FiClock className="mx-auto text-3xl mb-2 text-red-600" />,
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/professional-woman-ceo.png",
      bio: "15+ years in technology leadership with expertise in scaling tech companies.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/professional-man-cto.png",
      bio: "Full-stack architect with deep expertise in cloud technologies and system design.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "/professional-woman-designer.png",
      bio: "UX/UI expert focused on creating intuitive and engaging user experiences.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/professional-man-developer.png",
      bio: "Senior developer specializing in modern web technologies and mobile applications.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="text-red-600">Squad Systems</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-pretty mb-6">
              We are a team of passionate technologists dedicated to helping
              businesses thrive in the digital age through innovative solutions
              and exceptional service.
            </p>

            {/* Squad System Description */}
            <p className="text-gray-600 leading-relaxed text-pretty">
              Founded in 2002, Squad System strives to help organizations manage
              and optimize their businesses with competitive advantage via IT
              consultancy solutions.
            </p>
            <p className="text-gray-600 leading-relaxed text-pretty mt-4">
              With over 19 years of consecutive growth in Information Technology
              and the joint effort of our robust technical team, Squad System
              has acquired expertise in IT Infrastructure Management,
              Cloud/Hybrid Cloud, Business Application Insights, IT Security &
              Decoy Systems, Automation & Power Management, Cloud Data
              Management, Cloud Optimization, Data Storage, Protection and Data
              Security Challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <FiTarget className="text-3xl mr-3 text-red-600" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in an
                ever-evolving digital landscape.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that technology should be an enabler, not a barrier.
                Our mission is to make advanced technology accessible and
                practical for businesses of all sizes.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <FiEye className="text-3xl mr-3 text-red-600" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the leading technology partner that businesses trust to
                navigate their digital transformation journey and achieve
                sustainable success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every business, regardless of size or
                industry, can leverage cutting-edge technology to reach their
                full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Numbers that reflect our commitment to delivering exceptional
              results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {stat.icon}
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {value.icon}
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Experienced professionals passionate about technology and client
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              Ready to work with a team that's passionate about your success?
              Let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Contact Us →
              </Link>
              <Link
                to="/career"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-red-600 bg-transparent border-2 border-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
