import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
  };

  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea name="message" className="form-control" rows="4" onChange={handleChange} required></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-primary px-4" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
