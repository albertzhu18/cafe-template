import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/lib/config";

const ReviewsSection = () => {
  const { reviews } = siteConfig;

  return (
    <section id="reviews" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Our Guests Say
          </h2>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(reviews.overall)
                      ? "fill-terracotta text-terracotta"
                      : "text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-semibold text-foreground">{reviews.overall}</span>
            <span className="text-muted-foreground">/5</span>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reviews.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cafe-card relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Review Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">{testimonial.author}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {reviews.sources.map((source) => (
            <div
              key={source.platform}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
            >
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-terracotta text-terracotta" />
                <span className="font-semibold text-foreground">{source.rating}</span>
              </div>
              <span className="text-muted-foreground text-sm">
                {source.platform} ({source.count} {source.count === 1 ? "review" : "reviews"})
              </span>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Ratings sourced from public review platforms.
        </motion.p>
      </div>
    </section>
  );
};

export default ReviewsSection;
