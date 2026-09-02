// src/pages/ContactPage.jsx
import Contact from '../components/Contact';
import Breadcrumb from '../components/Breadcrumb';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const ContactPage = () => {
  return (
    <>
      <HeroSection
        title="Let's Connect"
        subtitle="Get in Touch"
        description="Have a project in mind? Let's discuss how I can help you bring your ideas to life with web development and AI automation. I'm just one message away!"
        image="https://unsplash.com/photos/laptop-computer-beside-coffee-mug-j4uuKnN43_M"
        ctaText="Send Message"
        ctaLink="#contact-form"
        badge="Get in Touch"
        reversed={true}
      />
      <Breadcrumb />
      <Contact />
    </>
  );
};

export default ContactPage;