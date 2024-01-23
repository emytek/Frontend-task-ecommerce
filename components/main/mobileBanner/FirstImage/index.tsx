// components/ResponsiveContainer.tsx
import React from "react";
import styles from "./styles.module.css";

const FirstImage: React.FC = () => {
  return (
    <div className={styles.static}>
      <div className={styles.textContainer}>
        <h6 className={styles.text1}>5 Items</h6>
        <h6 className={styles.text2}>FURNITURE</h6>
        <h6 className={styles.text3}>Read More</h6>
      </div>
    </div>
  );
};

export default FirstImage;
