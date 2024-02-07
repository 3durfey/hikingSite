import styles from "../styles/Item.module.css";
import landscape from "../../images/landscape.jpeg";
import parse from "html-react-parser";

export default function Item({ images }) {
  return (
    images &&
    images.map((image, index) => (
      <div key={index} className={styles.imageWrapper}>
        <img className={styles.image} src={image.link} alt="item image" />
        <div className={styles.descriptionContainer}>
          <p className={styles.imageDescription}>
            {parse(image.caption.rendered)}
          </p>
        </div>
      </div>
    ))
  );
  //return <img className={styles.image} src={landscape} alt="" />;
}
