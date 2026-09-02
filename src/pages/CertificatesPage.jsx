// src/pages/CertificatesPage.jsx
import Certificates from '../components/Certificates';
import Breadcrumb from '../components/Breadcrumb';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const CertificatesPage = () => {
  return (
    <>
      <HeroSection
        title="Certificates"
        subtitle="Professional Certifications"
        description="My certifications reflect my commitment to continuous learning in web development, AI, and automation technologies."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200"
        ctaText="View Resume"
        ctaLink="/resume"
        badge="Certifications"
      />
      <Breadcrumb />
      <Certificates />
      <CTASection />
    </>
  );
};

export default CertificatesPage;