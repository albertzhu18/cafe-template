import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import UmbrellaAnimation from "./UmbrellaAnimation";
import HeroCarousel from "./HeroCarousel";
import { siteConfig } from "@/lib/config";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />

      {/* Content container */}
      <div className="relative z-10 section-container text-center">
        {/* Umbrella Animation */}
        <div className="h-48 md:h-64 lg:h-80 mb-8 md:mb-12">
          <UmbrellaAnimation />
        </div>

        {/* Hero Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            {siteConfig.tagline}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            A neighbourhood café where quality and community meet. Welcome to your new favourite corner.
          </p>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="status-badge">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {siteConfig.hours.status} today • Closes {siteConfig.hours.closingTime}
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#menu" className="btn-primary">
              View Menu
            </a>
            <a
              href={siteConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
