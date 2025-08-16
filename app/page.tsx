import { Suspense } from 'react'
import Hero from '../components/Hero'
import PerformanceDashboard from '../components/PerformanceDashboard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Performance Dashboard */}
      <PerformanceDashboard />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Simple Test Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            🚀 Next.js App Working!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you can see this, your Next.js app is running correctly!
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              ✅ Core Web Vitals monitoring active
            </p>
            <p className="text-lg text-gray-700">
              ✅ Performance dashboard visible
            </p>
            <p className="text-lg text-gray-700">
              ✅ Vercel Speed Insights integrated
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
