// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import AnimatedBackground from "./components/AnimatedBackground";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ExperiencePage from "./pages/ExperiencePage";
import CertificatesPage from "./pages/CertificatesPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

function App() {
  useEffect(() => {
    document.title = "Rustam Khan — Agentic AI & Full Stack Developer";
  }, []);

  return (
    <Router>
      {/* Global animated dark background */}
      <AnimatedBackground />
      <ScrollProgress />
      <ScrollToTop />

      <div className="relative min-h-screen text-white">
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>

      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#0b1220",
            color: "#fff",
            border: "1px solid rgba(110,168,254,0.3)",
          },
        }}
      />
    </Router>
  );
}

export default App;