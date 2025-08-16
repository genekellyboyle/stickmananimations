'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Star, MousePointer, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 10 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 10 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Enhanced Background Elements with Mouse Tracking */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-animation-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-animation-accent/20 to-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-animation-primary/10 to-animation-secondary/10 rounded-full blur-3xl" />
        
        {/* Interactive Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          />
        </div>
      </motion.div>

      {/* Enhanced Floating Icons with Particle Effects */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-20 text-primary/30 group cursor-pointer"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <Sparkles size={32} />
        <motion.div
          variants={particleVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '1s' }}
        className="absolute top-32 right-32 text-animation-secondary/30 group cursor-pointer"
        whileHover={{ scale: 1.2, rotate: -360 }}
        transition={{ duration: 0.3 }}
      >
        <Zap size={28} />
        <motion.div
          variants={particleVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '0.5s' }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute -inset-2 bg-animation-secondary/20 rounded-full blur-md" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-32 left-32 text-animation-accent/30 group cursor-pointer"
        whileHover={{ scale: 1.2, rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <Star size={24} />
        <motion.div
          variants={particleVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '1.5s' }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute -inset-2 bg-animation-accent/20 rounded-full blur-md" />
        </motion.div>
      </motion.div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <div className="container-enhanced relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Enhanced Badge with Animation */}
          <motion.div 
            variants={itemVariants} 
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-enhanced shadow-glow">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} />
              </motion.div>
              <span className="text-sm font-medium">AI-Powered Animation Studio</span>
            </div>
          </motion.div>

          {/* Enhanced Main Heading with Text Animation */}
          <motion.h1 variants={itemVariants} className="mb-6">
            <motion.span 
              className="text-gradient font-bold block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Bring Your Stories to Life
            </motion.span>
            <motion.span 
              className="text-foreground block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              with Cutting-Edge Animation
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle with Typewriter Effect */}
          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Create stunning stickman animations, interactive experiences, and visual storytelling 
            that captivates your audience. Powered by the latest AI technology.
          </motion.p>

          {/* Enhanced CTA Buttons with Hover Effects */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button 
              className="btn btn-primary btn-lg group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Start Creating
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/80 to-animation-secondary/80"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              className="btn btn-outline btn-lg group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} className="mr-2" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Enhanced Stats with Counter Animation */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "10K+", label: "Animations Created", icon: "🎬" },
              { value: "50+", label: "Countries Reached", icon: "🌍" },
              { value: "99%", label: "Satisfaction Rate", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-3xl font-bold text-gradient mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator with Mouse Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MousePointer size={20} />
          </motion.div>
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-40"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default Hero;
