import React from "react";
import styles from "./styles.module.css";

interface IntroSectionProps {
  option: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ option }) => {
  return (
    <>
      <div className={styles.productIntroSection}>
        <div className={styles.productIntroTitle}>Featured Products</div>
        <div className={styles.productIntroOption}>{option}</div>
        <div className={styles.productIntroNote}>
          Problems trying to resolve the conflict between
        </div>
      </div>
    </>
  );
};

export default IntroSection;
