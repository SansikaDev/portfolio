import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
  const projects = [{
    title: 'Fake News Detection System',
    description: 'A multi-platform application designed to identify and prevent the spread of misinformation using Machine Learning. Features include real-time fake news detection, browser extension for website verification, mobile app for on-the-go verification, and an admin panel for analytics.',
    image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&h=300&fit=crop',
    technologies: ['React', 'Redux Toolkit', 'Nest.js', 'Machine Learning', 'Docker', 'Jenkins'],
    github: 'https://github.com/dinuka-dissanayake/rp-project.git',
    demo: '#'
  }, {
    title: 'Clothing Store E-commerce',
    description: 'A modern full-stack e-commerce platform featuring a Spring Boot backend, React frontend, and Stripe payment integration. Includes user authentication, admin dashboard, product management, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=300&fit=crop',
    technologies: ['Spring Boot', 'React', 'MongoDB', 'Docker', 'Stripe', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/SansikaDev/clothing-store-ecommerce.git',
    demo: '#'
  }, {
    title: 'Task Manager Application',
    description: 'A full-stack task management solution with both web and mobile applications. Features include cross-platform task synchronization, real-time updates, user authentication, and an intuitive interface. The web app provides comprehensive task management, while the mobile app enables on-the-go productivity.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop',
    technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Redux', 'Express.js'],
    github: 'https://github.com/SansikaDev/task-manager.git',
    demo: '#'
  }, {
    title: 'Purchase Order Web Application',
    description: 'A comprehensive web application for managing purchase orders, approvals, and rejections. Features include user dashboards, order tracking, approval workflows, and real-time status updates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
    technologies: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/SansikaDev/po-web.git',
    demo: '#'
  }, {
    title: 'Delivery Partner Management',
    description: 'A MERN stack-based delivery management application that streamlines the entire process, providing real-time insights and seamless coordination between stakeholders. Features include order management, cost calculation, driver registration, and performance tracking.',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&h=300&fit=crop',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
    github: 'https://github.com/SansikaDev/Delilvery-Manager.git',
    demo: '#'
  }, {
    title: 'FitTrack Mobile Application',
    description: 'A JAVA-powered mobile application that helps users log exercises, set goals, and stay motivated on their fitness journey. Features include exercise logging, goal setting, and customizable workout routines.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
    technologies: ['Java', 'Android', 'SQLite', 'Material Design'],
    github: 'https://github.com/SansikaDev/My-fitness.git',
    demo: '#'
  }];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my studies and
            in my free time.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-blue-200/20 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm px-2 py-1 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    <GithubIcon size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    <ExternalLinkIcon size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}