import React from "react";
// import {Link} from "react-router-dom";
import styles from "../style/card.module.css";

export default function Card3() {
  return (
    <>
      <div className={styles.card3}>
        <div className={styles.walletboxheading3}>
          <p className="text-white mt-3 text-lg">
            To start and gain experience we recommend to use software wallet
            option and another. How to get your wallet use below links for
            Step-by-step guideline. <br />
            Be aware: this wallet is not hosted by yourself, therefore it is
            perfecet to start, but if you want to go big, you have to get a new
            wallet
            <br />
            <br />
            <br />
            <span className="mt-6 text-white font-bold">
              Get your wallet today, Use below links for step by step
              understanding.
            </span>
          </p>
          <button className={styles.btn}>
            <a className="font-bold underline" href="#">
              Explore Crypto Wallet
            </a>
          </button>
          <button className={styles.btn}>
            <a className="font-bold underline" href="#">
              Click to watch
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
