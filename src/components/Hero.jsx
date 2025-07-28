import React, { useState } from 'react';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-light text-center py-5" id="home">
        <div className="container">
          <h1 className="display-4 fw-bold text-primary">Welcome to SmartCare Hospital</h1>
          <p className="lead text-secondary mt-3">
            Compassionate care, advanced technology, and excellence in every step.  
            Your health is our highest priority.
          </p>
          <button className="btn btn-primary btn-lg mt-4" onClick={toggleForm}>
            Book Appointment
          </button>
        </div>
      </section>

      {/* Appointment Popup Form */}
      {showForm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
          style={{ zIndex: 1050 }}
        >
          <div className="bg-white p-4 rounded shadow" style={{ width: "90%", maxWidth: "600px" }}>
            <h4 className="mb-3 text-center text-primary">Book an Appointment</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter your phone number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Preferred Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="3" placeholder="Write your concern..."></textarea>
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" onClick={toggleForm}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
