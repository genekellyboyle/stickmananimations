import { Suspense } from 'react'
import Hero from './components/Hero'
import FeaturedAnimations from './components/FeaturedAnimations'
import Portfolio from './components/Portfolio'
import CreativeProcess from './components/CreativeProcess'
import About from './components/About'
import Tools from './components/Tools'
import Contact from './components/Contact'
import PerformanceDashboard from './components/PerformanceDashboard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Performance Dashboard */}
      <PerformanceDashboard />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Animations */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading animations...</div>}>
        <FeaturedAnimations />
      </Suspense>
      
      {/* Portfolio */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading portfolio...</div>}>
        <Portfolio />
      </Suspense>
      
      {/* Creative Process */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading process...</div>}>
        <CreativeProcess />
      </Suspense>
      
      {/* About */}
      <About />
      
      {/* Tools */}
      <Tools />
      
      {/* Contact */}
      <Contact />
    </div>
  )
}
