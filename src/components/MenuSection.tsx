import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Croissant, Leaf, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  coffee: Coffee,
  utensils: UtensilsCrossed,
  croissant: Croissant,
  leaf: Leaf,
};

const MenuSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="menu" className="section-padding bg-secondary/30">
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
            Menu Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafted with care, served with love. Here's a taste of what we offer.
          </p>
        </motion.div>

        {/* Menu Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {siteConfig.menu.categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Coffee;
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="cafe-card"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>

                {/* Menu Items */}
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Menu Note & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6 italic">{siteConfig.menu.note}</p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Menu Info
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
