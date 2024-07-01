import React, { useState } from 'react';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from './context/ThemeContext';
import { motion } from 'framer-motion';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    theme,
    toggleTheme
  } = useTheme();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            John Doe
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </button>
            {/* ... rest of navigation buttons ... */}
            <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {theme === 'dark' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {theme === 'dark' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {/* ... mobile navigation buttons ... */}
            </div>
          </motion.div>}
      </nav>
    </motion.header>;
}