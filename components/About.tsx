'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Zap, Heart, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: "15+", label: "Years Experience", color: "text-animation-accent" },
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-primary" },
    { icon: Clock, value: "1000+", label: "Animations Created", color: "text-animation-secondary" },
    { icon: Zap, value: "24/7", label: "Support Available", color: "text-animation-success" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Animation",
      description: "Every frame is crafted with love and attention to detail, ensuring your vision comes to life exactly as imagined."
    },
    {
      icon: Star,
      title: "Excellence in Quality",
      description: "We never compromise on quality, delivering animations that exceed expectations and stand the test of time."
    },
    {
      icon: CheckCircle,
      title: "Innovation First",
      description: "Constantly pushing boundaries with cutting-edge techniques and the latest animation technology."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-enhanced">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Star size={16} />
            <span className="text-sm font-medium">About Our Studio</span>
          </div>
          <h1 className="text-gradient mb-6">
            Where Creativity Meets Technology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of animators, designers, and storytellers dedicated to 
            bringing your ideas to life through the art of stickman animation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={32} className={stat.color} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009, our studio began with a simple mission: to make animation 
                accessible to everyone while maintaining the highest standards of quality and creativity.
              </p>
              <p>
                What started as a small team of passionate animators has grown into a 
                full-service animation studio, serving clients worldwide with innovative 
                stickman animations that tell compelling stories.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in animation, 
                combining traditional techniques with cutting-edge technology to create 
                experiences that inspire and entertain.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-animation-secondary/20 rounded-2xl p-8">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <div className="text-lg font-semibold text-muted-foreground">Animation Studio</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-animation-accent to-animation-primary rounded-full blur-xl opacity-60" />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card p-8 text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our diverse team brings together expertise from animation, design, technology, 
            and storytelling to create exceptional experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Lead Animator", specialty: "Character Animation" },
              { name: "Marcus Rodriguez", role: "Creative Director", specialty: "Story Development" },
              { name: "Emma Thompson", role: "Technical Artist", specialty: "Rigging & Effects" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card p-6 hover-lift"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-animation-secondary/20 flex items-center justify-center">
                  <div className="text-2xl">👤</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-2">{member.role}</div>
                <div className="text-sm text-muted-foreground">{member.specialty}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
