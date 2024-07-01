import React from 'react';
// ... existing imports ...
import { motion } from 'framer-motion';
export function Hero() {
  return <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 w-full transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">John Doe</span>
            </h1>
            {/* ... rest of the content ... */}
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="John Doe - Software Engineer" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}