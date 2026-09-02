// src/pages/ResumePage.jsx
import Resume from '../components/Resume';
import Breadcrumb from '../components/Breadcrumb';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const ResumePage = () => {
  return (
    <>
      <HeroSection
        title="My Resume"
        subtitle="Professional Profile"
        description="Download my resume or view my complete professional profile including education, work experience, skills, and certifications."
        image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200"
        ctaText="Download Resume"
        ctaLink="/Rustam_Khan_CV.pdf"
        badge="Resume"
      />
      <Breadcrumb />
      <Resume />
      <CTASection />
    </>
  );
};

export default ResumePage;