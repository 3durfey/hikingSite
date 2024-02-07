import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import fetchPosts from "../jsFunctions/fetchPosts";
import Map from "./Map.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HikeInfo from "./HikeInfo.jsx";
import landscape2 from "../../images/landscape2.jpg";
import Item from "./Item.jsx";

const PostContext = createContext();

function Container() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);
  const [images, setImages] = useState([]);
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
  useEffect(() => {
    (async function () {
      try {
        const images = await fetchPosts("media");
        console.log(images);
        setImages(images);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    })();
  }, []);
  return (
    <div className="main">
      <PostContext.Provider value={{ posts, currentPost, setCurrentPost }}>
        <Header />
        <img src={landscape2} className="image" alt="image of beach" />
        <div className="center">
          <div className="centerMain">
            <Item images={images} />
          </div>
        </div>
        <Footer />
      </PostContext.Provider>
    </div>
  );
}
export { PostContext, Container };
