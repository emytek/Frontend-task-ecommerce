import styles from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.section}>
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

      {/* For mobile */}
      <div className={styles.mobileImageContainer}>
        <img
          src="/pics/1pic.png"
          className={styles.mobileImages}
          alt="Image 1"
        />
        <img
          src="/pics/2pic.png"
          className={styles.mobileImages}
          alt="Image 2"
        />
        <img
          src="/pics/1pic.png"
          className={styles.mobileImages}
          alt="Image 3"
        />
        <img
          src="/pics/2pic.png"
          className={styles.mobileImages}
          alt="Image 4"
        />
      </div>
    </>
  );
};

export default Banner;
