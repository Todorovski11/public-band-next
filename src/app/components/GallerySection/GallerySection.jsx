"use client";
import ParallaxScroll from "@/app/ui/parallax-scroll";
import { BackgroundBeamsWithCollision } from "@/app/ui/background-beams-with-collision";



const baseImages = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2640&q=80",
];

// Repeat images for seamless scrolling
const images = [...baseImages, ...baseImages, ...baseImages];

const GallerySection = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full py-10">
        <ParallaxScroll images={images} />
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default GallerySection;
