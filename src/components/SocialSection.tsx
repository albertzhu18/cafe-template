import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/config";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: siteConfig.social.instagram,
    color: "hover:text-pink-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: siteConfig.social.facebook,
    color: "hover:text-blue-600",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: siteConfig.social.linkedin,
    color: "hover:text-blue-500",
  },
];

const SocialSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Follow Along
          </h2>
          <p className="text-muted-foreground mb-8">
            Stay connected for daily specials, new menu items, and community updates.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-card ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
