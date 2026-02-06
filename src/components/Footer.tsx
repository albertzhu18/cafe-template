import { motion } from "framer-motion";
import { ArrowUp, Instagram, Facebook, Linkedin, Umbrella } from "lucide-react";
import { siteConfig } from "@/lib/config";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Little Umbrella</h3>
            <p className="text-background/70 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-background/70">
              <p>{siteConfig.address}</p>
              <a
                href={siteConfig.phoneLink}
                className="block hover:text-background transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-medium text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Little Umbrella. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 text-background/70 hover:bg-background/20 hover:text-background transition-all text-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
