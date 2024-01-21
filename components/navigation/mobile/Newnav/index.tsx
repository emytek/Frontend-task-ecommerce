import React from "react";
import { useMediaQuery, Theme } from "@mui/material";
import { Typography } from "@mui/material";
import styles from "../styles/styles.module.css";
import { Link } from "@mui/material";

interface NewnavProps {
  toggleSidebar: () => void;
}

const Newnav: React.FC<NewnavProps> = ({ toggleSidebar }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbar}>
          <Link
            href="/"
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              ...(isMediumUp && { display: "none" }), // Hide on medium screens and up
            }}
            className={styles.center}
          >
            <img
              src="/logo/Bandage.png"
              alt="Logo"
              className={isSmallScreen ? "small-image" : "navlogo"}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <div className={styles.mobileicon} onClick={toggleSidebar}>
            <img src="/icons/menu.png" alt="" />
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
