import React from "react";
import styles from "./styles.module.css";

interface InfoSectionProps {
  title: string;
  option: string;
  note: string;
  titleStyle?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  option,
  note,
  titleStyle,
}) => {
  return (
    <>
      <div className={styles.productIntroSection}>
        <div className={`${styles.productIntroTitle} ${titleStyle}`}>
          {title}
        </div>
        <div className={styles.productIntroOption}>{option}</div>
        <div className={styles.productIntroNote}>{note}</div>
      </div>
    </>
  );
};

export default InfoSection;
