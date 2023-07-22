"use client";
import React, { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";
import { usePathname } from "next/navigation";

import styles from "./layout.module.scss";

import Header from "../Header/header";
import GoTopButton from "../GoTopButton/goTopButton";
import Footer from "../Footer/footer";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBtnShow, setIsBtnShow] = useState(false);

  const pathname = usePathname();

  const currentPathname = pathname;

  const checkPathName = (pathname) => {
    if (pathname !== "/") {
      return true;
    }

    return false;
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (scrollTop > 600) {
      setIsBtnShow(true);
    } else {
      setIsBtnShow(false);
    }
  };

  useEffect(() => {
    const handleThrottledScroll = throttle(300, handleScroll);
    const position = window.scrollY || window.pageYOffset;

    if (position > 200) {
      setIsScrolled(true);
    }

    if (position > 600) {
      setIsBtnShow(true);
    }

    window.addEventListener("scroll", handleThrottledScroll);

    return () => {
      window.removeEventListener("scroll", handleThrottledScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isHeaderWhite = isScrolled || checkPathName(currentPathname);

  return (
    <>
      <Header isScrolled={isScrolled} isHeaderWhite={isHeaderWhite} />
      <main className={styles.main}>
        {children}
        <GoTopButton isBtnShow={isBtnShow} scrollToTop={scrollToTop} />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
