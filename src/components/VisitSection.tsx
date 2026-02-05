import { motion } from "framer-motion";
import { MapPin, Phone, Clock, DollarSign, Timer, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config";

const VisitSection = () => {
  return (
    <section id="visit" className="section-padding">
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
            Visit Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to see you. Stop by for a coffee and say hello.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Location & Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="cafe-card space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">{siteConfig.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Phone</h3>
                <a
                  href={siteConfig.phoneLink}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Price Range */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Price per person</h3>
                <p className="text-muted-foreground">{siteConfig.priceRange}</p>
              </div>
            </div>

            {/* Typical Stay */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Timer className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">How long people stay</h3>
                <p className="text-muted-foreground">{siteConfig.typicalStay}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center"
              >
                <MapPin className="w-4 h-4 mr-2 inline" />
                Get Directions
              </a>
              <a
                href={siteConfig.phoneLink}
                className="btn-secondary flex-1 text-center"
              >
                <Phone className="w-4 h-4 mr-2 inline" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="cafe-card"
          >
            {/* Hours Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Hours</h3>
                <div className="status-badge mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>
                    {siteConfig.hours.status} • Closes {siteConfig.hours.closingTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Hours Schedule */}
            <div className="space-y-4">
              {siteConfig.hours.schedule.map((item) => (
                <div
                  key={item.days}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="text-foreground font-medium">{item.days}</span>
                  <span className="text-muted-foreground">{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Embedded Google Map */}
            <div className="mt-6 rounded-xl overflow-hidden bg-secondary/50 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5837279788247!2d-123.2138!3d49.2627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672cc2d4f0f8b%3A0x7c0e0c0b0a0b0a0b!2s4372%20W%2010th%20Ave%2C%20Vancouver%2C%20BC%20V6R%202H7!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Umbrella location on Google Maps"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
