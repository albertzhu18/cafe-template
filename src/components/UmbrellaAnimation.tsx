import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const UmbrellaAnimation = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for the umbrella animation
  const umbrellaY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const umbrellaScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const umbrellaRotate = useTransform(scrollYProgress, [0, 0.5], [0, -15]);
  const canopyScale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.3]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <UmbrellaSVG />
        </div>
      </div>
    );
  }

  // Reduced motion: static umbrella
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className="w-full h-full flex items-center justify-center">
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UmbrellaSVG />
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 animate-float"
        style={{
          y: umbrellaY,
          scale: umbrellaScale,
          rotate: umbrellaRotate,
          opacity,
        }}
      >
        <motion.div style={{ scaleY: canopyScale, transformOrigin: "bottom center" }}>
          <UmbrellaSVG />
        </motion.div>
      </motion.div>
    </div>
  );
};

const UmbrellaSVG = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full drop-shadow-lg"
    aria-label="Little Umbrella logo - an open umbrella"
  >
    {/* Umbrella canopy - warm terracotta */}
    <ellipse
      cx="100"
      cy="70"
      rx="75"
      ry="35"
      className="fill-primary"
    />
    
    {/* Canopy segments (decorative lines) */}
    <path
      d="M25 70 Q100 20 175 70"
      className="stroke-primary-foreground/20"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M40 65 Q100 30 160 65"
      className="stroke-primary-foreground/15"
      strokeWidth="1"
      fill="none"
    />
    
    {/* Canopy edge detail - amber accent */}
    <path
      d="M25 70 Q37.5 80 50 70 Q62.5 80 75 70 Q87.5 80 100 70 Q112.5 80 125 70 Q137.5 80 150 70 Q162.5 80 175 70"
      className="stroke-amber-light fill-none"
      strokeWidth="3"
      strokeLinecap="round"
    />
    
    {/* Handle shaft */}
    <line
      x1="100"
      y1="70"
      x2="100"
      y2="165"
      className="stroke-warm-brown"
      strokeWidth="4"
      strokeLinecap="round"
    />
    
    {/* Handle curve (hook) */}
    <path
      d="M100 165 Q100 180 88 180 Q76 180 76 170"
      className="stroke-warm-brown fill-none"
      strokeWidth="4"
      strokeLinecap="round"
    />
    
    {/* Top tip - golden accent */}
    <circle
      cx="100"
      cy="35"
      r="4"
      className="fill-golden"
    />
    
    {/* Subtle shine on canopy */}
    <ellipse
      cx="80"
      cy="55"
      rx="20"
      ry="8"
      className="fill-white/10"
    />
  </svg>
);

export default UmbrellaAnimation;
