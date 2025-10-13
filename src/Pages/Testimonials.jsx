import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "Squad Systems transformed our business with their innovative IT solutions. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    position: "CTO, WebSolutions",
    message:
      "Professional, efficient, and reliable. Their team delivers beyond expectations.",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    position: "Manager, InnovateX",
    message:
      "A great partner for tech solutions. Their approach to optimization and business efficiency is remarkable.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="py-5"
      style={{ backgroundColor: "#fff", width: "100%" }}
    >
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: "#bfa58f" }}>
          What Our Clients Say
        </h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                className="card h-100 shadow-sm p-4"
                style={{
                  backgroundColor: "#f5f5f5", // secondary gray
                  borderRadius: "15px",
                  border: "none",
                }}
              >
                <div className="mb-3">
                  <FaQuoteLeft size={30} color="#bfa58f" />
                </div>
                <p className="text-muted mb-4">{testimonial.message}</p>
                <div className="d-flex align-items-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} color="#bfa58f" className="me-1" />
                  ))}
                </div>
                <h5 className="mb-0" style={{ color: "#333" }}>
                  {testimonial.name}
                </h5>
                <small className="text-secondary">{testimonial.position}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
