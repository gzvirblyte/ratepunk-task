import Image from "next/image";

import { routes } from "@/app/lib/placeholder-data";
import styles from "./Header.module.scss";

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
        <div className={styles.route} key={route}>
          {route}
        </div>
      ))}
    </header>
  );
};

export default Header;
