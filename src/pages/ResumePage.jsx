// src/pages/ResumePage.jsx
import Resume from "../components/Resume";
import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

const ResumePage = () => (
  <>
    <HeroSection
      title="My Resume"
      subtitle="Professional Profile"
      description="Download my resume or preview it online — skills, experience, and certifications."
      image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80"
      ctaText="Download Resume"
      ctaLink="/Rustam_Khan_CV.pdf"
      badge="Resume"
    />
    <Breadcrumb />
    <Resume />
    <CTASection />
  </>
);

export default ResumePage;