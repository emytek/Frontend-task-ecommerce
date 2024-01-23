import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./styles.module.css"; // Assuming you have a styles file

const SubHero = () => {
  return (
    <Box mt="2.5rem">
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles["hero-contain"]}>
          <motion.p
            className={styles["primary-title"]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Designing Better Experience
          </motion.p>
          <motion.p
            className={styles["sec-title"]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            style={{ marginTop: ".2em" }}
          >
            Problem trying to resolve the conflict between
          </motion.p>
          <motion.p
            className={styles["sm-text"]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            style={{ marginTop: "1.3em" }}
          >
            Problem trying to resolve the conflict between the two major realms
            of Classical physice
          </motion.p>
          <motion.p
            className={styles["text-price"]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            style={{ marginTop: "1.3em" }}
          >
            $16.48
          </motion.p>
          <div className={styles["link-btn"]}>
            <a href="">ADD YOUR CALL TO ACTION</a>
          </div>
        </div>
      </motion.header>
    </Box>
  );
};

export default SubHero;
