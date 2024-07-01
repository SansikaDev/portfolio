import React from 'react';
import { GraduationCapIcon, AwardIcon, BookOpenIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and continuous learning journey in computer
            science and software development.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-blue-200/20 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <GraduationCapIcon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-l-4 border-blue-600 dark:border-blue-400 pl-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                BSc (Hons) in Information Technology
                Specialising in Software Engineering
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Sri Lanka Institute of Information and Technology</p>
                <p className="text-gray-600 dark:text-gray-400">2021 - 2024</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>GPA:</strong> 3.4/4.0
                  <br />
                  <strong>Relevant Coursework:</strong> Data Structures,
                  Algorithms, Database Systems, Web Development, Software
                  Engineering, Computer Networks
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border-l-4 border-gray-300 dark:border-gray-600 pl-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Advanced Level
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Ananda College, Colombo 10</p>
                <p className="text-gray-600 dark:text-gray-400">2016 - 2020</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Level:</strong> Passed
                  <br />
                  Biology Stream
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border-l-4 border-gray-300 dark:border-gray-600 pl-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Ordinary Level
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Ananda College, Colombo 10</p>
                <p className="text-gray-600 dark:text-gray-400">2006 - 2016</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Level:</strong> Passed
                  <br />
                 
                </p>
              </motion.div>
            </div>
          </motion.div>
          {/* Certifications & Achievements */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-blue-200/20 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <AwardIcon className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: 'Exploratory Data Analysis for Machine Learning',
                    issuer: 'IBM',
                    year: '2024'
                  },
                  {
                    title: 'TypeScript Variables and Data Types',
                    issuer: 'Coursera',
                    year: '2023'
                  },

                  {
                    title: 'Cloud Foundations',
                    issuer: 'Greate Learning',
                    year: '2023'
                  },
                  {
                    title: 'OOPs in Java',
                    issuer: 'Greate Learning',
                    year: '2023'
                  },
                  {
                    title: 'Python for Beginers',
                    issuer: 'Universiry of Moratuwa',
                    year: '2023'
                  },
                  {
                    title: 'MongoDB and the Document Model',
                    issuer: 'MongoDB',
                    year: '2023'
                  },
                  {
                    title: 'Business Analysis & Process Management',
                    issuer: 'Coursera',
                    year: '2023'
                  },
                  {
                    title: 'Business Analysis & Process Management',
                    issuer: 'Coursera',
                    year: '2023'
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-blue-200/20 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                  <BookOpenIcon className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Achievements
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Dean's List",
                    description: 'Second Semester 4th Year'
                  },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}