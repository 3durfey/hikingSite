import styles from "../styles/Header.module.css";
import Button from "./Button.jsx";

export default function Header() {
  const arr = ["Home", "About", "Contact", "Login"];
  return (
    <div className={styles.main}>
      <h1>HikeFlow</h1>
      <span className={styles.dropdownContainer}>
        <Button buttons={arr} title="Trails" />
      </span>
    </div>
  );
}
