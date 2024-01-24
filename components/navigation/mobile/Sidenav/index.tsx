import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`${styles.sidebarcontain} ${isOpen ? styles.open : ""}`}
      style={{ top: isOpen ? "0" : "-100%", opacity: isOpen ? "1" : "0" }}
    >
      <div className={styles.icon} onClick={toggleSidebar}>
        <FaTimes size={24} color="red" />
      </div>
      <div className={styles.sidebarwrapper}>
        <ul className={styles.sidebarmenu}>
          <li className={styles.sidebarlink}>
            <Link href="/events">Home</Link>
          </li>
          <li className={styles.sidebarlink} style={{ paddingRight: ".8rem" }}>
            <Link href="/new-about">Shop</Link>
          </li>
          <li className={styles.sidebarlink} style={{ paddingRight: "1.4rem" }}>
            About
          </li>
          <li className={styles.sidebarlink} style={{ paddingRight: "1.4rem" }}>
            Blog
          </li>
          <li className={styles.sidebarlink} style={{ paddingRight: "1.4rem" }}>
            Contact
          </li>
          <li className={styles.sidebarlink} style={{ paddingRight: "1.4rem" }}>
            Pages
          </li>
        </ul>

        {/* <div className={styles.sidebtnwrap}> */}
        <ul className={styles["social-icons"]} style={{ listStyle: "none" }}>
          <li>
            <a href="/vendor-onboard">
              <img src="/icons/user.png" alt="" className={styles.navIcon} />
              <span
                className={styles["bluelink"]}
                style={{ marginLeft: "6px" }}
              >
                Login / Register
              </span>
            </a>
          </li>
          <li>
            <img
              src="/icons/search.png"
              style={{ marginLeft: "20px" }}
              alt=""
              className={styles.navIcon}
            />
          </li>
          <li>
            <img
              src="/icons/cart2.png"
              className={styles.navIcon}
              style={{ marginLeft: "20px" }}
              alt=""
            />
          </li>
          <li>
            <img
              src="/icons/wish2.png"
              className={styles.navIcon}
              style={{ marginLeft: "20px" }}
              alt=""
            />
          </li>
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
