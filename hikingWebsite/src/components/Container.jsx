import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import fetchPosts from "../jsFunctions/fetchPosts";
import Map from "./Map.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HikeInfo from "./HikeInfo.jsx";

const PostContext = createContext();

function Container() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);
  let cur = posts[currentPost];
  if (posts.length > 0) {
    cur = posts[currentPost].slug;
  }
  useEffect(() => {
    (async function () {
      try {
        const posts = await fetchPosts("posts");
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <PostContext.Provider value={{ posts, currentPost, setCurrentPost }}>
        <Header />
        <div className="center">
          <div className="centerMain">
            <HikeInfo />
            <Map post={cur} />
          </div>
        </div>
        <Footer />
      </PostContext.Provider>
    </div>
  );
}
export { PostContext, Container };
