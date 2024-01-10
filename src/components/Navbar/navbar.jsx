"use client";
import styles from "./navbar.module.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { BsChevronDown } from "react-icons/bs";
import { services, technologies, about } from "../../../resources/pages";

import animations from "../../../resources/animations";

import MobileMenu from "../MobileMenu/mobileMenu";

import logo from "../../../public/logo.png";
import logoBlue from "../../../public/logo-blue.png";

const Navbar = ({ isScrolled, whiteHeaderColor }) => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [technologiesMenuOpen, setTechnologiesMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const handleMouseEnterServices = () => {
    setServicesMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    setServicesMenuOpen(false);
  };

  const handleMouseEnterTechnologies = () => {
    setTechnologiesMenuOpen(true);
  };

  const handleMouseLeaveTechnologies = () => {
    setTechnologiesMenuOpen(false);
  };

  const handleMouseEnterAbout = () => {
    setAboutMenuOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    setAboutMenuOpen(false);
  };

  const handleMouseClick = () => {
    setServicesMenuOpen(false);
    setTechnologiesMenuOpen(false);
    setAboutMenuOpen(false);
  };

  const headerIsWhite = isScrolled || whiteHeaderColor;

  return (
    <>
      <div
        className={`${styles.site_nav_wrapper} ${
          headerIsWhite && styles.site_nav_wrapper_white
        }`}
      >
        <Link href="/" className={styles.site_logo}>
          <Image
            src={headerIsWhite ? logoBlue : logo}
            alt="logo"
            priority={true}
          />
        </Link>

        <nav>
          <ul className={styles.site_nav_list}>
            <li className={styles.site_nav_item}>
              <button
                type="button"
                className={styles.site_nav_link_button}
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                SERVICES
                <BsChevronDown
                  className={`${styles.icon} ${
                    servicesMenuOpen ? styles.iconOpen : styles.iconClose
                  }`}
                />
              </button>

              <motion.ul
                initial={false}
                animate={servicesMenuOpen ? "open" : "closed"}
                variants={animations.hoverMenuVariants}
                className={styles.hover_menu}
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                {services.map(({ id, text, path }) => (
                  <motion.li
                    key={id}
                    variants={animations.hoverMenuItemVariants}
                  >
                    <Link
                      href={path}
                      onClick={handleMouseClick}
                      className={styles.site_nav_link}
                    >
                      {text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </li>
            <li className={styles.site_nav_item}>
              <button
                type="button"
                className={styles.site_nav_link_button}
                onMouseEnter={handleMouseEnterTechnologies}
                onMouseLeave={handleMouseLeaveTechnologies}
              >
                TECHNOLOGIES
                <BsChevronDown
                  className={`${styles.icon} ${
                    technologiesMenuOpen ? styles.iconOpen : styles.iconClose
                  }`}
                />
              </button>

              <motion.ul
                initial={false}
                animate={technologiesMenuOpen ? "open" : "closed"}
                variants={animations.hoverMenuVariants}
                className={styles.hover_menu}
                onMouseEnter={handleMouseEnterTechnologies}
                onMouseLeave={handleMouseLeaveTechnologies}
              >
                {technologies.map(({ id, text, path }) => (
                  <motion.li
                    key={id}
                    variants={animations.hoverMenuItemVariants}
                  >
                    <Link
                      href={path}
                      onClick={handleMouseClick}
                      className={styles.site_nav_link}
                    >
                      {text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </li>
            <li className={styles.site_nav_item}>
              <Link className={styles.site_nav_link} href="/products">
                PRODUCTS
              </Link>
            </li>
            <li className={styles.site_nav_item}>
              <Link className={styles.site_nav_link} href="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className={styles.site_nav_item}>
              <Link
                href="/about-us"
                className={styles.site_nav_link}
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
              >
                ABOUT US
                <BsChevronDown
                  className={`${styles.icon} ${
                    aboutMenuOpen ? styles.iconOpen : styles.iconClose
                  }`}
                />
              </Link>

              <motion.ul
                initial={false}
                animate={aboutMenuOpen ? "open" : "closed"}
                variants={animations.hoverMenuVariants}
                className={styles.hover_menu}
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
              >
                {about.map(({ id, text, path }) => (
                  <motion.li
                    key={id}
                    variants={animations.hoverMenuItemVariants}
                  >
                    <Link
                      href={path}
                      onClick={handleMouseClick}
                      className={styles.site_nav_link}
                    >
                      {text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </li>
          </ul>
        </nav>
        <Link
          href="contacts"
          className={`${styles.site_nav_button} ${
            headerIsWhite && styles.site_nav_button_white_header
          }`}
        >
          CONTACT US
        </Link>
      </div>
      <MobileMenu headerIsWhite={headerIsWhite} isScrolled={isScrolled} />
    </>
  );
};

export default Navbar;
