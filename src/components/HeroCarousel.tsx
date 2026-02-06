import { useEffect, useRef, useState } from "react";

import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import carousel5 from "@/assets/carousel-5.png";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

const HeroCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + speed;
        // Reset when we've scrolled through one complete set
        const singleSetWidth = scrollContainer.scrollWidth / 3;
        if (newPosition >= singleSetWidth) {
          return 0;
        }
        return newPosition;
      });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full overflow-hidden py-4">
      <div
        ref={scrollRef}
        className="flex gap-6"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          width: "fit-content",
        }}
      >
        {/* Triple the images for seamless infinite scroll */}
        {[...images, ...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 p-2 bg-white rounded-lg shadow-md">
            <img
              src={image}
              alt={`YourNameHere Cafe ${(index % images.length) + 1}`}
              className="w-48 h-36 md:w-64 md:h-48 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
