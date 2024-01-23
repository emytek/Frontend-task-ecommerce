import styles from "./Banner.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import FirstImage from "./mobileBanner/FirstImage";
import SecondImage from "./mobileBanner/SecondImage";
import ThirdImage from "./mobileBanner/ThirdImage";
import FourthImage from "./mobileBanner/FourthImage";

const Banner: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <>
      {isLargeScreen ? (
        <div className={styles.banner}>
          <div className={styles.section}>
            {/* Show the image on large and medium screens */}
            <img
              src="/pics/1pic.png"
              className={`${styles.firstImage} ${styles.images}`}
              alt="Image 1"
            />
          </div>
          <div className={styles.section}>
            <div className={styles.subsection}>
              <img
                className={`${styles.secondImage} ${styles.images}`}
                src="/pics/2pic.png"
                alt="Image 2"
              />
            </div>
            <div className={styles.subsection}>
              <img
                className={`${styles.firstSubImg} ${styles.images}`}
                src="/pics/sub1.png"
                alt="SubA"
              />
              <img
                className={`${styles.secondSubImg} ${styles.images}`}
                src="/pics/sub2.png"
                alt="SubB"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.mobileImageContainer}>
          <FirstImage />
          <SecondImage />
          <ThirdImage />
          <FourthImage />
        </div>
      )}
    </>
  );
};

export default Banner;
