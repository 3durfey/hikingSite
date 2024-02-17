import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import fetchPosts from "../jsFunctions/fetchPosts";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const PostContext = createContext();

function Container() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);
  //fetch all posts
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
            <Outlet />
          </div>
        </div>
        <Footer />
      </PostContext.Provider>
    </div>
  );
}
export { PostContext, Container };
//            <Item images={images} />
