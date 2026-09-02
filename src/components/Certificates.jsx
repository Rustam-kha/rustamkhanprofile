// src/components/Certificates.jsx
import { useState } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaExpand,
  FaCertificate,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Code Alpha Internship",
      issuer: "CodeAlpha",
      image: "/CODE_ALPHA_INTERNSHIP_CERTIFICATE.jpg",
      description: "Web Development Internship Certificate",
    },
    {
      id: 2,
      title: "Communication Skills",
      issuer: "Dgskills",
      image: "/Communication_certificate.jpg",
      description: "Professional Communication Certification",
    },
    {
      id: 3,
      title: "HTML Certification",
      issuer: "KG Coding",
      image: "/HTML_CERTIFICATE.jpg",
      description: "HTML Development Certification",
    },
    {
      id: 4,
      title: "JavaScript Certification",
      issuer: "KG Coding",
      image: "/JS_CERTIFICATE.jpg",
      description: "JavaScript Development Certification",
    },
    {
      id: 5,
      title: "SEO Certification",
      issuer: "Dgskills",
      image: "/seo_certificate.jpg",
      description: "Search Engine Optimization Certification",
    },
    {
      id: 6,
      title: "WordPress Certification",
      issuer: "Learning by Earning",
      image: "/WORPDRESS_CERTIFICATE.jpg",
      description: "WordPress Development Certification",
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(certificates[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % certificates.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(certificates[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + certificates.length) % certificates.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(certificates[prevIndex]);
  };

  const handleDownload = async () => {
    if (selectedImage) {
      try {
        const response = await fetch(selectedImage.image);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${selectedImage.title.replace(/\s+/g, "_")}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading image:", error);
      }
    }
  };

  useState(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div
      name="Certificates"
      className="relative min-h-screen bg-lightWhite py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <FaCertificate className="text-5xl text-mutedBlue" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-deepCharcoal">
            My Certificates
          </h1>
          <div className="w-24 h-1 bg-mutedBlue mx-auto rounded-full" />
          <p className="text-deepCharcoal/70 mt-4">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-mutedBlue/50 transition-all duration-500 shadow-sm">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/600x400/e5e7eb/6c8ebf?text=Certificate";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="p-3 rounded-full bg-mutedBlue text-white">
                      <FaExpand size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-deepCharcoal group-hover:text-mutedBlue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-deepCharcoal/70 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-mutedBlue transition-all duration-500 ${
                    hoveredCard === cert.id ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deepCharcoal/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <FaTimes size={24} className="text-white" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-deepCharcoal/50 hover:bg-deepCharcoal/75 transition-colors z-10"
              >
                <FaChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-deepCharcoal/50 hover:bg-deepCharcoal/75 transition-colors z-10"
              >
                <FaChevronRight size={24} className="text-white" />
              </button>

              <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/1200x800/e5e7eb/6c8ebf?text=Certificate";
                  }}
                />
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-deepCharcoal">
                        {selectedImage.title}
                      </h3>
                      <p className="text-deepCharcoal/70 mt-1">
                        {selectedImage.issuer}
                      </p>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="px-6 py-3 rounded-lg bg-mutedBlue text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-mutedBlue/25 transition-all duration-300"
                    >
                      <FaDownload size={16} />
                      Download Certificate
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 text-sm text-deepCharcoal/60">
                {currentIndex + 1} / {certificates.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Certificates;