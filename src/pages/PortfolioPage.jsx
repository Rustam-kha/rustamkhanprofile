// src/pages/PortfolioPage.jsx
import Portfolio from "../components/Portfolio";
import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

const PortfolioPage = () => (
  <>
    <HeroSection
      title="My Portfolio"
      subtitle="Projects I've Built"
      description="A curated selection of WordPress, WooCommerce, and MERN stack projects delivered for real clients."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
      ctaText="View Projects"
      ctaLink="/portfolio"
      badge="Featured Work"
    />
    <Breadcrumb />
    <Portfolio />
    <CTASection />
  </>
);

export default PortfolioPage;