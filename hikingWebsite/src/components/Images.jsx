import Carousel from "react-bootstrap/Carousel";
import fetchPosts from "../jsFunctions/fetchPosts";
import { useEffect, useState } from "react";
import styles from "../styles/Images.module.css";
import { useContext } from "react";
import { PostContext } from "./Container.jsx";

export default function Images() {
  const { posts, currentPost } = useContext(PostContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async function () {
      let regex =
        posts.length > 0
          ? new RegExp(posts[currentPost].slug, "i")
          : new RegExp("test", "i");

      try {
        const Images = await fetchPosts("media");
        const ImagesFiltered = Images.filter(
          (media) =>
            media.media_type === "image" && regex.test(media.title.rendered)
        );
        setImages(ImagesFiltered);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    })();
  }, [currentPost, posts]);

  return (
    <div className={styles.imageContainer}>
      {images ? (
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className={styles.image}
                src={image.link}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <i className="fas fa-spinner fa-4x fa-spin"></i>
      )}
    </div>
  );
}
