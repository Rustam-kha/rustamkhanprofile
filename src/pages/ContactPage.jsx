// src/pages/ContactPage.jsx
import Contact from "../components/Contact";
import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";

const ContactPage = () => (
  <>
    <HeroSection
      title="Let's Connect"
      subtitle="Get in Touch"
      description="Have a project in mind? Let's discuss how I can help bring your ideas to life with AI and modern web tech."
      image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80"
      ctaText="Send Message"
      ctaLink="#contact-form"
      badge="Contact"
      reversed
    />
    <Breadcrumb />
    <Contact />
  </>
);

export default ContactPage;