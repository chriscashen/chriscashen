import React from "react";
import styles from "./hero.module.scss";
import self from "../../assests/img/self.jpg";

export default function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.hero}>
        <div className={styles.heroTextBox}>
          <h1 className={styles.headingPrimary}>Full Stack Developer</h1>
          <p className={styles.heroDescription}>
            I love to design and build scalable web applications, that provide
            exceptional user experiences.
          </p>
          <a className={styles.btnFull} href="#">
            Get in Touch
          </a>
          <a className={styles.btnOutline} href="#">
            About Me
          </a>
        </div>
        <div className={styles.heroImageBox}>
          <img className={styles.heroImg} src={self} alt="chris cashen"></img>
        </div>
      </div>
    </section>
  );
}
