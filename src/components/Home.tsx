import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home({ id }: { id: string }) {
  return (
    <section id={id}>
      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center flex-grow min-h-screen"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Frontend <span className="text-primary">Developer</span>
        </h2>
        <p className="text-lg mt-2">
          ✦ Creating stunning and functional web experiences ✦
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 flex gap-4"
        >
          <a
            href="#"
            className="border hover:border-black px-4 py-2 rounded-md bg-no-repeat bg-right bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:bg-left transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-700"
          >
            Projects
          </a>
          <a
            href="#"
            className="border hover:border-black px-4 py-2 rounded-md bg-no-repeat bg-right bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:bg-left transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-700"
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
          <FaGithub className="w-6 h-6 cursor-pointer" />
          <FaLinkedin className="w-6 h-6 cursor-pointer" />
          <FaTwitter className="w-6 h-6 cursor-pointer" />
        </motion.div>
      </motion.div>
    </section>
  );
}