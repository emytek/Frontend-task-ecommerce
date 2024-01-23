import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { posts } from "../../utils/PostData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";
import IntroSection from "../IntroSection";

export default function PostSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.centerWrapper}>
          <IntroSection
            title="Practice Advice"
            option="FEATURED POSTS"
            note=""
            titleStyle={styles.specialTitle}
          />
        </div>
        <div className={styles.postSection}>
          {posts.map((post) => (
            <div key={post.id} className={styles.postCard}>
              <img
                src={post.image}
                className={styles.postImg}
                alt={`post ${post.id}`}
              />
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                textColor="primary"
                indicatorColor="primary"
                className={styles.tabs}
              >
                <Tab
                  label="Google"
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    textTransform: "none",
                    lineHeight: "16px",
                    letterSpacing: ".2px",
                    color: activeTab === 0 ? "#8EC2F2" : "inherit",
                  }}
                />
                <Tab
                  label="Trending"
                  style={{
                    fontSize: "12px",
                    textTransform: "none",
                    fontWeight: "400",
                    color: activeTab === 1 ? "#8EC2F2" : "inherit",
                  }}
                />
                <Tab
                  label="New"
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    textTransform: "none",
                    color: activeTab === 2 ? "#8EC2F2" : "inherit",
                  }}
                />
              </Tabs>
              <h3 className={styles.featureTitle}>{post.title}</h3>
              <p className={styles.featureDescription}>{post.description}</p>
              <div className={styles.smallContainer}>
                {/* First Part */}
                <div className={styles.part}>
                  <div className={styles.infoImg}>
                    <img src="/icons/clock.png" alt="Icon 1" />
                  </div>
                  <span className={styles.statInfo}>22 April 2021</span>
                </div>

                {/* Second Part */}
                <div className={styles.part}>
                  <div className={styles.infoImg}>
                    <img src="/icons/chart.png" alt="Icon 2" />
                  </div>
                  <span className={styles.statInfo}>10 Comments</span>
                </div>
              </div>

              <div className={styles.part}>
                <h6 className={styles.more}>Learn More</h6>
                <div className={styles.nextImg}>
                  <img src="/icons/arrow-next.png" alt="Icon 2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
