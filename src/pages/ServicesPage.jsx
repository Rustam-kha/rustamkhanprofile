// src/pages/ServicesPage.jsx
import Services from '../components/Services';
import Breadcrumb from '../components/Breadcrumb';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const ServicesPage = () => {
  return (
    <>
      <HeroSection
        title="My Services"
        subtitle="What I Can Do For You"
        description="I offer comprehensive web development and AI automation services including WordPress, MERN Stack, Shopify, OpenAI Integration, n8n Automation, and LangChain solutions."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
        ctaText="Get a Quote"
        ctaLink="/contact"
        badge="Professional Services"
      />
      <Breadcrumb />
      <Services />
      <CTASection />
    </>
  );
};

export default ServicesPage;