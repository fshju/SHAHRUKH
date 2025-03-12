"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Facebook, Linkedin } from "lucide-react";

export default function Contact({ id }: { id: string }) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mwplkwpe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Message sending failed");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id={id}>
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg bg-[#1b0039] p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-purple-400 text-center">Get in Touch</h2>
          <p className="text-sm text-gray-400 text-center mb-4">Have something to discuss? Send me a message.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
              data-aos="fade-right"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
              data-aos="fade-left"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
              data-aos="fade-up"
            ></textarea>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-transform hover:scale-105"
              data-aos="zoom-in"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="text-green-400 text-center mt-3">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-400 text-center mt-3">Failed to send message. Try again.</p>}
          </form>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-center text-white" data-aos="fade-down">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/shahrukh.ishtiaq.90/"
                target="_blank"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
                data-aos="fade-right"
              >
                <Facebook size={20} />
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/in/shahrukh-ishtiaq-2534a524b"
                target="_blank"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
                data-aos="fade-left"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

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
