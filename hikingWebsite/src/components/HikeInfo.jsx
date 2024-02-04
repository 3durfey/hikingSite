import { useContext } from "react";
import { PostContext } from "./Container.jsx";
import Images from "./Images.jsx";
import styles from "../styles/HikeInfo.module.css";
import parse from "html-react-parser";

export default function HikeInfo() {
  const { posts, currentPost } = useContext(PostContext);
  const info = posts[currentPost];
  //console.log(parse(info.content.rendered));
  return (
    <div className="info">
      {info && (
        <>
          <div className={styles.title}>{parse(info.title.rendered)}</div>
        </>
      )}
      <Images />

      {info && (
        <div key={info.id}>
          <div className="wordPressInfo">{parse(info.content.rendered)}</div>
          <hr />
        </div>
      )}
    </div>
  );
}
