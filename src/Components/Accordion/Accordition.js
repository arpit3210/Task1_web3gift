import React, { useEffect, useState } from "react";
import { Minus } from "../../Icons/Minus";
import { Plus } from "../../Icons/Plus";
import styles from "../../style/card.module.css";
import { motion } from "framer-motion";

const Accordion = ({ title, content, ScrollTrigger }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.title} onClick={() => setCollapse(!collapse)}>
          <div className={styles.name}>
            <h2>{title}</h2>
          </div>
          {collapse ? (
            <span className={styles.indicator}>
              <Minus />
            </span>
          ) : (
            <span className={styles.indicator}>
              <Plus />
            </span>
          )}
        </div>
        {collapse && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4"
          >
            <div className={styles.reveal}>{content}</div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Accordion;
