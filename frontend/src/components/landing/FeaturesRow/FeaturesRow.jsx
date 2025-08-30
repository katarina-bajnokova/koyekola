import styles from "./FeaturesRow.module.scss";
import FeatureCard from "@/components/landing/FeatureCard/FeatureCard";

import brainIcon from "@/assets/images/landing/brainIcon.png";
import bookIcon from "@/assets/images/landing/bookIcon.png";
import targetIcon from "@/assets/images/landing/targetIcon.png";

export default function FeaturesRow() {
  return (
    <section className={styles.row} aria-label="Fonctionnalités">
      <FeatureCard icon={brainIcon} title="Mini-jeux">
        Apprends des mots et expressions en lingala de manière ludique.
      </FeatureCard>

      <FeatureCard icon={bookIcon} title="Livre de mots">
        Explore et révise les mots que tu as débloqués.
      </FeatureCard>

      <FeatureCard icon={targetIcon} title="Suivi des progrès">
        Suis ton apprentissage, niveau après niveau.
      </FeatureCard>
    </section>
  );
}
