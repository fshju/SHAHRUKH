"use client";
import React, { useState } from "react";
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div
      className={`${darkMode ? "bg-darkBg text-lightText" : "bg-black text-white"} transition-all duration-500`}
    >
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-xl py-4 shadow-2xl z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold text-primary">Shahrukh</h1>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className={`md:flex ${isOpen ? "block" : "hidden"} `}>
            <ul className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-purple-400 hover:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-purple-400 hover:underline"
                >
                 About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-purple-400 hover:underline"
                >
                 Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-purple-400 hover:underline"
                >
                  Contact
                </button>
              </li>

             <li className="md:hidden">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="px-4 py-2 border hover:border-black rounded-md bg-no-repeat bg-right bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:bg-left transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-700"
                >
                  {darkMode ?  "Dark Mode" : "Light Mode"}
                </button>
              </li>
            </ul>

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:block ml-4 px-4 py-2 border rounded-md hover:border-black bg-no-repeat bg-right bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:bg-left transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-700"
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </button>
          </nav>
        </div>
      </header>
      <Home id="home" />
      <AboutMe id="about" />
      {/* <PortfolioSection/> */}
      <PortfolioShowcase id="portfolio"/>
      <div className="md:flex flex-wrap max-h-full justify-center overflow-hidden">
  <Contact id="contact" />
  <Comments />
  <Footer/>
</div>

    </div>
  );
};

export default Page;
