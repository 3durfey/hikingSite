import Carousel from "react-bootstrap/Carousel";
import fetchPosts from "../jsFunctions/fetchPosts";
import { useEffect, useState } from "react";
import styles from "../styles/Images.module.css";
import { useContext } from "react";
import { PostContext } from "./Container.jsx";

export default function Images() {
  const { posts, currentPost } = useContext(PostContext);
  const [images, setImages] = useState([]);
  let regex = new RegExp("test", "i");

  if (posts.length > 0) {
    regex = new RegExp(posts[currentPost].slug, "i");
  }

  useEffect(() => {
    (async function () {
      try {
        const Images = await fetchPosts("media");
        console.log(posts);

        const ImagesFiltered = Images.filter(
          (media) =>
            media.media_type === "image" && regex.test(media.title.rendered)
        );
        setImages(ImagesFiltered);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <div className={styles.imageContainer}>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className={styles.image} src={image.link} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
