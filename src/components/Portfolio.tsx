import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
}

const PortfolioShowcase = ({ id }: { id: string }) => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: false });
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      description: "A simple e-commerce platform with payment integration.",
      imageUrl: "/1.jpg",
      demoUrl: "https://figma-hackathon-tan-psi.vercel.app/",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A mobile-responsive website with Next.js and Tailwind CSS.",
      imageUrl: "/2.jpg",
      demoUrl: "https://e-commerce-indol-mu-21.vercel.app/",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "An innovative web application built with React.",
      imageUrl: "/3.jpg",
      demoUrl: "https://shop-ease-tailwind.vercel.app/",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Project Four",
      description: "A Blog website with sanity cms integration.",
      imageUrl: "/4.jpg",
      demoUrl: "https://blog-sanity-beta.vercel.app/",
      codeUrl: "#",
    },
    {
      id: 5,
      title: "Project Five",
      description: "A real-time resume builder.",
      imageUrl: "/5.jpg",
      demoUrl: "https://milestones5-dusky.vercel.app/",
      codeUrl: "#",
    },
    {
      id: 6,
      title: "Project Six",
      description: "This is my resume design with html,css and typescript.",
      imageUrl: "/6.jpg",
      demoUrl: "https://milestone1-phi-eight.vercel.app/",
      codeUrl: "#",
    },
    {
      id: 7,
      title: "Project Seven",
      description: "This is my first portfolio.",
      imageUrl: "/7.jpg",
      demoUrl: "https://portfolio-2-two-phi.vercel.app/",
      codeUrl: "#",
    },
    {
      id: 8,
      title: "Project Eight",
      description: "A basic portfolio design by me.",
      imageUrl: "/8.jpg",
      demoUrl: "https://portfolio-2-two-phi.vercel.app/",
      codeUrl: "#",
    },
  ];

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-400 text-center mt-4" data-aos="fade-down">
          Portfolio Showcase
        </h2>

        <p className="mb-10 text-xs md:text-sm text-primary text-center mt-2" data-aos="fade-up">
          Explore my journey through projects, certifications, and technical expertise.
          <br className="hidden md:block" />
          Each section represents a milestone in my continuous learning path.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#1b0039] shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              {/* Image Section */}
              <div className="relative w-full h-64 overflow-hidden ">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-95 h-64"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 ">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>


                {/* Buttons Section */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.demoUrl} 
                    target="_blank"
                    className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="inline-block bg-transparent border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300 text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;