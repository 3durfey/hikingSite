import styles from "../styles/Header.module.css";
import Button from "./Button.jsx";
import { useContext } from "react";
import { PostContext } from "./Container.jsx";

export default function Header() {
  const posts = useContext(PostContext);
  const titles = posts.map((post) => post.title.rendered);
  return (
    <div className={styles.main}>
      <h1>HikeFlow</h1>
      <span className={styles.dropdownContainer}>
        <Button buttons={titles} title="Trails" />
      </span>
    </div>
  );
}
