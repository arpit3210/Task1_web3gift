import React from "react";
import styles from "../style/card.module.css";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Card />
        <Card2 />
        <Card3 />
      </div>
    </>
  );
}
