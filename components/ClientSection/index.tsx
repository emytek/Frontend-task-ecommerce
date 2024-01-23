// components/TwoSectionsComponent.tsx
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./styles.module.css";
import { Container, Typography } from "@material-ui/core";

const ClientSection: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <div className={styles.wrap}>
      <div className={styles.irst}>
        <p className={styles.ques}>What they say about us</p>
        <div className={styles.img}>
          <img src="/pics/client.png" alt="" />
        </div>
        <div className={styles.rating}>
          <img src="/imgIcons/stars.png" alt="" />
        </div>
        <p className={styles.about}>
          Slate helps you see how many more days you need to work to reach your
          financial goal
        </p>
        <p className={styles.row1}>Regina Miles</p>
        <p className={styles.row2}>Designer</p>
      </div>
      <div className={styles.second}>
        {isLargeScreen ? (
          <img className={styles.gallery} src="/pics/studio.png" alt="" />
        ) : (
          <img className={styles.gallery} src="/pics/frame.png" alt="" />
        )}
      </div>
    </div>
  );
};

export default ClientSection;
