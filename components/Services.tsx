'use client';

import { motion } from 'framer-motion';
import { 
  Video, 
  Palette, 
  Zap, 
  Users, 
  Globe, 
  Smartphone, 
  Film, 
  Gamepad2,
  ArrowRight,
  CheckCircle,
  Star,
  Clock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Character Animation",
      description: "Bring your stickman characters to life with fluid, expressive animations that tell compelling stories.",
      features: ["Keyframe Animation", "Motion Capture", "Lip Sync", "Character Rigging"],
      price: "From $500",
      duration: "2-4 weeks",
      popular: true
    },
    {
      icon: Film,
      title: "Video Production",
      description: "Complete video production services from concept to final delivery, including editing and post-production.",
      features: ["Storyboarding", "Script Writing", "Video Editing", "Sound Design"],
      price: "From $800",
      duration: "3-6 weeks"
    },
    {
      icon: Gamepad2,
      title: "Game Animation",
      description: "Specialized animations for games, including idle, walk, run, and action sequences optimized for real-time rendering.",
      features: ["Game-Ready Rigs", "Looping Animations", "Performance Optimization", "Export Formats"],
      price: "From $600",
      duration: "2-5 weeks"
    },
    {
      icon: Smartphone,
      title: "Mobile Content",
      description: "Optimized animations for mobile platforms, social media, and digital marketing campaigns.",
      features: ["Mobile Optimization", "Social Media Ready", "Fast Loading", "Multiple Formats"],
      price: "From $300",
      duration: "1-3 weeks"
    },
    {
      icon: Globe,
      title: "Web Animation",
      description: "Interactive web animations and micro-interactions that enhance user experience and engagement.",
      features: ["CSS Animations", "JavaScript", "SVG Animations", "Performance Focused"],
      price: "From $400",
      duration: "2-4 weeks"
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "Tailored animation solutions for unique projects, including consultation and custom development.",
      features: ["Custom Development", "Consultation", "Training", "Ongoing Support"],
      price: "Custom Quote",
      duration: "Variable"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your vision, goals, and requirements to create a comprehensive project plan.",
      icon: CheckCircle
    },
    {
      step: "02",
      title: "Concept & Design",
      description: "Our team develops concepts, storyboards, and visual designs that align with your brand and objectives.",
      icon: Palette
    },
    {
      step: "03",
      title: "Animation & Production",
      description: "We bring your concepts to life through high-quality animation, ensuring every frame meets our standards.",
      icon: Video
    },
    {
      step: "04",
      title: "Review & Refinement",
      description: "Collaborative review process with multiple revision rounds to ensure your complete satisfaction.",
      icon: Star
    },
    {
      step: "05",
      title: "Delivery & Support",
      description: "Final delivery in your preferred formats, plus ongoing support and optimization recommendations.",
      icon: Zap
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-enhanced">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-animation-primary/10 text-animation-primary border border-animation-primary/20 mb-6">
            <Zap size={16} />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h1 className="text-gradient mb-6">
            Comprehensive Animation Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer a full range of animation services 
            designed to bring your ideas to life with creativity and technical excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-responsive grid-cols-responsive mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card h-full p-6 hover-lift overflow-hidden">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-animation-accent to-animation-primary text-white text-xs rounded-full font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-animation-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Duration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="btn btn-outline w-full group/btn">
                  Get Started
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven, collaborative process that ensures your project 
              is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2 z-0" />
                )}

                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-12 bg-gradient-to-r from-primary/5 to-animation-secondary/5 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your project and create something amazing together. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="btn btn-outline btn-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
