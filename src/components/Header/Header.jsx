import React from 'react'
import { StyledHeader, StyledSection } from './style'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const Header = () => {
  return (
  
  <StyledSection>
  <div className="flex space-x-2">
    <motion.h2
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
      className="text-4xl md:text-5xl font-bold"
    >
      Son
    </motion.h2>
    <motion.h2
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
      className="text-4xl md:text-5xl font-bold"
    >
      Programmer
    </motion.h2>
  </div>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
    className="text-lg md:text-2xl max-w-2xl mt-4"
  >
    I’m a Frontend Developer who loves creating beautiful and responsive websites.
  </motion.p>
  <Link to="about" smooth={true} duration={500}>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          more info
        </motion.button>
      </Link>
</StyledSection>
);
}

export default Header
