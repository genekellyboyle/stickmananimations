'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Play, 
  Heart, 
  Share2, 
  Eye, 
  Clock, 
  Star, 
  Filter,
  ExternalLink,
  Calendar,
  Tag
} from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects', count: 24 },
    { id: 'character', label: 'Character Animation', count: 8 },
    { id: 'commercial', label: 'Commercial', count: 6 },
    { id: 'entertainment', label: 'Entertainment', count: 5 },
    { id: 'educational', label: 'Educational', count: 3 },
    { id: 'gaming', label: 'Gaming', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: "Epic Battle Sequence",
      category: "character",
      description: "A thrilling stickman battle with dynamic camera movements and fluid animations",
      duration: "2:34",
      views: "15.2K",
      likes: "2.1K",
      rating: 4.9,
      thumbnail: "/api/placeholder/400/300",
      featured: true,
      tags: ["Action", "Combat", "Dynamic Camera"],
      client: "Game Studio X",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Product Launch Commercial",
      category: "commercial",
      description: "Engaging commercial animation for a tech product launch with modern aesthetics",
      duration: "0:30",
      views: "8.9K",
      likes: "1.3K",
      rating: 4.7,
      thumbnail: "/api/placeholder/400/300",
      tags: ["Commercial", "Tech", "Modern"],
      client: "TechCorp Inc",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Educational Science Series",
      category: "educational",
      description: "Interactive educational content explaining complex scientific concepts through animation",
      duration: "5:12",
      views: "12.7K",
      likes: "1.8K",
      rating: 4.8,
      thumbnail: "/api/placeholder/400/300",
      tags: ["Education", "Science", "Interactive"],
      client: "EduTech Solutions",
      date: "2024-01-05"
    },
    {
      id: 4,
      title: "Dance Performance",
      category: "entertainment",
      description: "Smooth dance moves with perfect timing and rhythm synchronization",
      duration: "1:47",
      views: "18.3K",
      likes: "2.5K",
      rating: 4.9,
      thumbnail: "/api/placeholder/400/300",
      tags: ["Dance", "Music", "Rhythm"],
      client: "Music Channel",
      date: "2023-12-28"
    },
    {
      id: 5,
      title: "Comedy Sketch",
      category: "entertainment",
      description: "Hilarious stickman comedy with expressive gestures and timing",
      duration: "3:12",
      views: "22.1K",
      likes: "3.2K",
      rating: 4.9,
      thumbnail: "/api/placeholder/400/300",
      tags: ["Comedy", "Humor", "Expression"],
      client: "Comedy Network",
      date: "2023-12-20"
    },
    {
      id: 6,
      title: "Game Character Idle",
      category: "gaming",
      description: "Optimized idle animation for game character with smooth looping",
      duration: "2:00",
      views: "9.8K",
      likes: "1.4K",
      rating: 4.6,
      thumbnail: "/api/placeholder/400/300",
      tags: ["Gaming", "Idle", "Looping"],
      client: "Indie Game Dev",
      date: "2023-12-15"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-animation-primary/10 text-animation-primary border border-animation-primary/20 mb-6">
            <Star size={16} />
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          <h1 className="text-gradient mb-6">
            Showcasing Creative Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse collection of animations that demonstrate our creativity, 
            technical skills, and commitment to delivering exceptional results.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                  : 'bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-primary'
              }`}
            >
              <span className="font-medium">{filter.label}</span>
              <span className="ml-2 text-xs opacity-75">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-responsive grid-cols-responsive mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card hover-lift overflow-hidden bg-card/50 backdrop-blur-enhanced border-border/50">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play size={24} className="text-foreground ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 bg-black/70 text-white text-xs rounded-md flex items-center gap-1">
                      <Clock size={12} />
                      {project.duration}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <div className="px-2 py-1 bg-gradient-to-r from-animation-accent to-animation-primary text-white text-xs rounded-md font-medium">
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="badge badge-outline text-xs capitalize">
                      {project.category}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star size={14} className="fill-animation-accent text-animation-accent" />
                      <span className="font-medium">{project.rating}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-muted/50 text-xs rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Client & Date */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Tag size={12} />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Stats & Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                        aria-label="Like project"
                        title="Like project"
                      >
                        <Heart size={16} className="text-muted-foreground hover:text-destructive" />
                      </button>
                      <button 
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                        aria-label="Share project"
                        title="Share project"
                      >
                        <Share2 size={16} className="text-muted-foreground hover:text-primary" />
                      </button>
                      <button 
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                        aria-label="View project details"
                        title="View project details"
                      >
                        <ExternalLink size={16} className="text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn btn-outline btn-lg group">
            Load More Projects
            <ExternalLink size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
