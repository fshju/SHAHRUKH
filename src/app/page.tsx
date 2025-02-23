"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Home from "../components/Home";
import AboutMe from "@/components/About";
import Contact from "@/components/Contact";
import Comments from "@/components/Comments";
import PortfolioShowcase from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // ✅ Save Dark Mode Preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`${darkMode ? "bg-darkBg text-lightText" : "bg-black text-white"} transition-all duration-500`}
    >
      {/* ✅ Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-xl py-4 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold text-white font-serif">Shahrukh</h1>

          {/* ✅ Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>

          {/* ✅ Navigation */}
          <nav className={`md:flex ${isOpen ? "block" : "hidden"} `}>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
              {["home", "about", "portfolio", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="hover:text-purple-400 hover:underline transition-all duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            {/* ✅ Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-4 py-2 my-3  hover:border-black border bg-no-repeat bg-right bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:bg-left transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        </div>
      </header>

      {/* ✅ Main Sections */}
      <Home id="home" />
      <AboutMe id="about" />
      <PortfolioShowcase id="portfolio" />
      <div className="min-h-screen grid md:grid-cols-2 overflow-hidden">
      <Contact id="contact" />
      <Comments />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
