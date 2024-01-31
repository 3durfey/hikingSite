import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import fetchPosts from "../jsFunctions/fetchPosts";
import Map from "./Map.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PostContext = createContext();

export default function Container() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchFunc() {
      const res = await fetchPosts();
      console.log(res);
      setPosts(res);
    }
    fetchFunc();
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
