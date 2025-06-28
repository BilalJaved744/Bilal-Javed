import React from 'react';
import { Button } from 'react-bootstrap';
import './portSec.css';
import { motion } from 'framer-motion';

function PortSec() {
  return (
    <motion.div
      className="hero-container text-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/image/pro3.jpg"
        alt="Profile"
        className="hero-img rounded-circle"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      <motion.h1
        className="hero-heading mt-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
      >
        I'm <span className="text-gradient">Bilal Javed</span>, Full Stack web <br /> developer based in Pakistan.
      </motion.h1>

      <motion.p
        className="lead mt-3"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        I am a Full Stack Web developer from LHR, Pakistan with 1 years of experience in multiple <br />
        companies like Microsoft, Tesla and Apple.
      </motion.p>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Button className="me-3 gradient-btn" href="https://www.facebook.com/share/18nfhspLqe/" >Connect with me</Button>
        <Button variant="outline-light" href="/about">My resume</Button>
      </motion.div>
    </motion.div>
  );
}

export default PortSec;
