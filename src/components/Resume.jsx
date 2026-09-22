// src/components/Resume.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaEye, FaArrowRight, FaTimes } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const CV_PATH = "/Rustam_Khan_CV.pdf";
const CV_NAME = "Rustam_Khan_Resume.pdf";

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);

  const download = () => {
    const a = document.createElement("a");
    a.href = CV_PATH;
    a.download = CV_NAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
            Resume
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {/* View */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 backdrop-blur-sm text-center transition-all"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-4">
              <FaEye className="text-accent text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              View Online
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              Preview the full resume in your browser.
            </p>
            <button
              onClick={() => setShowPdf(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              <FaEye size={14} />
              Preview
            </button>
          </motion.div>

          {/* Download */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 backdrop-blur-sm text-center transition-all"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4">
              <FaDownload className="text-green-400 text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Download PDF
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              Get the complete resume in PDF format.
            </p>
            <button
              onClick={download}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 text-ink text-sm font-semibold hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              <FaDownload size={14} />
              Download
            </button>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-accent text-ink font-semibold text-sm sm:text-base hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all group"
          >
            Hire Me
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {showPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPdf(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] bg-ink rounded-2xl overflow-hidden border border-white/15"
            >
              <iframe
                src={`${CV_PATH}#toolbar=0`}
                title="Resume"
                className="w-full h-full"
              />
              <button
                onClick={() => setShowPdf(false)}
                aria-label="Close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ink/70 hover:bg-accent/80 text-white flex items-center justify-center transition-colors"
              >
                <FaTimes size={16} />
              </button>
              <button
                onClick={download}
                className="absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-accent text-ink text-sm font-semibold flex items-center gap-2 hover:bg-accent/90 transition-colors"
              >
                <FaDownload size={12} />
                Download
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;