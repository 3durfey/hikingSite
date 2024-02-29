import styles from "../styles/Item.module.css";
import landscape from "../../images/landscape.jpeg";
import parse from "html-react-parser";
import landscape2 from "../../images/landscape2.jpg";
import { useEffect, useState } from "react";
import fetchPosts from "../jsFunctions/fetchPosts";
import { Link } from "react-router-dom";

export default function Item() {
  const [images, setImages] = useState([]);

  //fetch all images from media
  useEffect(() => {
    (async function () {
      try {
        const images = await fetchPosts("media");
        setImages(images);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    })();
  }, []);
  return (
    <>
      <img src={landscape2} className="image" alt="image of beach" />
      <div className={styles.container}>
        {images &&
          // eslint-disable-next-line react/prop-types
          images.map((image, index) => (
            <Link to="test" key={index} className={styles.imageWrapper}>
              <img className={styles.image} src={image.link} alt="item image" />
              <div className={styles.descriptionContainer}>
                <div className={styles.imageDescription}>
                  {parse(image.caption.rendered)}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
  //return <img className={styles.image} src={landscape} alt="" />;
}
