import styles from "./styles/Header.module.css";
import Button from "./Button.jsx";

export default function Header() {
  const arr = ["Home", "About", "Contact", "Login"];
  return (
    <div className={styles.main}>
      <h1>HikeFlow</h1>
      <Button buttons={arr} />
    </div>
  );
}
