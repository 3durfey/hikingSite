import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import fetchPosts from "../jsFunctions/fetchPosts";
import Map from "./Map.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PostContext = createContext();

function Container() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <PostContext.Provider value={posts}>
        <Header />
        <Map />
        <Footer />
      </PostContext.Provider>
    </div>
  );
}
export { PostContext, Container };
