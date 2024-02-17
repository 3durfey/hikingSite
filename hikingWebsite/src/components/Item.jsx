import styles from "../styles/Item.module.css";
import landscape from "../../images/landscape.jpeg";
import parse from "html-react-parser";
import landscape2 from "../../images/landscape2.jpg";
import { useEffect, useState } from "react";
import fetchPosts from "../jsFunctions/fetchPosts";
export default function Item() {
  const [images, setImages] = useState([]);

  //fetch all images from media
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
    <>
      <img src={landscape2} className="image" alt="image of beach" />
      <div className={styles.container}>
        {images &&
          // eslint-disable-next-line react/prop-types
          images.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img className={styles.image} src={image.link} alt="item image" />
              <div
                className={styles.descriptionContainer}
                onClick={() => console.log(image.title.rendered)}
              >
                <p className={styles.imageDescription}>
                  {parse(image.caption.rendered)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
  //return <img className={styles.image} src={landscape} alt="" />;
}
