// ReadMore.js
import React, { useState } from "react";
import styles from "../style/card.module.css";

const Readmore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <div className={styles.walletboxhead}>
      <p className="text-white mt-3 text-lg">{truncatedText}</p>
      {text.length > maxLength && (
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={toggleTruncate}
        >
          {isTruncated ? "Read More" : "Show Less"}
        </button>
      )}
    </div>
  );
};

export default Readmore;
