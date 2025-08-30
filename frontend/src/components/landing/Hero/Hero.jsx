import styles from "./Hero.module.scss";
import Button from "@/components/ui/Button/Button";
import monkey from "@/assets/images/landing/monkey.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.title}>
          Apprends le Lingala en <br /> t’amusant
        </h1>
        <Button variant="primary" aria-label="Commencer">
          commencer
        </Button>
      </div>

      <div className={styles.art}>
        <img src={monkey} alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
