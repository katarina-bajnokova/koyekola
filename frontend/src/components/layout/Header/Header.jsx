import { useState, useCallback } from "react";
import styles from "./Header.module.scss";
import logo from "@/assets/images/landing/logo.png";
import UnderConstruction from "@/components/ui/UnderConstruction/UnderConstruction";

export default function Header() {
  const [overlay, setOverlay] = useState({ open: false, section: "" });
  const show = useCallback(
    (name) => setOverlay({ open: true, section: name }),
    []
  );
  const close = useCallback(() => setOverlay({ open: false, section: "" }), []);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.bar}>
            <img src={logo} alt="Koyekola" className={styles.logo} />

            <nav className={styles.nav} aria-label="navigation principale">
              <a
                href="#jeux"
                onClick={(e) => {
                  e.preventDefault();
                  show("jeux");
                }}
              >
                jeux
              </a>
              <a
                href="#livre"
                onClick={(e) => {
                  e.preventDefault();
                  show("livre");
                }}
              >
                livre
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  show("contact");
                }}
              >
                contact
              </a>
              <a
                href="#connexion"
                onClick={(e) => {
                  e.preventDefault();
                  show("connexion");
                }}
              >
                connexion
              </a>
            </nav>
          </div>
        </div>
      </header>

      <UnderConstruction
        open={overlay.open}
        section={overlay.section}
        onClose={close}
      />
    </>
  );
}
