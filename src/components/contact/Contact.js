import React from "react";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.section_cta}>
      <div className={styles.container}>
        <div className={styles.cta}>
          <div className={styles.cta_text_box}>
            <h2 className={styles.heading_secondary}>Send me a message!</h2>
            <p className={styles.cta_text}>
              Got a question, or just want to say hi? Go ahead.
            </p>
            <form className={styles.cta_form}>
              <div>
                <label for="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Chris Cashen"
                  required
                />
              </div>
              <div>
                <label for="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
              <div>
                <label for="message">Your Message</label>
                <textarea
                  id="message"
                  type="text"
                  placeholder="Type your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button className={styles.btn}>Get in touch!</button>
            </form>
          </div>
          <div
            className={styles.cta_img_box}
            role="img"
            aria-label="sunset"
          ></div>
        </div>
      </div>
    </section>
  );
}
