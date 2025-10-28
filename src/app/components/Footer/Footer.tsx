import Image from "next/image";
import Link from "next/link";

import { footerData } from "@/app/lib/placeholder-data";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contentWrapper}>
      <div className={styles.grid}>
        {footerData.map((column) => (
          <div key={column.title} className={styles.column}>
            <p className={styles.columnTitle}>{column.title}</p>
            {column.links.map((link) => {
              return (
                <Link key={link.text} href={link.href} className={styles.link}>
                  {link.text}
                </Link>
              );
            })}
            {column.contact && (
              <>
                <p className={`${styles.columnTitle} ${styles.contactTitle}`}>
                  Contact us
                </p>
                <span className={styles.contactLink}>{column.contact}</span>
              </>
            )}
          </div>
        ))}
        <div className={styles.column}>
          <p className={styles.columnTitle}>Get the app</p>
          <Image
            src="/icons/app store qr-code 1.svg"
            alt="qr-code"
            width={124}
            height={124}
            className={styles.qrCodePlaceholder}
          />
          <Image
            src="/icons/Download_on_the_App_Store_Badge 2.svg"
            alt="apple-store"
            width={124}
            height={38}
            className={styles.appleStore}
          />
          <Image
            src="/icons/Google_Play_Store_badge_EN 1.svg"
            alt="google-store"
            width={124}
            height={38}
          />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.bottomBar}>
        <Image
          src="/icons/ratepunk-logo-dark.svg"
          alt="ratepunk-logo"
          width={125}
          height={32}
        />
        <div className={styles.legalBar}>
          <p className={styles.excellentText}>Excellent</p>
          <Image
            src="/icons/ratings.svg"
            alt="ratings"
            width={132}
            height={24}
          />
          <div>
            <Image src="/icons/star.svg" alt="star" width={25} height={25} />
            <span className={styles.trustpilot}>Trustpilot</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          © 2025 Ratepunk. All Rights Reserved.
        </span>
        <div className={styles.legalLinks}>
          <Link href="#" className={styles.legalLink}>
            Privacy Policy
          </Link>
          <Link href="#" className={styles.legalLink}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
