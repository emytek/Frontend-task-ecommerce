import React from "react";
import { posts } from "../../utils/PostData";
import styles from "./styles.module.css";
import IntroSection from "../IntroSection";

export default function PostSection() {
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
              <img src={post.image} alt={`post ${post.id}`} />
              <h3 className={styles.featureTitle}>{post.title}</h3>
              <p className={styles.featureDescription}>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
