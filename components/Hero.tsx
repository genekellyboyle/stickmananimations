'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-animation-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-animation-accent/20 to-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-animation-primary/10 to-animation-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-20 text-primary/30"
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '1s' }}
        className="absolute top-32 right-32 text-animation-secondary/30"
      >
        <Zap size={28} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-32 left-32 text-animation-accent/30"
      >
        <Star size={24} />
      </motion.div>

      <div className="container-enhanced relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-enhanced">
              <Sparkles size={16} />
              <span className="text-sm font-medium">AI-Powered Animation Studio</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="mb-6">
            <span className="text-gradient font-bold">
              Bring Your Stories to Life
            </span>
            <br />
            <span className="text-foreground">
              with Cutting-Edge Animation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Create stunning stickman animations, interactive experiences, and visual storytelling 
            that captivates your audience. Powered by the latest AI technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn btn-primary btn-lg group">
              Start Creating
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn btn-outline btn-lg group">
              <Play size={20} className="mr-2" />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-muted-foreground">Animations Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">99%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
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
    </section>
  );
};

export default Hero;
