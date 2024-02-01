/*
component for the header of the website, contains the title and the dropdown menu, which is a component imported from Button.jsx, which gets trails from API call and displays them in the dropdown menu
*/

import styles from "../styles/Header.module.css";
import Button from "./Button.jsx";
import { useContext } from "react";
import { PostContext } from "./Container.jsx";

export default function Header() {
  const { posts, currentPost, setCurrentPost } = useContext(PostContext);
  const titles = posts.map((post) => post.title.rendered);
  return (
    <div className={styles.main}>
      <h1>HikeFlow</h1>
      <span className={styles.dropdownContainer}>
        <Button title="Trails" />
      </span>
    </div>
  );
}
