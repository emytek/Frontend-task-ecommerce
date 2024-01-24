import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import Image from "next/image"
import styles from "./styles.module.css";
import { links } from "../../../utils/NavData";

const DesktopNav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const linksRef = useRef<HTMLUListElement | null>(null);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);

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
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <a href="/">
            <img
              src="/logo/Bandage.png"
              alt="BandageLogo"
              style={{ cursor: "pointer" }}
              className={`${styles["nav-logo"]} ${
                isSmallScreen ? styles["small-image"] : ""
              }`}
            />
          </a>

          <button
            className={styles["nav-toggle"]}
            onClick={() => setShowLinks(!showLinks)}
          >
            <img src="/menu.png" alt="" />
          </button>
        </div>

        <div className={styles["links-container"]} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            {filteredLinks.map((link) => {
              const { id, url, text, showOnLargeScreen } = link;
              const shouldDisplay = isSmallScreen || showOnLargeScreen;

              // Define linkStyles here
              const linkStyles = {
                color: "#737373",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: ".2px",
              };
              return (
                <li
                  key={id}
                  style={{ marginBottom: "14px", marginLeft: ".9rem" }}
                >
                  <a href={url} style={linkStyles}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles["nav-buttons"]}>
          <ul className={styles["social-icons"]} style={{ listStyle: "none" }}>
            <li>
              <a href="/vendor-onboard">
                <img src="/icons/user.png" alt="" />
                <span className={styles["user"]} style={{ marginLeft: "6px" }}>
                  Login / Register
                </span>
              </a>
            </li>
            <li>
              <img
                src="/icons/search.png"
                style={{ marginLeft: "20px" }}
                alt=""
              />
            </li>
            <li>
              <img
                src="/icons/cart2.png"
                style={{ marginLeft: "20px" }}
                alt=""
              />
            </li>
            <li>
              <img
                src="/icons/wish2.png"
                style={{ marginLeft: "20px" }}
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
