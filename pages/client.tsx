import React from "react";
import styles from "../styles/test.module.css";

export default function Client() {
  return (
    <div className={styles.wrap}>
      <div className={styles.irst}>
        <p>Lorem ipsum dolor sit amet.</p>
        {/* <div className={styles.img}>
          <img src="/pics/client.png" alt="" />
        </div> */}
        <p className={styles.dra}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          blanditiis eos inventore. Nihil, impedit atque. Reiciendis sunt rerum
          ab et?
        </p>
        <p className={styles.row}>testvch</p>
        <p className={styles.nit}>testvch</p>
      </div>
      <div className={styles.second}>
        <h4>Hello</h4>
      </div>
    </div>
  );
}
