import React from 'react';
import { CodeIcon, UserIcon, TargetIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives my
            passion for software development.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
              alt="Software development workspace with code editor"
              className="rounded-lg shadow-lg dark:shadow-blue-200/20 w-full h-64 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <UserIcon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Who I Am
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A recent Computer Science graduate with a strong foundation
                    in programming fundamentals and a passion for learning new
                    technologies. I enjoy solving complex problems and creating
                    efficient solutions.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <CodeIcon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    What I Do
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I specialize in full-stack web development using modern
                    technologies like React, Node.js, and Python. I'm also
                    experienced in database design, API development, and version
                    control systems.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <TargetIcon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    My Goals
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm looking to join a dynamic team where I can contribute to
                    meaningful projects, continue learning, and grow as a
                    software engineer while making a positive impact through
                    technology.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}