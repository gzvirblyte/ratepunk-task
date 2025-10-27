import Image from "next/image";

import styles from "./Header.module.scss";

const routes = ["Hotels", "Extensions", "Press", "Blogs"];

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/icons/ratepunk-logo.svg"
        alt="ratepunk-logo"
        width={125}
        height={52}
        className={styles.logo}
      />
      {routes.map((route) => (
        <div className={styles.route}>{route}</div>
      ))}
    </header>
  );
};

export default Header;
