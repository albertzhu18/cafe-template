import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import VisitSection from "@/components/VisitSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

const Index = () => {
  // Structured data for local business SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4372 W 10th Ave",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V6R 2H7",
      addressCountry: "CA",
    },
    telephone: siteConfig.phone,
    priceRange: siteConfig.priceRange,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.reviews.overall,
      reviewCount: siteConfig.reviews.sources.reduce((acc, s) => acc + s.count, 0),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ],
  };

  return (
    <>
      <Helmet>
        <title>Little Umbrella | Neighbourhood Café in Vancouver</title>
        <meta name="description" content={siteConfig.description} />
        <meta
          name="keywords"
          content="café, coffee shop, Vancouver, West 10th, breakfast, espresso, community café, neighbourhood café"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Little Umbrella | Neighbourhood Café" />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Little Umbrella | Neighbourhood Café" />
        <meta name="twitter:description" content={siteConfig.description} />

        {/* Local Business Schema */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <MenuSection />
          <AboutSection />
          <ReviewsSection />
          <VisitSection />
          <SocialSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
