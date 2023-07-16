"use client";

import styles from "./navbar.module.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { services, technologies, about } from "../../resources/pages";

const Navbar = () => {
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

  return (
    <div className={styles.site_nav_wrapper}>
      <div>
        <Link href="/" className={styles.site_logo}>
          <Image src={logo} alt="logo" priority={true} />
        </Link>
      </div>

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
              <BiChevronDown
                size="cssSize"
                className={`${styles.icon} ${
                  servicesMenuOpen ? styles.iconOpen : styles.iconClose
                }`}
              />
            </button>
            {servicesMenuOpen && (
              <ul
                className={styles.hover_menu}
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                {services.map(({ id, text, path }) => (
                  <li key={id}>
                    <Link
                      href={path}
                      onClick={handleMouseClick}
                      className={styles.site_nav_link}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className={styles.site_nav_item}>
            <button
              type="button"
              className={styles.site_nav_link_button}
              onMouseEnter={handleMouseEnterTechnologies}
              onMouseLeave={handleMouseLeaveTechnologies}
            >
              TECHNOLOGIES
              <BiChevronDown
                size="cssSize"
                className={`${styles.icon} ${
                  technologiesMenuOpen ? styles.iconOpen : styles.iconClose
                }`}
              />
            </button>
            {technologiesMenuOpen && (
              <ul
                className={styles.hover_menu}
                onMouseEnter={handleMouseEnterTechnologies}
                onMouseLeave={handleMouseLeaveTechnologies}
              >
                {technologies.map(({ id, text, path }) => (
                  <li key={id}>
                    <Link
                      href={path}
                      onClick={handleMouseClick}
                      className={styles.site_nav_link}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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
              <BiChevronDown
                size="cssSize"
                className={`${styles.icon} ${
                  aboutMenuOpen ? styles.iconOpen : styles.iconClose
                }`}
              />
            </Link>
            {aboutMenuOpen && (
              <ul
                className={styles.hover_menu}
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
              >
                {about.map(({ id, text, path }) => (
                  <li key={id}>
                    <Link
                      href={path}
                      onClick={handleMouseClick}
                      className={styles.site_nav_link}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <button type="button" className={styles.site_nav_button}>
        CONTACT US
      </button>
    </div>
  );
};

export default Navbar;
