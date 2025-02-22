"use client";

import React, { useState } from "react";
import Image from "next/image";

// Import images
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

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21
];

const MobileGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      {/* Improved Grid Layout */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {images.map((img, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <Image src={selectedImage} alt="Selected Image" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileGallery;
