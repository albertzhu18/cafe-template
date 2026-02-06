import { motion } from "framer-motion";

import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import carousel5 from "@/assets/carousel-5.png";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
// Triple for seamless loop
const allImages = [...images, ...images, ...images];

const HeroCarousel = () => {
  // Calculate the width of one set of images (5 images * ~280px each with gap)
  const singleSetWidth = images.length * 280;

  return (
    <div className="w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [-singleSetWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {allImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-2 bg-white rounded-lg shadow-md"
          >
            <img
              src={image}
              alt={`Little Umbrella café ${(index % images.length) + 1}`}
              className="w-48 h-36 md:w-64 md:h-48 object-cover rounded"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
