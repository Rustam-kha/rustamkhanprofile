// src/pages/ServicesPage.jsx
import Services from "../components/Services";
import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

const ServicesPage = () => (
  <>
    <HeroSection
      title="My Services"
      subtitle="What I Can Do For You"
      description="Agentic AI, MERN Stack, WordPress, and Shopify development services built for modern businesses."
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
      ctaText="Get a Quote"
      ctaLink="/contact"
      badge="Services"
    />
    <Breadcrumb />
    <Services />
    <CTASection />
  </>
);

export default ServicesPage;