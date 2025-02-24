"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home({ id }: { id: string }) {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "A DEVELOPER",
          "A FULL-STACK DEVELOPER",
          "A FREELANCER",
          "A TECH ENTHUSIAST",
          "A Front-End Developer "
                ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
        I AM <span ref={typedRef} />
      </h2>
      <p className="text-lg mt-2 text-gray-300 font-light">
        ✦ Creating stunning and functional web experiences ✦
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 flex gap-4"
      >
        <a
          href="https://github.com/fshju"
          target="_blank"
          className="px-4 py-2 hover:border-black border bg-no-repeat bg-right bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:bg-left transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg"
        >
          Projects
        </a>
        <a
          href="mailto:shahrukhishtiaq29@gmail.com"
          target="_blank"
          className="px-4 py-2 hover:border-black border bg-no-repeat bg-right bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:bg-left transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg"
        >
          Contact
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 mt-4"
      >
        <a href="https://github.com/fshju" target="_blank">
          <FaGithub className="w-6 h-6 cursor-pointer transition duration-300 hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/shahrukh-ishtiaq-2534a524b" target="_blank">
          <FaLinkedin className="w-6 h-6 cursor-pointer transition duration-300 hover:text-blue-500" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FaTwitter className="w-6 h-6 cursor-pointer transition duration-300 hover:text-blue-400" />
        </a>
      </motion.div>
    </section>
  );
}