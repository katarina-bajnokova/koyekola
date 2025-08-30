import styles from "./FeatureCard.module.scss";

export default function FeatureCard({ icon, title, children }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <img src={icon} alt="" aria-hidden="true" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{children}</p>
    </article>
  );
}
