// src/components/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Breadcrumb = () => {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-y border-white/5 bg-ink/40 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm">
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-400 hover:text-accent transition-colors"
          >
            <FaHome size={12} className="text-accent" />
            <span>Home</span>
          </Link>
          {parts.map((name, i) => {
            const to = `/${parts.slice(0, i + 1).join("/")}`;
            const last = i === parts.length - 1;
            return (
              <span key={to} className="flex items-center gap-1.5">
                <FaChevronRight size={10} className="text-gray-600" />
                {last ? (
                  <span className="text-accent capitalize">{name}</span>
                ) : (
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-accent transition-colors capitalize"
                  >
                    {name}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default Breadcrumb;