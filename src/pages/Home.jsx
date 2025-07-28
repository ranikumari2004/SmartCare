import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
