import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`${styles.sidebarcontain} ${isOpen ? styles.open : ""}`}
      style={{ top: isOpen ? "0" : "-100%", opacity: isOpen ? "1" : "0" }}
    >
      <div className={styles.icon} onClick={toggleSidebar}>
        <Image src="/mobile/close-sde.png" alt="" />
      </div>
      <div className={styles.sidebarwrapper}>
        <ul className={styles.sidebarmenu}>
          <li className={styles.sidebarlink}>
            <Link href="/events">Plan Event</Link>
          </li>
          <li className={styles.sidebarlink} style={{ paddingRight: ".8rem" }}>
            <Link href="/new-about">Company</Link>
          </li>
          <li className={styles.sidebarlink} style={{ paddingRight: "1.4rem" }}>
            <span className={styles.contactLink} style={{ cursor: "pointer" }}>
              Contact
            </span>
          </li>
        </ul>

        <div className={styles.sidebtnwrap}>
          <ul>
            <li className={styles.sidebtnlink1}>
              <Link href="/vendor-onboard">Become a Vendor</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
