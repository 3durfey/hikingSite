import { useContext } from "react";
import { PostContext } from "./Container.jsx";
import Images from "./Images.jsx";

export default function HikeInfo() {
  const { posts, currentPost } = useContext(PostContext);
  const info = posts[currentPost];
  return (
    <div className="info">
      <Images></Images>
      <h1>WordPress Posts</h1>
      <ul>
        {info && (
          <li key={info.id}>
            <h2>{info.title.rendered}</h2>
            <p>
              <a href={info.slug}>{info.slug}</a>
            </p>
            <hr />
          </li>
        )}
      </ul>
    </div>
  );
}
