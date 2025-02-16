"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-transparent dropshadow-lg  w-full text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-primary">Shahrukh Portfolio</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Crafting meaningful digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-400 text-sm">
            <button onClick={() => scrollToSection("home")} className="hover:text-primary transition">
              Home
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition">
              Contact
            </button>
            <button onClick={() => scrollToSection("social-links")} className="hover:text-primary transition">
              Social Links
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-5" id="social-links">
            <a href="mailto:shahrukhishtiaq29@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail className="text-2xl text-gray-400 hover:text-red-500 transition duration-300" />
            </a>
            <a href="https://facebook.com/shahrukh.ishtiaq.90?mibextid=zbwkwl" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-400 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-gray-400 hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/shahrukh_khan_229" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-400 hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/shahrukh-ishtiaq-2534a524b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-700 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © 2024 Shahrukh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
