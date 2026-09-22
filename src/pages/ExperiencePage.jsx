// src/pages/ExperiencePage.jsx
import Experience from "../components/Experience";
import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

const ExperiencePage = () => (
  <>
    <HeroSection
      title="My Experience"
      subtitle="Professional Journey"
      description="From internships to freelance — building web products and AI automation for clients worldwide."
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
      ctaText="View Resume"
      ctaLink="/resume"
      badge="Experience"
    />
    <Breadcrumb />
    <Experience />
    <CTASection />
  </>
);

export default ExperiencePage;