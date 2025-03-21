import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, Linkedin, Twitter, Mail } from "lucide-react";
import DecodeText from "./DecodeText";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-blue-50 dark:bg-gray-900 z-0">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 h-full w-full"></div>
        </div>
      </div>

      <motion.div
        className="container mx-auto px-6 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div className="overflow-hidden py-12" variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-inter font-bold tracking-[4px] px-8">
              <DecodeText
                text="Hi, Nemo this side :)"
                className="text-black dark:text-white whitespace-pre"
                delay={0.2}
              />
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="py-3 px-8 gradient-btn text-white dark:text-black font-medium transition shadow-md"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-3 px-8 border-2 border-blue-primary dark:border-seagreen-primary text-blue-primary dark:text-seagreen-primary hover:bg-blue-primary/10 dark:hover:bg-seagreen-primary/10 rounded-md font-medium transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div className="mt-16" variants={itemVariants}>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-primary dark:text-gray-400 dark:hover:text-seagreen-primary transition-all duration-300 hover:scale-110"
              >
                <GithubIcon size={24} className="hover:opacity-80" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-primary dark:text-gray-400 dark:hover:text-seagreen-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="hover:opacity-80" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-primary dark:text-gray-400 dark:hover:text-seagreen-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter size={24} className="hover:opacity-80" />
              </a>
              <a
                href="mailto:johndoe@example.com"
                className="text-gray-600 hover:text-blue-primary dark:text-gray-400 dark:hover:text-seagreen-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="hover:opacity-80" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
