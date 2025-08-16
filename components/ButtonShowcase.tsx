'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, ArrowRight, Star, Heart, Download, Share2, Sparkles } from 'lucide-react';
import Button from './Button';

const ButtonShowcase = () => {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleLoadingClick = (buttonId: string) => {
    setLoadingButton(buttonId);
    setTimeout(() => setLoadingButton(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-animation-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-enhanced relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-animation-primary/10 text-animation-primary border border-animation-primary/20 mb-6"
          >
            <Star size={16} />
            <span className="text-sm font-medium">Component Library</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-gradient mb-6"
          >
            Button Components
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our collection of modern, accessible button components with smooth animations 
            and engaging hover effects.
          </motion.p>
        </motion.div>

        {/* Button Variants */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Primary Buttons */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Primary Buttons</h3>
              <div className="space-y-4">
                <Button size="sm">Small Button</Button>
                <Button size="md">Medium Button</Button>
                <Button size="lg">Large Button</Button>
                <Button icon={<Play size={16} />}>With Icon</Button>
                <Button 
                  icon={<ArrowRight size={16} />} 
                  iconPosition="right"
                >
                  Icon Right
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Secondary Buttons */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Secondary Buttons</h3>
              <div className="space-y-4">
                <Button variant="secondary" size="sm">Small Secondary</Button>
                <Button variant="secondary" size="md">Medium Secondary</Button>
                <Button variant="secondary" size="lg">Large Secondary</Button>
                <Button variant="secondary" icon={<Heart size={16} />}>Like</Button>
                <Button variant="secondary" icon={<Share2 size={16} />}>Share</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Outline & Ghost Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Outline Buttons */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Outline Buttons</h3>
              <div className="space-y-4">
                <Button variant="outline" size="sm">Small Outline</Button>
                <Button variant="outline" size="md">Medium Outline</Button>
                <Button variant="outline" size="lg">Large Outline</Button>
                <Button variant="outline" icon={<Download size={16} />}>Download</Button>
                <Button variant="outline" icon={<Star size={16} />}>Favorite</Button>
              </div>
            </div>
          </motion.div>

          {/* Ghost Buttons */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Ghost Buttons</h3>
              <div className="space-y-4">
                <Button variant="ghost" size="sm">Small Ghost</Button>
                <Button variant="ghost" size="md">Medium Ghost</Button>
                <Button variant="ghost" size="lg">Large Ghost</Button>
                <Button variant="ghost" icon={<Heart size={16} />}>Love</Button>
                <Button variant="ghost" icon={<Share2 size={16} />}>Share</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Loading Buttons */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Loading States</h3>
              <div className="space-y-4">
                <Button 
                  loading={loadingButton === 'loading1'}
                  onClick={() => handleLoadingClick('loading1')}
                >
                  {loadingButton === 'loading1' ? 'Processing...' : 'Click to Load'}
                </Button>
                <Button 
                  variant="secondary"
                  loading={loadingButton === 'loading2'}
                  onClick={() => handleLoadingClick('loading2')}
                >
                  {loadingButton === 'loading2' ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button 
                  variant="outline"
                  loading={loadingButton === 'loading3'}
                  onClick={() => handleLoadingClick('loading3')}
                >
                  {loadingButton === 'loading3' ? 'Uploading...' : 'Upload File'}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Disabled Buttons */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Disabled States</h3>
              <div className="space-y-4">
                <Button disabled>Disabled Primary</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
                <Button variant="ghost" disabled>Disabled Ghost</Button>
                <Button disabled icon={<Play size={16} />}>Disabled with Icon</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Special Effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Special Effects</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-primary to-animation-secondary hover:from-animation-secondary hover:to-primary"
                icon={<Star size={20} />}
                size="lg"
              >
                Gradient Button
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-animation-accent text-animation-accent hover:bg-animation-accent hover:text-white"
                icon={<Heart size={20} />}
                size="lg"
              >
                Accent Button
              </Button>
              <Button 
                variant="ghost"
                className="text-animation-secondary hover:bg-animation-secondary/10"
                icon={<Sparkles size={20} />}
                size="lg"
              >
                Magic Button
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ButtonShowcase;
