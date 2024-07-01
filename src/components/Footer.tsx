import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sansika Kodithuwakku</h3>
            <p className="text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
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
              href="mailto:sansika.kodi@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <MailIcon size={24} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Sansika Kodithuwakku. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 