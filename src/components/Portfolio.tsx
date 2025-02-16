import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  demoUrl: string;
}

const PortfolioShowcase = ({ id }: { id: string }) => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: false });
  }, []);

  const projects: Project[] = [
    { id: 1, title: "Project One", imageUrl: "/projectpic1.jpg", demoUrl: "#" },
    { id: 2, title: "Project Two", imageUrl: "/projectpic2.jpg", demoUrl: "#" },
    {
      id: 3,
      title: "Project Three",
      imageUrl: "/projectpic3.jpg",
      demoUrl: "#",
    },
    {
      id: 4,
      title: "Project Four",
      imageUrl: "/projectpic1.jpg",
      demoUrl: "#",
    },
    {
      id: 5,
      title: "Project Five",
      imageUrl: "/projectpic2.jpg",
      demoUrl: "#",
    },
    { id: 6, title: "Project Six", imageUrl: "/projectpic3.jpg", demoUrl: "#" },
  ];

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading Animation */}
        <h2
          className="text-4xl font-bold text-purple-400 text-center mt-4"
          data-aos="fade-down"
        >
          Portfolio Showcase
        </h2>

        {/* Description Animation */}
        <p
          className="mb-10 text-xs md:text-sm  text-primary text-center mt-2"
          data-aos="fade-up"
        >
          Explore my journey through projects, certifications, and technical
          expertise.
          <br className="hidden md:block"/>
          Each section represents a milestone in my continuous learning path.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#1b0039] p-6 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>
                <a
                  href={project.demoUrl}
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
