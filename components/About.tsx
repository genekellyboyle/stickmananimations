'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Clock,
  Zap,
  Heart,
  Star,
  CheckCircle,
} from 'lucide-react';

// Accessibility: Add ARIA labels and semantic HTML where appropriate
// Responsive: Use mobile-first grid classes and ensure all text is readable on small screens
// Performance: Use React keys properly, avoid inline functions where possible, and memoize static data
// Animation: Use framer-motion best practices for variants and transitions
// Design System: Use CSS custom properties for colors and box-shadow, and ensure consistent container styling

const stats = [
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    color: 'text-animation-accent',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Happy Clients',
    color: 'text-primary',
  },
  {
    icon: Clock,
    value: '1000+',
    label: 'Animations Created',
    color: 'text-animation-secondary',
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support Available',
    color: 'text-animation-success',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Passion for Animation',
    description:
      'Every frame is crafted with love and attention to detail, ensuring your vision comes to life exactly as imagined.',
  },
  {
    icon: Star,
    title: 'Excellence in Quality',
    description:
      'We never compromise on quality, delivering animations that exceed expectations and stand the test of time.',
  },
  {
    icon: CheckCircle,
    title: 'Innovation First',
    description:
      'Constantly pushing boundaries with cutting-edge techniques and the latest animation technology.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'Lead Animator',
    specialty: 'Character Animation',
    emoji: '👩‍🎨',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Creative Director',
    specialty: 'Story Development',
    emoji: '🧑‍💼',
  },
  {
    name: 'Emma Thompson',
    role: 'Technical Artist',
    specialty: 'Rigging & Effects',
    emoji: '🧑‍💻',
  },
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
      ease: 'easeOut',
    },
  },
};

const About = () => {
  return (
    <section
      className="section-padding bg-gradient-to-b from-background to-muted/20"
      aria-labelledby="about-heading"
    >
      <div className="container-enhanced">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
            aria-label="About Our Studio"
          >
            <Star size={16} aria-hidden="true" />
            <span className="text-sm font-medium">About Our Studio</span>
          </div>
          <h1
            id="about-heading"
            className="text-gradient mb-6 text-3xl md:text-5xl font-extrabold"
          >
            Where Creativity Meets Technology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;re a passionate team of animators, designers, and storytellers dedicated to
            bringing your ideas to life through the art of stickman animation.
          </p>
        </motion.header>

        {/* Stats Grid */}
        <motion.section
          aria-label="Studio Statistics"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
              tabIndex={0}
              aria-label={`${stat.value} ${stat.label}`}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
                aria-hidden="true"
              >
                <stat.icon size={32} className={stat.color} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Story Section */}
        <motion.section
          aria-labelledby="our-story-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2
              id="our-story-heading"
              className="text-3xl font-bold mb-6"
            >
              Our Story
            </h2>
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
                Today, we continue to push the boundaries of what&apos;s possible in animation,
                combining traditional techniques with cutting-edge technology to create
                experiences that inspire and entertain.
              </p>
            </div>
          </div>
          <div className="relative" aria-hidden="true">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-animation-secondary/20 rounded-2xl p-8">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4" aria-label="Film Camera Emoji">
                    🎬
                  </div>
                  <div className="text-lg font-semibold text-muted-foreground">
                    Animation Studio
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-animation-accent to-animation-primary rounded-full blur-xl opacity-60" />
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          aria-labelledby="core-values-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            id="core-values-heading"
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card p-8 text-center hover-lift"
                tabIndex={0}
                aria-label={value.title}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                  aria-hidden="true"
                >
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          aria-labelledby="team-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            id="team-heading"
            className="text-3xl font-bold mb-6"
          >
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our diverse team brings together expertise from animation, design, technology,
            and storytelling to create exceptional experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card p-6 hover-lift"
                tabIndex={0}
                aria-label={`${member.name}, ${member.role}`}
              >
                <div
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-animation-secondary/20 flex items-center justify-center"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                  aria-hidden="true"
                >
                  <div className="text-2xl" aria-label={member.role}>
                    {member.emoji}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-2">{member.role}</div>
                <div className="text-sm text-muted-foreground">{member.specialty}</div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default About;
