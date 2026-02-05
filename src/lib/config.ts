// Little Umbrella Café Configuration
// Edit this file to update site content easily

export const siteConfig = {
  name: "Little Umbrella",
  tagline: "Great coffee. Honest food. Real connection.",
  mission:
    "Great coffee. Honest food. Real Connection. We strive to be a neighbourhood cafe where quality and community meet.",
  description:
    "Little Umbrella is a neighbourhood café in Vancouver where quality coffee and community meet. Enjoy our craft espresso, honest breakfast, and welcoming atmosphere.",

  // Contact & Location
  address: "4372 W 10th Ave, Vancouver, BC V6R 2H7",
  phone: "(778) 452-5831",
  phoneLink: "tel:+17784525831",
  mapsLink: "https://maps.google.com/?q=4372+W+10th+Ave,+Vancouver,+BC+V6R+2H7",
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
    instagram: "https://instagram.com/littleumbrellacafe",
    facebook: "https://facebook.com/littleumbrellacafe",
    linkedin: "https://linkedin.com/company/littleumbrellacafe",
  },

  // Reviews
  reviews: {
    overall: 4.8,
    sources: [
      { platform: "Uber Eats", rating: 4.8, count: 41 },
      { platform: "Facebook", rating: 5.0, count: 1 },
    ],
    testimonials: [
      {
        author: "Leah Zhiyanov",
        text: "Delicious coffee, breakfast wraps, chia pudding and bakery items!",
      },
      {
        author: "Ryan Brezzi",
        text: "The owner and staff are super friendly and the environment is very welcoming.",
      },
      {
        author: "Maya Cant",
        text: "For food: also got a chocolate chip cookie, which was tasty and filling.",
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
