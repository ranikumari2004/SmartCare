import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoSection}>
        <img src="./logo.jpg" alt="SmartCare" style={styles.logo} />
        <span style={styles.title}>SmartCare Hospital</span>
      </div>
      <ul style={styles.menu}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#testimonials" style={styles.link}>Testimonials</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#0056b3',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    width: '40px',
    marginRight: '10px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  }
};

export default Navbar;
