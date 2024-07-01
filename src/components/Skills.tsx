import React from 'react';
import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [{
    title: 'Programming Languages',
    skills: [{
      name: 'JavaScript',
      level: 85
    }, {
      name: 'Python',
      level: 80
    }, {
      name: 'Java',
      level: 75
    }, {
      name: 'TypeScript',
      level: 70
    }, {
      name: 'C++',
      level: 65
    }]
  }, {
    title: 'Web Technologies',
    skills: [{
      name: 'React',
      level: 80
    }, {
      name: 'HTML/CSS',
      level: 90
    }, {
      name: 'Node.js',
      level: 75
    }, {
      name: 'Express.js',
      level: 70
    }, {
      name: 'REST APIs',
      level: 75
    }]
  }, {
    title: 'Tools & Technologies',
    skills: [{
      name: 'Git/GitHub',
      level: 85
    }, {
      name: 'MongoDB',
      level: 70
    }, {
      name: 'SQL',
      level: 75
    }, {
      name: 'Docker',
      level: 60
    }, {
      name: 'AWS',
      level: 55
    }]
  }];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with during my
            studies and personal projects.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-blue-200/20 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}