// src/pages/PortfolioPage.jsx
import Portfolio from '../components/Portfolio';
import Breadcrumb from '../components/Breadcrumb';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const PortfolioPage = () => {
  return (
    <>
      <HeroSection
        title="My Portfolio"
        subtitle="Projects I've Built"
        description="Explore my portfolio of projects ranging from WordPress websites to full-stack MERN applications and AI automation solutions."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
        ctaText="View All Projects"
        ctaLink="/portfolio"
        badge="Featured Work"
      />
      <Breadcrumb />
      <Portfolio />
      <CTASection />
    </>
  );
};

export default PortfolioPage;