// src/components/Breadcrumb.jsx
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm border-b border-gray-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="text-deepCharcoal/60 hover:text-mutedBlue transition-colors flex items-center gap-1"
          >
            <FaHome size={14} className="text-mutedBlue" />
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <span key={routeTo} className="flex items-center gap-2">
                <FaChevronRight size={12} className="text-deepCharcoal/30" />
                {isLast ? (
                  <span className="text-mutedBlue capitalize">{name}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-deepCharcoal/60 hover:text-mutedBlue transition-colors capitalize"
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