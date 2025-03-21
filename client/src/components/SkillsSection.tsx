import * as React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { technicalSkills, technologies } from "@/data/skills";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-inter font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="h-1 w-20 gradient-bar mx-auto mb-8"
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
            Here are the technologies and tools I specialize in
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-inter font-semibold mb-6">Technical Skills</h3>
            
            {technicalSkills.map((skill, index) => (
              <motion.div key={index} className="mb-5" variants={itemVariants}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-primary dark:text-seagreen-primary">{skill.percentage}%</span>
                </div>
                <Progress 
                  percent={skill.percentage} 
                  className="progress-bar"
                  fillClassName="gradient-progress-fill"
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Technologies & Frameworks */}
          <div>
            <h3 className="text-2xl font-inter font-semibold mb-8">Technologies & Frameworks</h3>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="h-12 w-12 flex items-center justify-center text-blue-primary dark:text-seagreen-primary mb-3">
                    {tech.icon && React.createElement(tech.icon, { className: "h-6 w-6" })}
                  </div>
                  <h4 className="font-medium">{tech.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
