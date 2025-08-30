import { useEffect } from "react";
import styles from "./UnderConstruction.module.scss";

export default function UnderConstruction({ open, section, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    // prevent body scroll while open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="uc-title"
    >
      <div className={styles.card}>
        <h2 id="uc-title" className={styles.title}>
          En construction
        </h2>
        <p className={styles.text}>
          La section <strong>{section}</strong> est en cours de construction.
          <br />
          Reviens bientôt !
        </p>
        <button className={styles.close} onClick={onClose} autoFocus>
          Fermer
        </button>
      </div>
      <button
        className={styles.scrim}
        onClick={onClose}
        aria-label="Fermer"
      ></button>
    </div>
  );
}
