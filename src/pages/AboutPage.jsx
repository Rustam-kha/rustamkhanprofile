// src/pages/AboutPage.jsx
import About from '../components/About';
import Breadcrumb from '../components/Breadcrumb';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="About Me"
        subtitle="Full Stack Developer & AI Automation Expert"
        description="I'm Rustam Khan, a passionate Full Stack Developer and AI Automation Expert with expertise in MERN Stack, WordPress, and cutting-edge AI technologies including OpenAI, LangChain, and n8n."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
        ctaText="Hire Me"
        ctaLink="/contact"
        badge="Know Me Better"
      />
      <Breadcrumb />
      <About />
      <CTASection />
    </>
  );
};

export default AboutPage;