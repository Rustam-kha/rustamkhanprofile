// src/components/Certificates.jsx
import { useState, useEffect } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaExpand,
  FaCertificate,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const certificates = [
  {
    id: 1,
    title: "Code Alpha Internship",
    issuer: "CodeAlpha",
    image: "/CODE_ALPHA_INTERNSHIP_CERTIFICATE.jpg",
  },
  {
    id: 2,
    title: "Communication Skills",
    issuer: "Dgskills",
    image: "/Communication_certificate.jpg",
  },
  {
    id: 3,
    title: "HTML Certification",
    issuer: "KG Coding",
    image: "/HTML_CERTIFICATE.jpg",
  },
  {
    id: 4,
    title: "JavaScript Certification",
    issuer: "KG Coding",
    image: "/JS_CERTIFICATE.jpg",
  },
  {
    id: 5,
    title: "SEO Certification",
    issuer: "Dgskills",
    image: "/seo_certificate.jpg",
  },
  {
    id: 6,
    title: "WordPress Certification",
    issuer: "Learning by Earning",
    image: "/WORPDRESS_CERTIFICATE.jpg",
  },
];

const Certificates = () => {
  const [current, setCurrent] = useState(null);

  const next = () => setCurrent((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + certificates.length) % certificates.length,
    );

  useEffect(() => {
    if (current === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setCurrent(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  const download = async () => {
    const cert = certificates[current];
    try {
      const res = await fetch(cert.image);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${cert.title.replace(/\s+/g, "_")}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <FaCertificate className="text-4xl sm:text-5xl text-accent" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My Certificates
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Professional certifications and continuous learning.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {certificates.map((c, i) => (
            <motion.button
              key={c.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              onClick={() => setCurrent(i)}
              className="group text-left relative rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-accent/40 backdrop-blur-sm transition-all"
            >
              <div className="relative h-56 overflow-hidden bg-ink/40">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/0b1220/6ea8fe?text=Certificate";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-accent text-ink">
                    <FaExpand />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{c.issuer}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setCurrent(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ink/70 hover:bg-accent/80 text-white border border-white/10 transition-colors z-10"
              >
                <FaChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ink/70 hover:bg-accent/80 text-white border border-white/10 transition-colors z-10"
              >
                <FaChevronRight size={18} />
              </button>

              <div className="rounded-2xl overflow-hidden border border-white/15 bg-ink">
                <img
                  src={certificates[current].image}
                  alt={certificates[current].title}
                  className="w-full max-h-[65vh] object-contain bg-ink"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/1200x800/0b1220/6ea8fe?text=Certificate";
                  }}
                />
                <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {certificates[current].title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {certificates[current].issuer}
                    </p>
                  </div>
                  <button
                    onClick={download}
                    className="px-5 py-2.5 rounded-lg bg-accent text-ink text-sm font-semibold flex items-center gap-2 hover:bg-accent/90 transition-colors"
                  >
                    <FaDownload size={14} />
                    Download
                  </button>
                </div>
              </div>

              <div className="text-center mt-3 text-xs text-gray-500">
                {current + 1} / {certificates.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;