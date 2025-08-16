'use client'

import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          GK Animates
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional Animation Portfolio | Gene Kelly Boyle
        </p>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            🎬 Award-winning animator specializing in character animation and motion graphics
          </p>
          <p className="text-lg text-gray-700">
            🚀 Core Web Vitals monitoring active - Check the performance dashboard!
          </p>
        </div>
      </div>
    </section>
  );
}
