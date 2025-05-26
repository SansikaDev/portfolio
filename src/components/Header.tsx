import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, XIcon, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId); // Set active section immediately on click
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const targetPosition = elementPosition - headerHeight;

        console.log(`Attempting to scroll to ${sectionId} at position ${targetPosition}, header height: ${headerHeight}`);

        try {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          setTimeout(() => {
            const currentPosition = window.scrollY;
            console.log(`Scroll completed for ${sectionId}: Current position ${currentPosition}, Target position ${targetPosition}`);
            if (Math.abs(currentPosition - targetPosition) > 10) {
              console.warn(`Scroll misalignment for ${sectionId}: Expected ${targetPosition}, Got ${currentPosition}`);
            }
          }, 1500);
        } catch (error) {
          console.error('Smooth scroll failed:', error);
          window.scrollTo(0, targetPosition);
        }
      }, 300);
    } else {
      console.warn(`Section with ID "${sectionId}" not found. Available IDs:`, 
        Array.from(document.querySelectorAll('[id]')).map(el => el.id));
    }
    setIsMenuOpen(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + (viewportHeight / 2); // Use viewport center for better accuracy

      let closestSection = activeSection;
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionCenter = offsetTop + (offsetHeight / 2);
          const distance = Math.abs(scrollPosition - sectionCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }

      // Only update activeSection if the user hasn't clicked a menu item recently
      if (closestSection !== activeSection) {
        setActiveSection(closestSection);
        console.log(`Scroll updated  Active section updated to: ${closestSection}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Depend on activeSection to avoid conflicts with manual clicks

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-50 transition-colors duration-300"
    >
      <nav ref={navRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
          >
            Sansika Kodithuwakku
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`relative px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                  activeSection === section ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              disabled={isTransitioning}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              disabled={isTransitioning}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                console.log('Toggling mobile menu:', !isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-x-0 top-[64px] bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 z-50 overflow-y-auto max-h-[calc(100vh-64px)]"
            >
              <div className="flex flex-col space-y-2 p-4">
                {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      console.log(`Mobile menu: Clicking ${section}`);
                      scrollToSection(section);
                    }}
                    className={`text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300 ${
                      activeSection === section ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : ''
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}