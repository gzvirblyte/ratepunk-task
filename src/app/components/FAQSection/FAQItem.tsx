"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./FAQItem.module.scss";

type Props = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.questionButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={16}
          height={16}
        />
      </button>
      <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
