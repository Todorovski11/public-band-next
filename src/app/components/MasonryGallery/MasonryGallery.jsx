import React from "react";
import styles from "./MasonryGallery.module.css"; // Import the CSS module

const baseImages = [
  "/assets/Gallery_photos/1.png",
  "/assets/Gallery_photos/2.png",
  "/assets/Gallery_photos/3.png",
  "/assets/Gallery_photos/4.png",
  "/assets/Gallery_photos/5.png",
  "/assets/Gallery_photos/6.png",
  "/assets/Gallery_photos/7.png",
  "/assets/Gallery_photos/8.png",
  "/assets/Gallery_photos/9.png",
  "/assets/Gallery_photos/10.png",
  "/assets/Gallery_photos/11.png",
  "/assets/Gallery_photos/12.png",
  "/assets/Gallery_photos/13.png",
  "/assets/Gallery_photos/14.png",
  "/assets/Gallery_photos/15.png",
  "/assets/Gallery_photos/16.png",
  "/assets/Gallery_photos/17.png",
  "/assets/Gallery_photos/18.png",
  "/assets/Gallery_photos/19.png",
  "/assets/Gallery_photos/20.png",
  "/assets/Gallery_photos/21.png",
  "/assets/Gallery_photos/21.png",
  "/assets/Gallery_photos/4.png",
  "/assets/Gallery_photos/4.png",
  "/assets/Gallery_photos/4.png",
];

const MasonryGallery = () => {
  return ( 
      <div className={styles.masonry}>
        {baseImages.map((image, index) => (
          <div key={index} className={styles.masonryItem}>
            <img
              src={image}
              alt={`Gallery Photo ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
  );
};

export default MasonryGallery;
