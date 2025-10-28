import FAQSection from "./components/FAQSection/FAQSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import ReferalSection from "./components/ReferalSection/ReferalSection";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.mainContainer}>
          <Sidebar />
          <div className={styles.contentArea}>
            <ReferalSection />
            <HowItWorksSection />
            <FAQSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
