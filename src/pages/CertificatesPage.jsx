// src/pages/CertificatesPage.jsx
import Certificates from "../components/Certificates";
import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

const CertificatesPage = () => (
  <>
    <HeroSection
      title="Certificates"
      subtitle="Professional Certifications"
      description="Continuous learning in web development, AI, and automation."
      image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80"
      ctaText="View Resume"
      ctaLink="/resume"
      badge="Certifications"
    />
    <Breadcrumb />
    <Certificates />
    <CTASection />
  </>
);

export default CertificatesPage;