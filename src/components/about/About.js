import React from "react";
import styles from "./about.module.scss";
import VideoMp4 from "../../assests/img/Sandy beach.mp4";

export default function About() {
  return (
    <section className={styles.section_about}>
      <div className={styles.bg_video}>
        <video className={styles.bg_video__content} autoPlay muted loop>
          <source src={VideoMp4} type="video/mp4"></source>
        </video>
      </div>
      <div className={styles.about}>
        <h1 className={styles.headingPrimary}>About Me</h1>
        <p className={styles.aboutDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </section>
  );
}
