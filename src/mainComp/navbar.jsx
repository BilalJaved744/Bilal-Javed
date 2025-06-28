import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './nav.css';

const navLinks = ['Home', 'About', 'Service', 'PortFolio', 'Contact'];

const linkVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
  hover: {
    scale: 1.15,
    textShadow: '0px 0px 8px #0ff',
    boxShadow: '0px 0px 12px rgba(0,255,255,0.3)',
    transition: { duration: 0.3 },
  },
};

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-glass navbar-dark py-3">
      <Container>
        <motion.h4
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white fw-bold"
        >
          <NavLink to='/'  style={{textDecoration:'none', color:'white'}}>Bilal Javed</NavLink>
        </motion.h4>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((text, i) => (
              <motion.div
                key={text}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: i * 0.1 }}
                className="nav-glow-link px-3"
              >
                <Nav.Link href={`/${text.toLowerCase()}`}>{text}</Nav.Link>
              </motion.div>
            ))}
          </Nav>

          <motion.div
            className="ms-auto d-none d-lg-block"
            whileHover={{ scale: 1.1, boxShadow: '0 0 18px #00ffff' }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <Button variant="outline-info" href="https://www.facebook.com/share/18nfhspLqe/">
              Connect With Me
            </Button>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
