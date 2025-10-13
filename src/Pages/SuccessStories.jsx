import { Link } from "react-router-dom"
const SuccessStories = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO, RetailTech Solutions",
      company: "RetailTech Solutions",
      image: "/professional-woman-testimonial.png",
      quote:
        "Squad Systems transformed our e-commerce platform, resulting in a 300% increase in online sales. Their expertise and dedication are unmatched.",
      project: "E-commerce Platform Redesign",
      results: ["300% increase in sales", "50% faster page load times", "40% higher conversion rate"],
    },
    {
      name: "Robert Chen",
      role: "CTO, HealthFirst Medical",
      company: "HealthFirst Medical",
      image: "/professional-man-testimonial.png",
      quote:
        "The patient management system they built has revolutionized our operations. We've seen a 50% improvement in patient care efficiency.",
      project: "Healthcare Management System",
      results: ["50% improved efficiency", "HIPAA compliant", "99.9% uptime"],
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "Major Retail Chain",
      industry: "Retail",
      challenge: "Outdated e-commerce platform with poor performance and user experience",
      solution: "Complete platform rebuild using modern technologies and optimized user experience",
      results: [
        "300% increase in online sales",
        "50% reduction in page load times",
        "40% improvement in conversion rates",
        "25% decrease in cart abandonment",
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      timeline: "6 months",
      image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90",
    },
    {
      title: "Healthcare System Modernization",
      client: "Regional Healthcare Provider",
      industry: "Healthcare",
      challenge: "Legacy patient management system causing inefficiencies and compliance issues",
      solution: "HIPAA-compliant patient management system with integrated telemedicine capabilities",
      results: [
        "50% improvement in patient care efficiency",
        "100% HIPAA compliance achieved",
        "30% reduction in administrative costs",
        "99.9% system uptime",
      ],
      technologies: ["React", "Python", "PostgreSQL", "AWS"],
      timeline: "8 months",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*OjHZmz8H2t4gbledKhxqgA.png",
    },
  ]

  return (
    <div className="min-h-screen">
    

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Success <span className="text-red-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-pretty">
              Discover how we've helped businesses across various industries achieve their digital transformation goals
              and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Real feedback from real clients who have experienced transformational results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Project: {testimonial.project}</h4>
                  <div className="space-y-1">
                    {testimonial.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm">
                        <span className="text-red-600 mr-2">✓</span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              In-depth look at how we solved complex business challenges with innovative technology solutions
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-sm">
                              <span className="text-red-600 mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Timeline: {study.timeline}</p>
                      </div>
                    </div>

                    <button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                      Read Full Case Study →
                    </button>
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Numbers that demonstrate our commitment to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", description: "Successful deliveries" },
              { number: "98%", label: "Client Satisfaction", description: "Happy customers" },
              { number: "150+", label: "Businesses Transformed", description: "Digital transformations" },
              { number: "24/7", label: "Support Available", description: "Always here to help" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              Join the growing list of businesses that have transformed their operations with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Start Your Project →
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-red-600 bg-transparent border-2 border-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default SuccessStories
