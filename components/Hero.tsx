'use client'

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }}
      />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* Animated Title */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            GK ANIMATES
          </h1>
          <div className="h-2 w-64 mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse" />
        </div>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Where <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Creativity</span> meets{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Technology</span>, and{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Animation</span> comes to life
        </p>

        {/* Animated Description */}
        <div className="mb-16 space-y-4">
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            🎬 Award-winning animator specializing in character animation and motion graphics
          </p>
          <p className="text-lg text-white/70">
            🚀 Core Web Vitals monitoring active - Check the performance dashboard!
          </p>
        </div>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { text: 'View Portfolio', color: 'from-blue-500 to-purple-500', icon: '🎨' },
            { text: 'Watch Animations', color: 'from-purple-500 to-pink-500', icon: '🎬' },
            { text: 'Get in Touch', color: 'from-pink-500 to-red-500', icon: '💬' }
          ].map((button, index) => (
            <button
              key={index}
              className={`group relative px-8 py-4 rounded-full bg-gradient-to-r ${button.color} text-white font-bold text-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:shadow-purple-500/50 overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {button.icon}
                </span>
                {button.text}
              </span>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
