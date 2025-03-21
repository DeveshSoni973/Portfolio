import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowRight, GithubIcon } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.categories.includes(filter);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 bg-[#F0F7FF] dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-inter font-bold mb-4 text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-cyan-400 dark:to-teal-500"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Here are some of my recent projects in AI, ML, and Django
          </motion.p>
        </div>

        {/* Project Filters */}
        <motion.div
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
              filter === "all"
                ? "bg-gradient-to-r from-purple-600 to-purple-500 dark:from-cyan-400 dark:to-teal-500 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
              filter === "ai"
                ? "bg-gradient-to-r from-purple-600 to-purple-500 dark:from-cyan-400 dark:to-teal-500 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setFilter("ai")}
          >
            AI
          </button>
          <button
            className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
              filter === "ml"
                ? "bg-gradient-to-r from-purple-600 to-purple-500 dark:from-cyan-400 dark:to-teal-500 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setFilter("ml")}
          >
            ML
          </button>
          <button
            className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
              filter === "django"
                ? "bg-gradient-to-r from-purple-600 to-purple-500 dark:from-cyan-400 dark:to-teal-500 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setFilter("django")}
          >
            Django
          </button>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-none outline-none bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden h-48 rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="py-1 px-3 text-white text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-purple-500 dark:from-cyan-400 dark:to-teal-500">
                      {project.categories.includes("ai")
                        ? "AI"
                        : project.categories.includes("ml")
                          ? "ML"
                          : "Django"}
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-b-xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                  <h3 className="text-xl font-inter font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`py-1 px-2 text-xs font-medium rounded ${
                          project.categories.includes("ai")
                            ? "bg-purple-100 text-purple-800 dark:bg-cyan-900 dark:text-cyan-200"
                            : project.categories.includes("ml")
                              ? "bg-purple-100 text-purple-800 dark:bg-teal-900 dark:text-teal-200"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-cyan-300 font-medium text-sm inline-flex items-center transition-all duration-300"
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-cyan-400 transition"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;