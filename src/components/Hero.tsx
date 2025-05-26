import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/me.png'; // Add your image here
import cvFile from '../assets/cv/CV_Sansika_Kodithuwakku.pdf';

export function Hero() {
  return <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sansika Kodithuwakku</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6"
            >
              Full-Stack Developer & Software Engineering Student
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Software Engineer with 2+ years of industry experience as a Full-Stack Developer. 
              Passionate about building sleek frontends with React, JavaScript, TypeScript, and Redux, while crafting 
              efficient backend solutions. Machine Learning enthusiast, coding since 2018, constantly leveling up 
              through self-learning and real-world projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cvFile}
                download="CV_Sansika_Kodithuwakku.pdf"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                <DownloadIcon size={20} />
                Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })}
                className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors text-base sm:text-lg"
              >
                Contact Me
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://github.com/SansikaDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <GithubIcon size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://www.linkedin.com/in/sansika-kodithuwakku/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="mailto:sansikakodi@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <MailIcon size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl dark:shadow-blue-700/20 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-700 p-4"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <img
                  src={profileImage}
                  alt="Sansika Kodithuwakku - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}