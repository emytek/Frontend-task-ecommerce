import React from "react";
import styles from "./styles.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const Adnav = () => {
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <>
      {isLargeScreen ? (
        <header>
          <div>
            <nav className={styles.appBar}>
              {/* First Section */}
              <div className={styles.mx} style={{ gap: "12px" }}>
                <span className={styles.textB}>(225) 555 0118</span>
                <div className={styles.mx}>
                  <img src="/icons/msg.png" className={styles.mx} alt="" />
                  <span className={styles.textB}>
                    michelleriverra@example.com
                  </span>
                </div>
              </div>

              {/* Second Section */}
              <div className={styles.textA}>
                <span>Follow Us and get a chance to win 80% off</span>
              </div>

              {/* Third Section */}
              <div className={`${styles.mx} ${styles.textA}`}>
                <span className={styles.socialText}>Follow Us : </span>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/w-instag.png" className={styles.px} alt="" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/w-yt.png" className={styles.px} alt="" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/w-fb.png" className={styles.px} alt="" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/icons/white-twit.png"
                    className={styles.px}
                    alt=""
                  />
                </a>
              </div>
            </nav>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
};

export default Adnav;
