'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // THIS IS THE MISSING IMPORT

export default function FeaturedAnimations() {
  const animations = [
    {
      id: 1,
      title: "Walking Cycle",
      description: "Smooth 8-frame walking animation",
      preview: "/animations/walk-preview.gif",
      category: "Basic Movement"
    },
    {
      id: 2,
      title: "Jump & Land",
      description: "Dynamic jumping with squash and stretch",
      preview: "/animations/jump-preview.gif",
      category: "Action"
    },
    {
      id: 3,
      title: "Combat Combo",
      description: "3-hit combo with special effects",
      preview: "/animations/combat-preview.gif",
      category: "Fighting"
    },
    {
      id: 4,
      title: "Idle Breathing",
      description: "Subtle idle animation loop",
      preview: "/animations/idle-preview.gif",
      category: "Basic Movement"
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Animations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of professionally crafted stickman animations. 
            Perfect for games, presentations, and creative projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {animations.map((animation) => (
            <motion.div
              key={animation.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  >
                    <circle cx="40" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
                    <line x1="40" y1="28" x2="40" y2="50" stroke="currentColor" strokeWidth="2"/>
                    <line x1="40" y1="35" x2="30" y2="45" stroke="currentColor" strokeWidth="2"/>
                    <line x1="40" y1="35" x2="50" y2="45" stroke="currentColor" strokeWidth="2"/>
                    <line x1="40" y1="50" x2="32" y2="65" stroke="currentColor" strokeWidth="2"/>
                    <line x1="40" y1="50" x2="48" y2="65" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  {animation.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-600 transition-colors">
                  {animation.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {animation.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 group">
            View All Animations
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
