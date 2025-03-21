import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileDown, MessageSquare } from "lucide-react";
import profileImage from "../assets/profile.jpg"

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-background dark:bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-inter font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="h-1 w-20 gradient-bar mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-700">
              <img 
                src={profileImage}
                alt="John Doe - AI, ML & Django Developer" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-inter font-semibold mb-4">Machine Learning Engineer & Full-Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I specialize in developing AI/ML solutions and robust web applications using Django. With a passion for problem-solving and innovation, I create efficient and scalable solutions that leverage the latest technologies in artificial intelligence and machine learning.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My journey in tech began with a degree in Computer Science, followed by specialized training in machine learning algorithms and deep learning frameworks. I've since applied this knowledge to projects ranging from predictive analytics systems to computer vision applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/resume.pdf"
                className="py-3 px-6 gradient-btn text-white dark:text-black rounded-md font-medium transition-all duration-300 shadow-md inline-flex items-center justify-center"
              >
                <FileDown className="mr-2 h-4 w-4" /> Download CV
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="py-3 px-6 border-2 border-blue-primary dark:border-seagreen-primary text-blue-primary dark:text-seagreen-primary hover:bg-blue-primary/10 dark:hover:bg-seagreen-primary/10 rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageSquare className="mr-2 h-4 w-4" /> Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
