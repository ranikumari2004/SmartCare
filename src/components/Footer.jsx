import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#007bff', color: '#fff' }} className="pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About */}
          <div className="col-md-4 mb-3">
            <h5>SmartCare Hospital</h5>
            <p>
              Delivering world-class healthcare with technology and compassion. We care for your life with expertise and heart.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#features" className="text-white text-decoration-none">Features</a></li>
              <li><a href="#testimonials" className="text-white text-decoration-none">Testimonials</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p><i className="bi bi-telephone-fill me-2"></i>+91 62061 73716</p>
            <p><i className="bi bi-envelope-fill me-2"></i>contact@smartcare.com</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i>Gurgaon, Haryana, India</p>
          </div>
        </div>

        <hr className="bg-white" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} SmartCare Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
