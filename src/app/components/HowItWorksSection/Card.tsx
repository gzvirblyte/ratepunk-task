import Image from "next/image";

import styles from "./Card.module.scss";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: Props) => (
  <div className={styles.card}>
    <Image
      src={icon}
      alt={icon}
      width={40}
      height={40}
      className={styles.icon}
    />
    <div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </div>
);

export default Card;
