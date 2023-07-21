"use client";
import React, { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";
import { usePathname } from "next/navigation";
import styles from "./header.module.scss";
import Navbar from "../Navbar/navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  useEffect(() => {
    const handleThrottledScroll = throttle(300, handleScroll);
    const position = window.scrollY || window.pageYOffset;

    if (position > 200) {
      setIsScrolled(true);
    }

    window.addEventListener("scroll", handleThrottledScroll);

    return () => {
      window.removeEventListener("scroll", handleThrottledScroll);
    };
  }, []);

  const isHeaderWhite = isScrolled || checkPathName(currentPathname);

  return (
    <header
      className={`${styles.header} ${isHeaderWhite && styles.header_white} ${
        isScrolled && styles.header_shadow
      }`}
    >
      <Navbar isScrolled={isScrolled} isHeaderWhite={isHeaderWhite} />
    </header>
  );
};

export default Header;
