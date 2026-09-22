// src/pages/AboutPage.jsx
import About from "../components/About";
import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

const AboutPage = () => (
  <>
    <HeroSection
      title="About Me"
      subtitle="Full Stack Developer & Agentic AI Engineer"
      description="Building intelligent web applications and AI automation systems with modern technologies."
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
      ctaText="Hire Me"
      ctaLink="/contact"
      badge="Know Me Better"
    />
    <Breadcrumb />
    <About />
    <CTASection />
  </>
);

export default AboutPage;