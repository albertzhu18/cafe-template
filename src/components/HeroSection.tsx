import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import ScrollUmbrella from "./ScrollUmbrella";
import { siteConfig } from "@/lib/config";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />

      {/* Content container */}
      <div className="relative z-10 section-container text-center flex flex-col items-center">
        {/* Scroll-based Umbrella Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <ScrollUmbrella />
        </motion.div>

        {/* Photo Carousel - between logo and description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-screen -mx-4 mb-6"
        >
          <HeroCarousel />
        </motion.div>

        {/* Hero Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            {siteConfig.tagline}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">
            A neighbourhood café where quality and community meet. Welcome to your new favourite corner.
          </p>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex justify-center mb-6"
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
            transition={{ duration: 0.5, delay: 0.6 }}
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
    </section>
  );
};

export default HeroSection;
