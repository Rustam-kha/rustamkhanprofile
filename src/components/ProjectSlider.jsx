// src/components/ProjectSlider.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/90 via-deepCharcoal/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-deepCharcoal/40 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-mutedBlue/30 backdrop-blur-sm border border-mutedBlue/30 rounded-full text-mutedBlue text-xs font-medium uppercase tracking-wider">
                    {projects[currentIndex].category}
                  </span>
                  <span className="text-deepCharcoal/60 text-xs flex items-center gap-1">
                    <span className="w-1 h-1 bg-mutedBlue rounded-full"></span>
                    {currentIndex + 1} / {projects.length}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  {projects[currentIndex].title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base mb-4 max-w-xl leading-relaxed">
                  {projects[currentIndex].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-mutedBlue rounded-full text-white font-semibold text-sm hover:shadow-lg hover:shadow-mutedBlue/25 transition-all duration-300 group"
                  >
                    <FaExternalLinkAlt
                      size={14}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                    View Live Demo
                  </a>
                  {projects[currentIndex].github && (
                    <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/20 transition-all duration-300"
                    >
                      <FaGithub size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-deepCharcoal/60 backdrop-blur-sm rounded-full text-white hover:bg-mutedBlue/60 hover:scale-110 transition-all duration-300 z-10 border border-white/10"
        >
          <FaArrowLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-deepCharcoal/60 backdrop-blur-sm rounded-full text-white hover:bg-mutedBlue/60 hover:scale-110 transition-all duration-300 z-10 border border-white/10"
        >
          <FaArrowRight size={18} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-mutedBlue shadow-lg shadow-mutedBlue/50"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="absolute top-4 right-4 px-3 py-1 bg-deepCharcoal/50 backdrop-blur-sm rounded-full text-white text-xs border border-white/10">
          {currentIndex + 1} / {projects.length}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;