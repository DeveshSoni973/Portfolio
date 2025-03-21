import { GithubIcon, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="text-2xl font-inter font-bold"
            >
              <span className="gradient-text">John</span>Doe
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              AI, ML & Django Developer
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-gray-300 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
            >
              About
            </a>
            <a 
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="text-gray-300 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
            >
              Skills
            </a>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="text-gray-300 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-gray-300 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
            >
              Contact
            </a>
          </div>
          
          <div>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300 hover:scale-110"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Built with <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
