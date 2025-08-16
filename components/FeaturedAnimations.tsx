'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, Heart, Share2, Eye, Clock, Star, ArrowRight, Sparkles, Zap } from 'lucide-react';

const FeaturedAnimations = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set());

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
      featured: true,
      tags: ["Combat", "Dynamic Camera", "Fluid Motion"],
      color: "from-red-500 to-orange-500"
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
      thumbnail: "/api/placeholder/400/300",
      tags: ["Rhythm", "Smooth Motion", "Timing"],
      color: "from-purple-500 to-pink-500"
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
      thumbnail: "/api/placeholder/400/300",
      tags: ["Humor", "Expression", "Timing"],
      color: "from-yellow-500 to-green-500"
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
      thumbnail: "/api/placeholder/400/300",
      tags: ["Futuristic", "Special Effects", "Adventure"],
      color: "from-blue-500 to-cyan-500"
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

  const handleLike = (id: number) => {
    const newLikedCards = new Set(likedCards);
    if (newLikedCards.has(id)) {
      newLikedCards.delete(id);
    } else {
      newLikedCards.add(id);
    }
    setLikedCards(newLikedCards);
  };

  const AnimatedCard = ({ animation, index }: { animation: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
    const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);
    
    const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 10 });
    const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 10 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setHoveredCard(null);
    };

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        whileHover="hover"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="card h-full overflow-hidden bg-card/50 backdrop-blur-enhanced border-border/50 relative"
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          {/* Enhanced Thumbnail with 3D Effect */}
          <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Dynamic Background Pattern */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 80%, ${animation.color.replace('from-', 'rgba(').replace('to-', '0.3), ').replace('-500', '0.5, 0.3)')} 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, ${animation.color.replace('from-', 'rgba(').replace('to-', '0.2), ').replace('-500', '0.5, 0.2)')} 0%, transparent 50%)
                `,
              }}
            />
            
            {/* Enhanced Play Button Overlay */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                <Play size={24} className="text-foreground ml-1" />
              </div>
            </motion.div>

            {/* Enhanced Duration Badge */}
            <motion.div 
              className="absolute top-3 right-3"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="px-2 py-1 bg-black/70 text-white text-xs rounded-md flex items-center gap-1 backdrop-blur-sm">
                <Clock size={12} />
                {animation.duration}
              </div>
            </motion.div>

            {/* Enhanced Featured Badge */}
            {animation.featured && (
              <motion.div 
                className="absolute top-3 left-3"
                initial={{ scale: 0, x: -50 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                <div className="px-2 py-1 bg-gradient-to-r from-animation-accent to-animation-primary text-white text-xs rounded-md font-medium shadow-lg">
                  <Sparkles size={12} className="inline mr-1" />
                  Featured
                </div>
              </motion.div>
            )}

            {/* Floating Elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.4, 0.8, 0.4],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: index * 0.5 
              }}
            />
          </div>

          {/* Enhanced Content */}
          <div className="p-6 relative">
            {/* Category & Rating with Enhanced Animation */}
            <div className="flex items-center justify-between mb-3">
              <motion.div 
                className="badge badge-outline text-xs"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {animation.category}
              </motion.div>
              <motion.div 
                className="flex items-center gap-1 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Star size={14} className="fill-animation-accent text-animation-accent" />
                <span className="font-medium">{animation.rating}</span>
              </motion.div>
            </div>

            {/* Enhanced Title & Description */}
            <motion.h3 
              className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {animation.title}
            </motion.h3>
            <motion.p 
              className="text-muted-foreground text-sm mb-4 line-clamp-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {animation.description}
            </motion.p>

            {/* Enhanced Tags */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {animation.tags.map((tag: string, tagIndex: number) => (
                <motion.span
                  key={tagIndex}
                  className="px-2 py-1 bg-muted/50 text-xs rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 + tagIndex * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Enhanced Stats & Actions */}
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center gap-4 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Eye size={14} />
                  <span>{animation.views}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Heart size={14} />
                  <span>{animation.likes}</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + index * 0.1 }}
              >
                <motion.button 
                  className="p-2 hover:bg-muted rounded-md transition-colors"
                  aria-label="Like animation"
                  title="Like animation"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(animation.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart 
                    size={16} 
                    className={`transition-colors ${
                      likedCards.has(animation.id) 
                        ? 'text-destructive fill-destructive' 
                        : 'text-muted-foreground hover:text-destructive'
                    }`}
                  />
                </motion.button>
                <motion.button 
                  className="p-2 hover:bg-muted rounded-md transition-colors"
                  aria-label="Share animation"
                  title="Share animation"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 size={16} className="text-muted-foreground hover:text-primary" />
                </motion.button>
              </motion.div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-animation-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-animation-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-animation-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-enhanced relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-animation-primary/10 text-animation-primary border border-animation-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star size={16} />
            </motion.div>
            <span className="text-sm font-medium">Featured Collection</span>
          </motion.div>
          
          <motion.h2 
            className="text-gradient mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Trending Animations
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover our most popular and innovative stickman animations that showcase 
            the art of storytelling through motion.
          </motion.p>
        </motion.div>

        {/* Enhanced Animations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-responsive grid-cols-responsive mb-16"
        >
          {animations.map((animation, index) => (
            <AnimatedCard key={animation.id} animation={animation} index={index} />
          ))}
        </motion.div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button 
            className="btn btn-outline btn-lg group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              View All Animations
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-animation-secondary/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAnimations;
