import React,{useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Animate() {
    const fadeInVariants = {
        hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    }
}
      };
    
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1 }}
        >
          <h1>Fade In Animation</h1>
        </motion.div>
      );
}

export default Animate