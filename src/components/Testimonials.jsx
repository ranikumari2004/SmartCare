import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (
    <section className="bg-light py-5" id="testimonials">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">What Our Patients Say</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <p className="lead">"SmartCare provided excellent care when my family needed it the most. Truly life-saving experience." - <strong>Priya S.</strong></p>
          </div>
          <div>
            <p className="lead">"Clean facilities, kind staff, and the best doctors. I traveled from Dubai for surgery." - <strong>Imran K.</strong></p>
          </div>
          <div>
            <p className="lead">"The emergency service was fast and professional. Highly recommended." - <strong>Ravi M.</strong></p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
