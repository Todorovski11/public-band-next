import classes from './GallerySection.module.css';

export function GallerySection() {
  const images = new Array(6).fill('/assets/heroImage.jpg'); // Use public path

  return (
    <div className={classes.wrapper}>
      <div className={classes.grid}>
        {images.map((img, index) => (
          <img key={index} src={img} alt="Gallery" className={classes.image} />
        ))}
      </div>
    </div>
  );
}
