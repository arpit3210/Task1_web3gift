import React, { useState } from "react";
// import {Link} from "react-router-dom";
import styles from "../style/card.module.css";
import ReadMore from "./Readmore";
import bitcoin from "../assets/7125351-removebg-preview.png";

export default function Card({}) {
  const longText = `These keys are necessary to firstly derive an address for receiving funds (the wallet address) and secondly to send funds to another wallet address.
This is accomplished by signing a transaction with the private key and making the public key available to others (e.g., miners, stakers, or network participants) to verify that the sender has the proper private key. It's important never to disclose the keys to anyone who should not have access to the digital assets.
    `;
  return (
    <>
      <div className={styles.card1}>
        <div className={styles.walletboxheading}>
          <h1 className="text-white text-3xl font-bold">Wallet</h1>
          <p className="text-white mt-3 text-lg">
            A wallet is the most essential thing to have to own digital assets.
            However, the wallet does not hold the digital asset, like a physical
            wallet holds a $10 bill; instead, it contains a set of private and
            public keys (essentially numbers).
            <br></br>
          </p>
          <ReadMore text={longText} maxLength={150} />
        </div>
        <div className={styles.walletimgbox}>
          <img src={bitcoin} alt="walletimg" />
        </div>
      </div>
    </>
  );
}
