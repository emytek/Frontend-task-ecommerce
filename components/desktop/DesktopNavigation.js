import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTwitter } from "react-icons/fa";
import styles from "./styles.module.css";
import { links, social, venLinks } from "./utils/data";
import Link from "next/link";

const DesktopNav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const linksRef = (useRef < HTMLUListElement) | (null > null);
  const linksContainerRef = (useRef < HTMLDivElement) | (null > null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const filteredLinks = links.filter((link) => {
    return isSmallScreen || link.showOnLargeScreen;
  });

  useEffect(() => {
    if (linksRef.current && linksContainerRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;

      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = "0px";
      }
    }
  }, [showLinks]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "white",
      }}
    >
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="CredibLogo"
              cursor="pointer"
              className={`${styles["nav-logo"]} ${
                isSmallScreen ? styles["small-image"] : ""
              }`}
            />
          </Link>

          <button
            className={styles["nav-toggle"]}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className={styles["links-container"]} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            {filteredLinks.map((link) => {
              const { id, url, text, showOnLargeScreen } = link;
              const shouldDisplay = isSmallScreen || showOnLargeScreen;

              // Define linkStyles here
              const linkStyles = {
                display: shouldDisplay ? "block" : "none",
                ...(text === "become a vendor" && isSmallScreen
                  ? { color: "#F2656F" }
                  : {}),
                ...(text === "get started" && isSmallScreen
                  ? { color: "#F2656F" }
                  : {}),
              };
            })}
          </ul>
        </div>

        <div className={styles["nav-buttons"]}>
          <ul className={styles["social-icons"]} style={{ listStyle: "none" }}>
            <li
              style={{
                color: "#F2656F",
                fontSize: "14px",
                textDecoration: "none",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link href="/vendor-onboard">Become a Vendor</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
