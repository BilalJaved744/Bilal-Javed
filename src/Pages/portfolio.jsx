import React from 'react';
import './Port.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const works = [
  { id: 1, img: '/image/pro1.png', title: 'University Website' },
  { id: 2, img: '/image/pro1.png', title: 'Music Player UI' },
  { id: 3, img: '/image/pro1.png', title: 'Movie Dashboard' },
  { id: 4, img: '/image/pro1.png', title: 'NFT Landing Page' },
  { id: 5, img: '/image/pro1.png', title: 'Dental Website' },
  { id: 6, img: '/image/pro1.png', title: 'Agency Theme' },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section text-white">
      <div className="container">
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="gradient-text">Latest Work</span>
        </motion.h2>

        <div className="row g-4">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.03}>
                <div className="portfolio-card glass-card">
                  <img src={work.img} alt={work.title} className="portfolio-img" />
                  <h5 className="portfolio-title">{work.title}</h5>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
