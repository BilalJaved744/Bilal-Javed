import React from 'react';
import './ser.css';
import { motion } from 'framer-motion';

const services = [
  { id: '01', title: 'Front End' },
  { id: '02', title: 'Back End' },
  { id: '03', title: 'Web Animation' },
  { id: '04', title: 'Social Services' },
  { id: '05', title: 'Comming Soon' },
  { id: '06', title: 'Comming Soon' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80 },
  },
};

function Services() {
  return (
    <section className="services-section text-white">
      <div className="container">
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Services</span>
        </motion.h2>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              variants={cardVariants}
            >
              <motion.div
                className="service-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="service-id">{service.id}</span>
                <h5 className="service-title gradient-text">{service.title}</h5>
                <p>Web development is the process of building, programming...</p>
                <a href="#" className="read-more">Read More →</a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
