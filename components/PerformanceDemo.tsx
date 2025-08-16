'use client'

import React from 'react';
import { useWebVitals } from '../hooks/useWebVitals';

export default function PerformanceDemo() {
  const { vitals, refreshMetrics, getMetricRating } = useWebVitals();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 Performance Demo
          </h1>
          <p className="text-xl text-gray-600">
            Real-time Core Web Vitals monitoring and performance testing
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {['LCP', 'INP', 'CLS', 'FCP', 'TTFB'].map((metric) => {
            const metricData = vitals[metric as keyof typeof vitals];
            const rating = metricData && typeof metricData === 'object' && 'value' in metricData 
              ? getMetricRating(metric, metricData.value) 
              : 'unknown';
            
            return (
              <div key={metric} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{metric}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metricData && typeof metricData === 'object' && 'value' in metricData 
                    ? metricData.value.toFixed(2) 
                    : '--'}
                </div>
                <div className={`text-sm px-2 py-1 rounded-full inline-block ${
                  rating === 'good' ? 'bg-green-100 text-green-800' :
                  rating === 'needs-improvement' ? 'bg-yellow-100 text-yellow-800' :
                  rating === 'poor' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {rating.replace('-', ' ')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Tips */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Performance Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Core Web Vitals</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>LCP:</strong> Optimize images, reduce server response time, eliminate render-blocking resources</li>
                <li>• <strong>INP:</strong> Reduce JavaScript execution time, code splitting, optimize event handlers</li>
                <li>• <strong>CLS:</strong> Set explicit dimensions for images/videos, avoiding inserting content above existing content</li>
                <li>• <strong>FCP:</strong> Minimize critical resources, optimize CSS delivery, reduce server response time</li>
                <li>• <strong>TTFB:</strong> Optimize server performance, use CDN, implement caching strategies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Next.js Optimizations</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Image Optimization:</strong> Automatic WebP/AVIF conversion</li>
                <li>• <strong>Code Splitting:</strong> Automatic route-based splitting</li>
                <li>• <strong>CSS Optimization:</strong> Automatic CSS minification</li>
                <li>• <strong>Font Optimization:</strong> Display swap for better CLS</li>
                <li>• <strong>Bundle Analysis:</strong> Built-in performance insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Test Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🧪 Interactive Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Test INP (Interaction to Next Paint)</h3>
              <p className="text-sm text-gray-600 mb-4">
                Click buttons to test interaction responsiveness
              </p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Test Button 1
                </button>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                  Test Button 2
                </button>
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                  Test Button 3
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Test CLS (Layout Shift)</h3>
              <p className="text-sm text-gray-600 mb-4">
                Watch for layout shifts when content loads
              </p>
              <div className="space-y-2">
                <button 
                  onClick={() => refreshMetrics()}
                  className="w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                >
                  🔄 Refresh Metrics
                </button>
                <div className="text-xs text-gray-500">
                  Click to refresh Core Web Vitals data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
