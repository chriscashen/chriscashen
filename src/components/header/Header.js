import React from "react";
import styles from "./header.module.scss";
import logo from "../../assests/img/Chris.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} atl="Chris Cashen Logo"></img>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          <li>
            <a className={styles.mainNavLink} href="#">
              About Me
            </a>
          </li>
          <li>
            <a className={styles.mainNavLink} href="#">
              Experience
            </a>
          </li>
          <li>
            <a className={styles.mainNavLink} href="#">
              Projects
            </a>
          </li>
          <li>
            <a className={styles.mainNavLink} href="#">
              My Stack
            </a>
          </li>
          <li>
            <a className={styles.mainNavCta} href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
