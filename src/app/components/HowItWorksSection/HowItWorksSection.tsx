import { howItWorksSteps } from "@/app/lib/placeholder-data";

import styles from "./HowItWorksSection.module.scss";
import Card from "./Card";

const HowItWorksSection = () => (
  <section className={styles.howItWorksSection}>
    <h2 className={styles.sectionHeading}>How it works?</h2>
    <div className={styles.cardGrid}>
      {howItWorksSteps.map((section) => (
        <Card
          key={section.title}
          icon={section.icon}
          title={section.title}
          description={section.description}
        />
      ))}
    </div>
  </section>
);

export default HowItWorksSection;
