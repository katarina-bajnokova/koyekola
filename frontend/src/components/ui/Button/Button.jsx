import clsx from "clsx";
import styles from "./Button.module.scss";

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={clsx(styles.btn, styles[variant])} {...props}>
      {children}
    </button>
  );
}
