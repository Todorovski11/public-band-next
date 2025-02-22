"use client";
import ParallaxScroll from "@/app/ui/parallax-scroll";
import { BackgroundBeamsWithCollision } from "@/app/ui/background-beams-with-collision";

// Import all images
import img1 from "../../../../public/assets/Gallery_photos/1.png";
import img2 from "../../../../public/assets/Gallery_photos/2.png";
import img3 from "../../../../public/assets/Gallery_photos/3.png";
import img4 from "../../../../public/assets/Gallery_photos/4.png";
import img5 from "../../../../public/assets/Gallery_photos/5.png";
import img6 from "../../../../public/assets/Gallery_photos/6.png";
import img7 from "../../../../public/assets/Gallery_photos/7.png";
import img8 from "../../../../public/assets/Gallery_photos/8.png";
import img9 from "../../../../public/assets/Gallery_photos/9.png";
import img10 from "../../../../public/assets/Gallery_photos/10.png";
import img11 from "../../../../public/assets/Gallery_photos/11.png";
import img12 from "../../../../public/assets/Gallery_photos/12.png";
import img13 from "../../../../public/assets/Gallery_photos/13.png";
import img14 from "../../../../public/assets/Gallery_photos/14.png";
import img15 from "../../../../public/assets/Gallery_photos/15.png";
import img16 from "../../../../public/assets/Gallery_photos/16.png";
import img17 from "../../../../public/assets/Gallery_photos/17.png";
import img18 from "../../../../public/assets/Gallery_photos/18.png";
import img19 from "../../../../public/assets/Gallery_photos/19.png";
import img20 from "../../../../public/assets/Gallery_photos/20.png";
import img21 from "../../../../public/assets/Gallery_photos/21.png";

const baseImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21
];

// Function to shuffle and distribute images evenly
const distributeImages = (images) => {
  const shuffled = [...images].sort(() => Math.random() - 0.5);
  const third = Math.ceil(shuffled.length / 3);

  return {
    firstPart: shuffled.slice(0, third),
    secondPart: shuffled.slice(third, 2 * third),
    thirdPart: shuffled.slice(2 * third),
  };
};

// Distribute images
const { firstPart, secondPart, thirdPart } = distributeImages(baseImages);

const GallerySection = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full py-10">
        <ParallaxScroll images={[...firstPart, ...secondPart, ...thirdPart]} />
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default GallerySection;
