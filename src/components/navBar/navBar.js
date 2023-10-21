"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./navBar.module.css";
import Image from "next/image";
import logoPics from "@/images/logo-no-background (2).png";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`${styles.navbar} ${navActive ? styles.active : ""}`}>
      <div>
        <Image src={logoPics} alt="Logoipsum" />
      </div>
      <a
        className={`${styles.nav__hamburger} ${navActive ? styles.active : ""}`}
        onClick={toggleNav}
      >
        <span className={styles.nav__hamburger__line}></span>
        <span className={styles.nav__hamburger__line}></span>
        <span className={styles.nav__hamburger__line}></span>
      </a>
      <div
        className={`${styles["navbar--items"]} ${
          navActive ? styles.active : ""
        }`}
      >
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles["navbar--active-content"]}
              spy={true}
              smooth={true}
              offset={-150}
              duration={200}
              to="startSection"
              className={styles["navbar--content"]}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles["navbar--active-content"]}
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              to="currencyList"
              className={styles["navbar--content"]}
            >
              Currency List
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles["navbar--active-content"]}
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              to="AboutMe"
              className={styles["navbar--content"]}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles["navbar--active-content"]}
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              to="Contact"
              className={styles["navbar--content"]}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
