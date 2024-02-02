/*
component for the header of the website, contains the title and the dropdown menu, which is a component imported from Button.jsx, which gets trails from API call and displays them in the dropdown menu
*/

import styles from "../styles/Header.module.css";
import Button from "./Button.jsx";

export default function Header() {
  return (
    <div className={styles.main}>
      <h1>HikeFlow</h1>
      <span className={styles.dropdownContainer}>
        <Button title="Trails" />
      </span>
    </div>
  );
}
