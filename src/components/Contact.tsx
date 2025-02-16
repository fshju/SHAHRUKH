"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Facebook, Linkedin } from "lucide-react";

export default function Contact({ id }: { id: string }) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section id={id}>
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div
        className="w-full max-w-lg bg-[#1b0039] p-6 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-purple-400 text-center">
          Get in Touch
        </h2>
        <p className="text-sm text-gray-400 text-center mb-4">
          Have something to discuss? Send me a message.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
            required
            data-aos="fade-right"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
            required
            data-aos="fade-left"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
            required
            data-aos="fade-up"
          ></textarea>

          <button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-transform hover:scale-105"
            data-aos="zoom-in"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6">
          <h3
            className="text-lg font-medium text-center text-white"
            data-aos="fade-down"
          >
            Connect With Me
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/shahrukh.ishtiaq.90/"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
              data-aos="fade-right"
            >
              <Facebook size={20} />
              Facebook
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shahrukh-ishtiaq-2534a524b"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
              data-aos="fade-left"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:shahrukhishtiaq29@gmail.com"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-400 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
              data-aos="fade-up"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
