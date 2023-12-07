import React from "react";
import styles from "../style/card.module.css";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Animate from "./Accordion/Animate";
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const container1 = {
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
    <>
    <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1 }}
        >
      <div className={styles.container}>
        <Animate/>
        <Card />
        <Card2 />
        <Card3 />
      </div>
      </motion.div>

    </>
  );
}
