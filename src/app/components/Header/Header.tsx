"use client";

import Image from "next/image";
import { useState } from "react";

import { routes } from "@/app/lib/placeholder-data";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className={styles.header}>
      <Image
        src="/icons/ratepunk-logo.svg"
        alt="ratepunk-logo"
        width={125}
        height={52}
        className={styles.logo}
      />
      <button
        className={styles.mobileNavToggle}
        onClick={toggleMobileNav}
        aria-label="Toggle navigation"
      >
        {isMobileNavOpen ? "✕" : "☰"}
      </button>
      {routes.map((route) => (
        <div className={styles.route} key={route}>
          {route}
        </div>
      ))}
    </header>
  );
};

export default Header;
