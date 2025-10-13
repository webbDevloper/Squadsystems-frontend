import { Link } from "react-router-dom";
import { FiUsers, FiZap, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <HeroSection/>

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="display-4 mb-4">
            Innovative Technology Solutions for <span className="text-danger">Modern Business</span>
          </h1>
          <p className="lead text-secondary mb-4">
            Squad Systems delivers cutting-edge technology solutions that drive growth, efficiency, and success for
            businesses across all industries.
          </p>
          {/* <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/about" className="btn btn-danger btn-lg">
              Learn More <FiArrowRight className="ms-2" />
            </Link>
            <Link to="/services" className="btn btn-outline-danger btn-lg">
              View Services
            </Link>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white flex-grow-1">
        <div className="container text-center">
          <h2 className="h2 mb-4">Why Choose Squad Systems?</h2>
          <p className="text-secondary mb-5">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="bg-danger text-white rounded-circle mx-auto mb-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiUsers size={30} />
                  </div>
                  <h5 className="card-title mb-3">Expert Team</h5>
                  <p className="card-text text-secondary">
                    Our skilled professionals bring years of experience and cutting-edge knowledge to every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="bg-danger text-white rounded-circle mx-auto mb-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiZap size={30} />
                  </div>
                  <h5 className="card-title mb-3">Fast Delivery</h5>
                  <p className="card-text text-secondary">
                    We deliver high-quality solutions quickly without compromising on excellence or attention to detail.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="bg-danger text-white rounded-circle mx-auto mb-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiCheckCircle size={30} />
                  </div>
                  <h5 className="card-title mb-3">Proven Results</h5>
                  <p className="card-text text-secondary">
                    Track record of successful projects and satisfied clients across various industries and business sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="h2 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-secondary mb-4">
            Let's discuss how Squad Systems can help you achieve your technology goals and drive success.
          </p>
          <Link to="/contact" className="btn btn-danger btn-lg">
            Get Started Today <FiArrowRight className="ms-2" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
