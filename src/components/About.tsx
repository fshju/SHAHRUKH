"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AboutMe = ({ id }: { id: string }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const handleOpenCV = () => {
    const fileUrl = "https://drive.google.com/file/d/1fM3jqaaC1_TLzHd-YAxAoAzS16_APnSl/view?usp=drivesdk"; 
    window.open(fileUrl, "_blank"); 
  };

  return (
    <section id={id} className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-400 text-center mt-14" data-aos="fade-up">
          About Me
        </h2>
        <p className="mt-2 text-sm text-primary text-center md:mb-3" data-aos="fade-up">
          ✦ Transforming ideas into digital experiences ✦
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
          {/* Left Side - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-primary text-4xl font-bold" data-aos="fade-up">
              Hello, I&apos;m <span className="text-purple-500">Shahrukh Ishtiaq</span>
            </h1>
            <p
              className="mt-4 text-primary max-w-lg mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I am a dedicated and passionate Front-End Developer with a strong foundation in Computer Networking and Telecommunications. With a keen eye for design and functionality, I strive to create engaging, intuitive, and responsive digital experiences.
            </p>

            <div className="mt-6 space-x-4" data-aos="fade-up" data-aos-delay="400">
              <button
                className="px-6 py-2 hover:border-black bg-purple-600 hover:bg-purple-700 rounded-lg"
                onClick={handleOpenCV}
              >
                Download CV
              </button>
              <button className="px-6 py-2 hover:border-black border bg-no-repeat bg-right bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:bg-left transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/shahAi.jpg"
              alt="Profile Picture"
              width={320}
              height={320}
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500 shadow-lg"
              data-aos="zoom-in"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          {/* Why I Love Web Development Section */}
          <h3 className="text-xl font-semibold text-white mt-7">Why I Love Web Development</h3>
          <p className="text-gray-300 mt-2">
            Web development allows me to turn ideas into reality. I enjoy creating 
            interactive, responsive, and user-friendly applications that solve real-world 
            problems. The fast-paced evolution of technology keeps me motivated to learn, explore, and innovate continuously.
          </p>

          {/* Key Achievements Section */}
          <h3 className="text-xl font-semibold text-white mt-7">Key Achievements</h3>
          <ul className="text-gray-300 mt-2 list-disc pl-5">
            <li>Worked on 10+ personal projects, focusing on front-end development and design.</li>
            <li>Studied web development through online resources and courses, building a strong foundation in HTML, CSS, JavaScript, React, and Next.js.</li>
            <li>Gained hands-on experience during hackathons, where I applied my skills in real-time problem-solving.</li>
            <li>Active in community discussions, learning from other developers and sharing knowledge.</li>
          </ul>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#1b0039] rounded-lg" data-aos="flip-left">
            <h3 className="text-xl font-bold text-purple-400">11</h3>
            <p className="text-gray-300 text-sm">Total Projects</p>
          </div>
          <div className="p-6 bg-[#1b0039] rounded-lg" data-aos="flip-left" data-aos-delay="200">
            <h3 className="text-xl font-bold text-purple-400">2</h3>
            <p className="text-gray-300 text-sm">Certificates</p>
          </div>
          <div className="p-6 bg-[#1b0039] rounded-lg" data-aos="flip-left" data-aos-delay="400">
            <h3 className="text-xl font-bold text-purple-400">1</h3>
            <p className="text-gray-300 text-sm">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;