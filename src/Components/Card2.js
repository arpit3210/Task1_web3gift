import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
// import {Link} from "react-router-dom";
import styles from "../style/card.module.css";
import mobile from "../assets/Frame 4123.png";
import Hardwarewallet from "../assets/flash-drive_7063369.png";
import Brainwallet from "../assets/Mask group (3).png";
import paperwallet from "../assets/note_2471170.png";
import walletmanage from "../assets/stakeholders_6774987.png";
import Accordion from "./Accordion/Accordition";
import {motion} from "framer-motion";

export default function Card2() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      //   markers: true,
    });

    return () => {
      ScrollTrigger.revert();
    };
  }, []);

  return (
    <>
      <div className={styles.card2}>
        <div className={styles.walletboxheading2}>
          <h1 className="text-white text-3xl font-bold">
            There are several options to store the private&#47; public keys:
          </h1>
        </div>

        <div className={styles.imgboxcard}>
          <div className={styles.imgboxcard1}>
            <div className={styles.cards}>
              <div className={styles.imuu}>
              <img className={styles.mobile} src={mobile} alt="img1" />
              </div>
              <div className={styles.box}>
              
                <Accordion
                  ScrollTrigger={ScrollTrigger}
                  title="Software Wallet" 
                  content="Desktop or mobile wallets are installed on a computer, laptop, smartphone or tablet
Online Wallets: Web-based wallets that you can access through a browser.
Both types are connected to the internet and can therefore be exploded, so that the keys can be stollen or phished"
                ></Accordion>
                
              </div>
            </div>
            <div className={styles.cards}>
            <div className={styles.imuu}>
              <img
                className={styles.hardware}
                src={Hardwarewallet}
                alt="img1"
              />
              </div>
              <div className={styles.box}>
              <Accordion
                title="Hardware Wallets"
                content="Physical devices that store cryptocurrency offline. They are considered more secure than software wallets because they are less susceptible to hacking."
              ></Accordion>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.imuu}>
                <img className={styles.paper} src={paperwallet} alt="img1" />
              </div>
              <div className={styles.box}>
              <Accordion
                ScrollTrigger={ScrollTrigger}
                title="Paper Wallets"
                content="
              A physical document containing your cryptocurrency address and private key, often in the form of QR codes."
              ></Accordion>
              </div>
            </div>
          </div>
          <div className={styles.imgboxcard2}>
            <div className={styles.cards}>
            <div className={styles.imuu}>
              <img className={styles.brain} src={Brainwallet} alt="img1" />
              </div>
              <div className={styles.box}>
              <Accordion
                ScrollTrigger={ScrollTrigger}
                title="Brain Wallet"
                content="A type of wallet where the private key is memorized or derived from a passphrase. While this method is theoretically secure, it can be risky if the passphrase is not complex enough."
              ></Accordion>
              </div>
            </div>
            <div className={styles.cards}>
            <div className={styles.imuu}>
              <img className={styles.manage} src={walletmanage} alt="img1" />
              </div>
              <div className={styles.box}>
              <Accordion
                ScrollTrigger={ScrollTrigger}
                title="Wallet managed by someone else"
                content="Most people are not comfortable being responsible for their own wallets because if the private key is lost, access to most digital assets becomes impossible. Therefore, they appoint others to take over this duty. This can be risky, as seen in the case of FTX, where customers' funds were used by the wallet holder."
              ></Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
