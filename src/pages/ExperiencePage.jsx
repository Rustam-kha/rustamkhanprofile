// src/pages/ExperiencePage.jsx
import Experience from '../components/Experience';
import Breadcrumb from '../components/Breadcrumb';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const ExperiencePage = () => {
  return (
    <>
      <HeroSection
        title="My Experience"
        subtitle="Professional Journey"
        description="1+ years of professional experience in web development and AI automation, working with various technologies and delivering high-quality projects."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
        ctaText="View Resume"
        ctaLink="/resume"
        badge="Work Experience"
      />
      <Breadcrumb />
      <Experience />
      <CTASection />
    </>
  );
};

export default ExperiencePage;