import { faqs } from "../../lib/placeholder-data";
import FAQItem from "./FAQItem";
import styles from "./FAQSection.module.scss";

const FAQSection = () => {
  return (
    <section>
      <h2 className={styles.sectionHeading}>FAQ</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
