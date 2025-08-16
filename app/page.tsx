import { Suspense } from 'react'
import Hero from '../components/Hero'
import PerformanceDashboard from '../components/PerformanceDashboard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Performance Dashboard */}
      <PerformanceDashboard />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Super Design Showcase */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          {/* Main Showcase */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              SUPER DESIGN
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Pushing the boundaries of web design with cutting-edge animations, 
              stunning visuals, and performance that never compromises on beauty.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "🎨",
                title: "Visual Excellence",
                description: "Every pixel crafted with purpose, every animation tells a story"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Optimized for speed without sacrificing visual impact"
              },
              {
                icon: "🚀",
                title: "Future Ready",
                description: "Built with the latest web technologies and best practices"
              },
              {
                icon: "🎬",
                title: "Animation Mastery",
                description: "Smooth, performant animations that captivate users"
              },
              {
                icon: "📱",
                title: "Responsive Design",
                description: "Perfect on every device, from mobile to desktop"
              },
              {
                icon: "🌟",
                title: "Performance First",
                description: "Core Web Vitals optimized for the best user experience"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>

          {/* Interactive Demo Section */}
          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">
                🎯 Interactive Experience
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the power of modern web design. Every interaction is 
                carefully crafted to delight and engage.
              </p>
              
              {/* Interactive Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                {['Explore', 'Discover', 'Create', 'Innovate'].map((text, index) => (
                  <button
                    key={index}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Display */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-12">
            🚀 Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "LCP", value: "< 2.5s", color: "from-green-400 to-emerald-400" },
              { label: "INP", value: "< 200ms", color: "from-blue-400 to-cyan-400" },
              { label: "CLS", value: "< 0.1", color: "from-purple-400 to-pink-400" },
              { label: "FCP", value: "< 1.8s", color: "from-orange-400 to-red-400" }
            ].map((metric, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.label}
                </div>
                <div className="text-xl text-white/80">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
