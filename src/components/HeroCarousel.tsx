import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import carousel5 from "@/assets/carousel-5.png";

import "./HeroCarousel.css";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
// Duplicate for seamless loop
const allImages = [...images, ...images];

const HeroCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {allImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image}
              alt={`Little Umbrella café ${(index % images.length) + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
