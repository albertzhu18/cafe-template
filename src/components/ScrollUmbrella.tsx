import { useEffect, useState } from "react";

import frame01 from "@/assets/frames/frame01.png";
import frame02 from "@/assets/frames/frame02.png";
import frame03 from "@/assets/frames/frame03.png";
import frame04 from "@/assets/frames/frame04.png";
import frame05 from "@/assets/frames/frame05.png";
import frame06 from "@/assets/frames/frame06.png";
import frame07 from "@/assets/frames/frame07.png";

const frames = [frame01, frame02, frame03, frame04, frame05, frame06, frame07];

const ScrollUmbrella = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Animation completes over the first viewport height of scrolling
      const scrollProgress = Math.min(scrollY / (windowHeight * 0.8), 1);
      
      // Map scroll progress to frame index (0-6)
      const frameIndex = Math.min(
        Math.floor(scrollProgress * frames.length),
        frames.length - 1
      );
      
      setCurrentFrame(frameIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-16 h-20 md:w-20 md:h-24 lg:w-24 lg:h-28 flex items-center justify-center">
      <img
        src={frames[currentFrame]}
        alt="Little Umbrella logo"
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
};

export default ScrollUmbrella;
