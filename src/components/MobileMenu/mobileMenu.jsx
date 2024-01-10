"use client";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAnimate, motion, stagger } from "framer-motion";
import { services, technologies, about } from "../../../resources/pages";
import MenuToggle from "../MenuToggle/menuToggle";
import AppContext from "../../../AppContext";

import styles from "./mobileMenu.module.scss";
import animations from "../../../resources/animations";

import mobile_logo from "../../../public/mobile-logo.png";
import mobile_logo_blue from "../../../public/mobile-logo-blue.png";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.03), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.03, { from: "last" }), at: ">" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([...menuAnimations]);
  }, [animate, isOpen]);

  return scope;
}

const MobileMenu = ({ headerIsWhite }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoaded } = useContext(AppContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scope = useMenuAnimation(isOpen);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setIsOpen(false);
    }
  };

  const pageLoadingOverlayHidden = isLoaded ? styles.overlay : "";

  return (
    <>
      <div className={styles.mobile_navigation_wrap}>
        <div>
          <Link href="/" className={styles.site_logo_mobile}>
            <Image
              src={headerIsWhite ? mobile_logo_blue : mobile_logo}
              alt="logo"
              priority={true}
            />
          </Link>
        </div>
        <div className={styles.toggle_btn_wrap}>
          <MenuToggle
            isOpen={isOpen}
            toggle={handleMenuToggle}
            headerIsWhite={headerIsWhite}
          />
        </div>
      </div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={animations.overlayMobileMenu}
        className={pageLoadingOverlayHidden}
        onClick={handleBackdropClick}
      >
        <div ref={scope} className={styles.mobile_menu}>
          <nav className={styles.menu}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_list_item}>
                SERVICES
                <ul className={styles.nav_list_item_list}>
                  {services.map(({ id, text, mobileText, path }) => (
                    <li key={id}>
                      <Link
                        href={path}
                        onClick={handleMenuToggle}
                        className={styles.site_nav_link}
                      >
                        {mobileText || text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={styles.nav_list_item}>
                TECHNOLOGIES
                <ul className={styles.nav_list_item_list}>
                  {technologies.map(({ id, text, path }) => (
                    <li key={id}>
                      <Link
                        href={path}
                        onClick={handleMenuToggle}
                        className={styles.site_nav_link}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={styles.nav_list_item}>
                <Link href="/products" onClick={handleMenuToggle}>
                  PRODUCTS
                </Link>
              </li>
              <li className={styles.nav_list_item}>
                <Link href="/portfolio" onClick={handleMenuToggle}>
                  PORTFOLIO
                </Link>
              </li>
              <li className={styles.nav_list_item}>
                <Link href="/about-us" onClick={handleMenuToggle}>
                  ABOUT US
                </Link>
                <ul className={styles.nav_list_item_list}>
                  {about.map(({ id, text, path }) => (
                    <li key={id}>
                      <Link
                        href={path}
                        onClick={handleMenuToggle}
                        className={styles.site_nav_link}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={styles.site_nav_button_item}>
                <Link href="contacts" className={styles.site_nav_button}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
