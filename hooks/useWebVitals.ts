'use client'

import { useState, useEffect, useCallback } from 'react';

interface WebVitalsData {
  LCP?: { value: number; rating: string };
  INP?: { value: number; rating: string };
  CLS?: { value: number; rating: string };
  FCP?: { value: number; rating: string };
  TTFB?: { value: number; rating: string };
  isInitialized: boolean;
}

interface WebVitalsHook {
  vitals: WebVitalsData;
  refreshMetrics: () => void;
  getMetricRating: (metric: string, value: number) => string;
}

const VITAL_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 },
  INP: { good: 200, needsImprovement: 500 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTFB: { good: 800, needsImprovement: 1800 }
};

const getRating = (value: number, thresholds: { good: number; needsImprovement: number }): string => {
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
};

export const useWebVitals = (): WebVitalsHook => {
  const [vitals, setVitals] = useState<WebVitalsData>({
    isInitialized: false
  });

  const logMetric = useCallback((name: string, value: number) => {
    const thresholds = VITAL_THRESHOLDS[name as keyof typeof VITAL_THRESHOLDS];
    if (thresholds) {
      const rating = getRating(value, thresholds);
      setVitals(prev => ({
        ...prev,
        [name]: { value, rating },
        isInitialized: true
      }));
    }
  }, []);

  const sendToAnalytics = useCallback(({ name, value }: { name: string; value: number }) => {
    // Send to Vercel Analytics if available
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('event', name, {
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        metric_value: value,
      });
    }
  }, []);

  const setupPerformanceObserver = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor long tasks for INP
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'longtask') {
              const longTask = entry as PerformanceEntry;
              logMetric('INP', longTask.duration);
            }
          }
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.warn('PerformanceObserver not supported');
      }
    }
  }, [logMetric]);

  const refreshMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Get TTFB from navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      logMetric('TTFB', ttfb);
    }

    // Get FCP and LCP from paint timing
    const paintEntries = performance.getEntriesByType('paint');
    paintEntries.forEach(entry => {
      if (entry.name === 'first-contentful-paint') {
        logMetric('FCP', entry.startTime);
      }
    });

    // Get LCP from largest contentful paint
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      const lcp = lcpEntries[lcpEntries.length - 1];
      logMetric('LCP', lcp.startTime);
    }

    // Get CLS from layout shift
    const clsEntries = performance.getEntriesByType('layout-shift');
    if (clsEntries.length > 0) {
      let cls = 0;
      clsEntries.forEach(entry => {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
        }
      });
      logMetric('CLS', cls);
    }
  }, [logMetric]);

  const getMetricRating = useCallback((metric: string, value: number): string => {
    const thresholds = VITAL_THRESHOLDS[metric as keyof typeof VITAL_THRESHOLDS];
    if (thresholds) {
      return getRating(value, thresholds);
    }
    return 'unknown';
  }, []);

  useEffect(() => {
    setupPerformanceObserver();
    
    // Initial metrics after page load
    if (document.readyState === 'complete') {
      refreshMetrics();
    } else {
      window.addEventListener('load', refreshMetrics);
      return () => window.removeEventListener('load', refreshMetrics);
    }
  }, [setupPerformanceObserver, refreshMetrics]);

  return { vitals, refreshMetrics, getMetricRating };
};
