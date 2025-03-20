"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCode, FaUser, FaGlobe, FaGithub } from "react-icons/fa";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#0f051d] via-[#1a0b3b] to-[#0f051d] text-white z-50 px-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* GIF Preloader */}
          <motion.img
            src="/preloader.png"
            alt="Loading..."
            className="w-32 h-32 md:w-40 md:h-40 object-contain mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          />

          {/* Welcome Text */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center text-purple-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
          >
            WELCOME TO MY
            <br />
            <span className="text-purple-500">PORTFOLIO WEBSITE</span>
          </motion.h1>

          {/* Icons Row */}
          <motion.div
            className="flex gap-4 md:gap-6 text-3xl md:text-5xl my-4 text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
          >
            <FaCode />
            <FaUser />
            <FaGithub />
          </motion.div>

          {/* Website Link */}
          <motion.div
            className="flex items-center gap-2 mt-4 text-lg text-purple-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
          >
            <FaGlobe />
            <a
              href="https://shahrukh-gilt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-300 transition "
            >
              shahrukh.dev.com
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
