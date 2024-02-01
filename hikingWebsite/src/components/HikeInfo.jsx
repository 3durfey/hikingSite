import { useContext } from "react";
import { PostContext } from "./Container.jsx";

export default function HikeInfo() {
  const { posts, currentPost } = useContext(PostContext);
  const info = posts[currentPost];
  if (info !== undefined) {
    console.log(info.title.rendered);
  }
  console.log(currentPost);
  return (
    <div className="info">
      <h1>WordPress Posts</h1>
      <ul>
        {info && (
          <li key={info.id}>
            <h2>{info.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: info.content.rendered }} />
            <p>
              <a href={info.link}>Read more</a>
            </p>
            <hr />
          </li>
        )}
      </ul>
    </div>
  );
}
