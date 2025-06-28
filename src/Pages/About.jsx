import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (i) => ({
      width: `${100 - i * 1}%`,
      transition: { duration: 1, delay: i * 0.2 },
    }),
  };

  return (
    <section className="about-section text-white">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">me</span>
        </motion.h2>

        <motion.div
          className="row align-items-center mt-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="col-md-4 text-center" variants={itemVariants}>
            <motion.img
              src="/image/pro3.jpg"
              alt="Profile"
              className="profile-img rounded"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 8 }}
            />
          </motion.div>

          <motion.div className="col-md-8" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              I am an experienced Full Stack Web Developer with over a decade of professional expertise in the field...
            </motion.p>
            <motion.p variants={itemVariants}>
              My passion for Full Stack Web development is not only reflected in my experience but also in my enthusiasm...
            </motion.p>

            <div className="skills mt-4">
              {['HTML , CSS & Bootstrap', 'React JS', 'JavaScript', 'Node JS', 'Express', 'MongoDB'].map((skill, index) => (
                <motion.div key={index} className="mb-3" variants={itemVariants}>
                  <span>{skill}</span>
                  <div className="progress">
                    <motion.div
                      className="progress-bar"
                      custom={index}
                      variants={barVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="row text-center mt-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[{ label: 'Years of Experience', value: '01+' },
            { label: 'Projects Completed', value: '55+' },
            { label: 'Happy Clients', value: '09+' }
          ].map((stat, i) => (
            <motion.div key={i} className="col-md-4" variants={itemVariants}>
              <h3><span className="gradient-text">{stat.value}</span></h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
