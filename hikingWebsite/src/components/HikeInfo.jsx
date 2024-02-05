import { useContext } from "react";
import { PostContext } from "./Container.jsx";
import Images from "./Images.jsx";
import styles from "../styles/HikeInfo.module.css";
import parse from "html-react-parser";
import { HTMLToJSON } from "html-to-json-parser";

async function test(input) {
  let result = await HTMLToJSON(input, true);
  console.log(result);
}
export default function HikeInfo() {
  const { posts, currentPost } = useContext(PostContext);
  const info = posts[currentPost];

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
