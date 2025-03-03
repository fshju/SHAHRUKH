import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
const tabs = ["Projects", "Certificates", "Tech Stack"];

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A simple e-commerce platform with payment integration.",
    imageUrl: "/1.jpg",
    demoUrl: "https://e-commerce-sanity-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A mobile-responsive website with Next.js and Tailwind CSS.",
    imageUrl: "/2.jpg",
    demoUrl: "https://e-commerce-indol-mu-21.vercel.app/",
  },
  {
    id: 3,
    title: "Project Three",
    description: "An innovative web application built with React.",
    imageUrl: "/3.jpg",
    demoUrl: "https://shop-ease-tailwind.vercel.app/",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A Blog website with sanity cms integration.",
    imageUrl: "/4.jpg",
    demoUrl: "https://blog-sanity-beta.vercel.app/",
  },
  {
    id: 5,
    title: "Project Five",
    description: "A real-time resume builder.",
    imageUrl: "/5.jpg",
    demoUrl: "https://milestones5-dusky.vercel.app/",
  },
  {
    id: 6,
    title: "Project Six",
    description: "This is my resume design with html,css and typescript.",
    imageUrl: "/6.jpg",
    demoUrl: "https://milestone1-phi-eight.vercel.app/",
  },
  {
    id: 7,
    title: "Project Seven",
    description: "This is my first portfolio.",
    imageUrl: "/7.jpg",
    demoUrl: "https://portfolio-2-two-phi.vercel.app/",
  },
  {
    id: 8,
    title: "Project Eight",
    description: "A basic portfolio design by me.",
    imageUrl: "/8.jpg",
    demoUrl: "https://portfolio-2-two-phi.vercel.app/",
  },
    {
    id: 9,
    title: "Project Nine",
    description: "A WeatherApp design by me.",
    imageUrl: "/9.jpg",
    demoUrl: "https://weather-now-ivory.vercel.app/",
  },
];

const certificates = ["/c1.jpg","/c2.jpg","/c3.jpg"];
const techStack = [
  "/nextjs.svg",
  "/Python.svg",
  "/typescript.svg",
  "/JavaScript.png",
  "/Tailwind.svg",
  "/CSS3.svg",
  "/HTML.svg",
  "/react.svg",
  "/nodejs.svg",
  "/sanity.png",
  "/Netlify.png",
  "/Git.svg",
    ];

const PortfolioTabs = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <section id={id} className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-purple-400 text-center mt-4"
          data-aos="fade-down"
        >
          Portfolio Showcase
        </h2>
        <p
          className="mb-10 text-xs md:text-sm text-primary text-center mt-2"
          data-aos="fade-up"
        >
          Explore my journey through projects, certifications, and technical
          expertise.
          <br className="hidden md:block" />
          Each section represents a milestone in my continuous learning path.
        </p>
        <div className="flex justify-center mb-6 flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white"
              }`}
              aria-label={`Switch to ${tab} tab`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "Projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-9">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#1b0039] p-4 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }} // Updated here
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 px-4 py-2 rounded-lg text-white text-sm hover:bg-purple-700 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Certificates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-9">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="w-full h-48 relative hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    fill
                    style={{ objectFit: "contain" }} // Updated here
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "Tech Stack" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-9">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="w-20 h-20 relative mx-auto hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={tech}
                    alt={`Tech Logo ${index + 1}`}
                    width={80}
                    height={80}
                    style={{ objectFit: "contain" }} 
                    className="rounded-lg"
                  />
                </div>
              ))}
              <div
                key="github"
                className="w-20 h-20 relative mx-auto hover:scale-110 transition-transform duration-300 flex items-center justify-center"
              >
                <FaGithub size={80} className="text-gray-300" />
              </div>
              <div
                key="vercel"
                className="w-20 h-20 relative mx-auto hover:scale-110 transition-transform duration-300 flex items-center justify-center"
              >
                <RiVercelLine  size={80} className="text-gray-300" />
              </div>
              <Image src="/Figma.svg" alt={"figma"} width={80} height={80} className="w-20 h-20 relative mx-auto hover:scale-110 transition-transform duration-300 flex items-center justify-center"/>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioTabs;
