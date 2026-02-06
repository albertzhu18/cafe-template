// Café Website Template Configuration
// Edit this file to update site content easily

export const siteConfig = {
  name: "YourNameHere Cafe",
  tagline: "Great coffee. Honest food. Real connection.",
  mission:
    "Great coffee. Honest food. Real connection. We strive to be a neighbourhood cafe where quality and community meet.",
  description:
    "YourNameHere Cafe is a neighbourhood café where quality coffee and community meet. Enjoy our craft espresso, honest breakfast, and welcoming atmosphere.",

  // Contact & Location
  address: "6133 University Blvd, Vancouver, BC V6T 1Z1",
  phone: "(604) 555-1234",
  phoneLink: "tel:+16045551234",
  mapsLink: "https://maps.google.com/?q=University+of+British+Columbia,+Vancouver,+BC",
  priceRange: "$10–20",
  typicalStay: "15 min – 1 hr",

  // Hours (format for display)
  hours: {
    status: "Open",
    closingTime: "5:30 p.m.",
    schedule: [
      { days: "Monday – Friday", hours: "7:00 a.m. – 5:30 p.m." },
      { days: "Saturday", hours: "8:00 a.m. – 5:30 p.m." },
      { days: "Sunday", hours: "8:00 a.m. – 4:00 p.m." },
    ],
  },

  // Social Links
  social: {
    instagram: "https://instagram.com/yourcafe",
    facebook: "https://facebook.com/yourcafe",
    linkedin: "https://linkedin.com/company/yourcafe",
  },

  // Reviews
  reviews: {
    overall: 4.8,
    sources: [
      { platform: "Google", rating: 4.8, count: 127 },
      { platform: "Yelp", rating: 4.6, count: 84 },
    ],
    testimonials: [
      {
        author: "Marcus Chen",
        text: "The best latte I've had in the city! Cozy atmosphere and friendly staff make this my go-to spot.",
      },
      {
        author: "Sarah Mitchell",
        text: "Love coming here to work. Great WiFi, amazing pastries, and the coffee is always perfect.",
      },
      {
        author: "James Rodriguez",
        text: "Hidden gem! Their breakfast wrap is incredible and the prices are very reasonable.",
      },
    ],
  },

  // Menu Highlights
  menu: {
    categories: [
      {
        name: "Coffee",
        icon: "coffee",
        items: [
          { name: "Espresso", description: "Rich, bold single or double shot" },
          { name: "Pour Over", description: "Hand-crafted drip coffee" },
          { name: "Oat Milk Latte", description: "Smooth espresso with creamy oat milk" },
          { name: "Honey Lavender Latte", description: "Seasonal favourite with local honey" },
        ],
      },
      {
        name: "Breakfast & Wraps",
        icon: "utensils",
        items: [
          { name: "Breakfast Wrap", description: "Eggs, cheese, veggies, your choice of protein" },
          { name: "Veggie Wrap", description: "Fresh vegetables with hummus" },
          { name: "Avocado Toast", description: "Sourdough, smashed avo, everything spice" },
        ],
      },
      {
        name: "Bakery",
        icon: "croissant",
        items: [
          { name: "Chocolate Chip Cookie", description: "Freshly baked, perfectly chewy" },
          { name: "Butter Croissant", description: "Flaky, golden, classic" },
          { name: "Banana Bread", description: "Moist, homestyle with walnuts" },
        ],
      },
      {
        name: "Light Bites",
        icon: "leaf",
        items: [
          { name: "Chia Pudding", description: "Creamy with seasonal fruit topping" },
          { name: "Overnight Oats", description: "Hearty and wholesome" },
        ],
      },
    ],
    note: "Full menu available in-store or on our socials",
  },

  // Navigation
  nav: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#visit" },
  ],
};
