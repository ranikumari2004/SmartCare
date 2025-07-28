import React from 'react';

const features = [
  {
    icon: '🩺',
    title: 'Expert Doctors',
    desc: 'A team of certified and specialized doctors across all departments.'
  },
  {
    icon: '🚑',
    title: '24x7 Emergency',
    desc: 'Emergency services available round the clock with rapid response teams.'
  },
  {
    icon: '🌍',
    title: 'International Patients',
    desc: 'Trusted by patients around the globe with dedicated coordinators.'
  }
];

const Features = () => {
  return (
    <section className="py-5 bg-white" id="services">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Key Services</h2>
        <div className="row">
          {features.map((feature, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="display-3 mb-3">{feature.icon}</div>
                  <h5 className="card-title fw-semibold">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
