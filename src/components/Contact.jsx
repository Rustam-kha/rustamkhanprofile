// src/components/Contact.jsx
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "rmkhan0332@gmail.com",
    link: "mailto:rmkhan0332@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@Rustam-kha",
    link: "https://github.com/Rustam-kha",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Rustam Khan",
    link: "https://www.linkedin.com/in/rustam-khan-87a7302b6/",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bara, Khyber, PK",
    link: null,
  },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await axios.post("https://getform.io/f/bxoozwla", data);
      toast.success("Message sent! I'll reply within 24 hours.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
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
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Let's Build Together
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind? Drop me a message — I'll get back within 24
            hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Form */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FaPaperPlane className="text-accent" />
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1.5 text-xs text-red-400"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email",
                      },
                    })}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1.5 text-xs text-red-400"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  placeholder="Tell me about your project or AI automation needs..."
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1.5 text-xs text-red-400"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-accent text-ink rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:bg-white/[0.05] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                    <Icon className="text-accent text-sm" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-sm text-white truncate">{info.value}</p>
                  </div>
                </div>
              );
              return info.link ? (
                <a
                  key={i}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}

            {/* Availability */}
            <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <p className="text-sm font-semibold text-white">
                  Available for work
                </p>
              </div>
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <FaClock className="text-green-400" size={11} />
                Replies within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;