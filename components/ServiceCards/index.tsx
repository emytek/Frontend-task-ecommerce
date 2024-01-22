import React from "react";
import IntroSection from ".././IntroSection";
import styles from "./styles.module.css";

const ServiceSection: React.FC = () => {
  return (
    <>
      <IntroSection
        title="Featured Products"
        option="THE BEST SERVICES"
        note="Problems trying to resolve the conflict between"
      />
      <div className={styles.serviceSection}>
        <div className={styles.serviceCard}>
          <img src="/imgIcons/book-reader.png" alt="Service 1" />
          <h3 className={styles.featureTitle}>Easy Wins</h3>
          <p className={styles.featureDescription}>
            Get your best looking smile now
          </p>
        </div>
        <div className={styles.serviceCard}>
          <img src="/imgIcons/carbon-book.png" alt="Service 2" />
          <h3 className={styles.featureTitle}>Concrete</h3>
          <p className={styles.featureDescription}>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div className={styles.serviceCard}>
          <img src="/imgIcons/arrow-growth.png" alt="Service 3" />
          <h3 className={styles.featureTitle}>Hack Growth</h3>
          <p className={styles.featureDescription}>
            Overcame any hurdle or any other problem
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
