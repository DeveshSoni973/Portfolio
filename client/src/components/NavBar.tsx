import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <header
      className={`fixed w-full bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm z-40 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="text-xl font-inter font-bold tracking-tight"
          >
            <span className="gradient-text">Ne</span>mo
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="nav-link font-medium hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="nav-link font-medium hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="nav-link font-medium hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="nav-link font-medium hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              className="py-2 px-4 gradient-btn text-white dark:text-black rounded-md transition shadow-md"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="py-2 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
            className="py-2 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="py-2 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="py-2 hover:text-blue-primary dark:hover:text-seagreen-primary transition-all duration-300"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            className="py-2 px-4 gradient-btn text-white dark:text-black rounded-md text-center shadow-md"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
