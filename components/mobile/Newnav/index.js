import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/styles.module.css";
import Link from "next/link";

const Newnav = ({ toggleSidebar }) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbar}>
          <Link
            href="/"
            style={{ textDecoration: "none", cursor: "pointer" }}
            className={styles.center}
          >
            <Image
              src="/logo.svg"
              alt="CredibLogo"
              className={`${
                isSmallScreen ? styles["small-image"] : styles["navlogo"]
              }`}
              cursor="pointer"
            />
          </Link>
          <div className={styles.mobileicon} onClick={toggleSidebar}>
            <FaBars size="22px" />
          </div>
          <ul className={styles.navmenu}>
            <li className={styles.navitem}>
              <Link href="/events" className={styles.navlinks}>
                Plan Event
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/new-about" className={styles.navlinks}>
                Company
              </Link>
            </li>
            <li className={styles.navitem} style={{ marginLeft: ".6rem" }}>
              <span
                className={styles.contactLink}
                style={{ cursor: "pointer" }}
              >
                Contact
              </span>
            </li>
          </ul>

          <div className={styles.navbtn}>
            <ul>
              <li className={styles.navbtnlink1}>
                <Link href="/vendor-onboard">Become a Vendor</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Newnav;
