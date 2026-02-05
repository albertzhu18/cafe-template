import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Our Story
            </h2>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              Nestled in the heart of Vancouver's Westside, Little Umbrella is more than just a café—it's 
              a gathering place for neighbours, friends, and anyone seeking a moment of warmth in their day.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              We believe that the best experiences come from simple things done exceptionally well: 
              a perfectly pulled espresso, a freshly baked pastry, and a genuine smile from someone who 
              remembers your name.
            </p>

            {/* Mission Statement Quote */}
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative my-12 px-8 py-10 bg-secondary/50 rounded-3xl"
            >
              {/* Decorative quote marks */}
              <span className="absolute top-4 left-6 text-6xl text-primary/20 font-heading leading-none">
                "
              </span>
              <p className="relative z-10 font-heading text-xl md:text-2xl text-foreground text-center italic">
                {siteConfig.mission}
              </p>
              <span className="absolute bottom-4 right-6 text-6xl text-primary/20 font-heading leading-none rotate-180">
                "
              </span>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center"
            >
              Every cup we pour and every dish we serve carries our commitment to quality and our love 
              for this community. We're proud to be your neighbourhood café.
            </motion.p>
          </motion.div>

          {/* Values/Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {["Cozy", "Neighbourhood", "Craft Coffee", "Honest Food", "Welcoming"].map((keyword) => (
              <span
                key={keyword}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
