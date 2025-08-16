'use client';

import { motion } from 'framer-motion';
import { Play, Heart, Share2, Eye, Clock, Star } from 'lucide-react';

const FeaturedAnimations = () => {
  const animations = [
    {
      id: 1,
      title: "Epic Battle Sequence",
      description: "A thrilling stickman battle with dynamic camera movements and fluid animations",
      duration: "2:34",
      views: "15.2K",
      likes: "2.1K",
      category: "Action",
      rating: 4.9,
      thumbnail: "/api/placeholder/400/300",
      featured: true
    },
    {
      id: 2,
      title: "Dance Performance",
      description: "Smooth dance moves with perfect timing and rhythm synchronization",
      duration: "1:47",
      views: "8.9K",
      likes: "1.3K",
      category: "Dance",
      rating: 4.7,
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Comedy Sketch",
      description: "Hilarious stickman comedy with expressive gestures and timing",
      duration: "3:12",
      views: "12.7K",
      likes: "1.8K",
      category: "Comedy",
      rating: 4.8,
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Sci-Fi Adventure",
      description: "Futuristic stickman exploring alien worlds with special effects",
      duration: "4:21",
      views: "18.3K",
      likes: "2.5K",
      category: "Sci-Fi",
      rating: 4.9,
      thumbnail: "/api/placeholder/400/300"
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

  const cardVariants = {
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

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-enhanced">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-animation-primary/10 text-animation-primary border border-animation-primary/20 mb-6">
            <Star size={16} />
            <span className="text-sm font-medium">Featured Collection</span>
          </div>
          <h2 className="text-gradient mb-6">
            Trending Animations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and innovative stickman animations that showcase 
            the art of storytelling through motion.
          </p>
        </motion.div>

        {/* Animations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-responsive grid-cols-responsive"
        >
          {animations.map((animation, index) => (
            <motion.div
              key={animation.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={hoverVariants}
                className="card hover-lift overflow-hidden bg-card/50 backdrop-blur-enhanced border-border/50"
              >
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
                      {animation.duration}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {animation.featured && (
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
                    <div className="badge badge-outline text-xs">
                      {animation.category}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star size={14} className="fill-animation-accent text-animation-accent" />
                      <span className="font-medium">{animation.rating}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {animation.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {animation.description}
                  </p>

                  {/* Stats & Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{animation.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{animation.likes}</span>
                      </div>
                    </div>
                    
                                         <div className="flex items-center gap-2">
                       <button 
                         className="p-2 hover:bg-muted rounded-md transition-colors"
                         aria-label="Like animation"
                         title="Like animation"
                       >
                         <Heart size={16} className="text-muted-foreground hover:text-destructive" />
                       </button>
                       <button 
                         className="p-2 hover:bg-muted rounded-md transition-colors"
                         aria-label="Share animation"
                         title="Share animation"
                       >
                         <Share2 size={16} className="text-muted-foreground hover:text-primary" />
                       </button>
                     </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn btn-outline btn-lg group">
            View All Animations
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAnimations;
