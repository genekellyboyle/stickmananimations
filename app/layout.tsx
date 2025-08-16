import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Comfortaa } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const comfortaa = Comfortaa({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-comfortaa',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GK Animates - Professional Animation Portfolio | Gene Kelly Boyle',
  description: 'Award-winning animator Gene Kelly Boyle showcases character animations, motion graphics, and storytelling. View portfolio, client work, and creative process.',
  keywords: ['animation', 'stickman', 'motion graphics', 'character animation', 'Gene Kelly Boyle', 'GK Animates'],
  authors: [{ name: 'Gene Kelly Boyle' }],
  creator: 'Gene Kelly Boyle',
  publisher: 'GK Animates',
  metadataBase: new URL('https://stickmananimations.vercel.app'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stickmananimations.vercel.app',
    title: 'GK Animates - Professional Animation Portfolio',
    description: 'Award-winning animation portfolio by Gene Kelly Boyle. Character animations, motion graphics, and visual storytelling.',
    siteName: 'GK Animates',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'GK Animates Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GK Animates - Professional Animation Portfolio',
    description: 'Award-winning animation portfolio by Gene Kelly Boyle',
    images: ['/og-image.webp'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00BFA6' },
    { media: '(prefers-color-scheme: dark)', color: '#005A4F' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${comfortaa.variable}`}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/poppins-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/comfortaa-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//i.ytimg.com" />
        <link rel="dns-prefetch" href="//img.youtube.com" />
        
        {/* Speculation Rules API for instant navigation */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: {
                    and: [
                      { href_matches: "/*" },
                      { not: { href_matches: "/admin/*" } },
                      { not: { selector_matches: "[data-no-prerender]" } }
                    ]
                  },
                  eagerness: "moderate"
                }
              ],
              prefetch: [
                {
                  where: {
                    selector_matches: "a[href^='/']"
                  },
                  eagerness: "conservative",
                  requires: ["anonymous-client-ip-when-cross-origin"]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">
          Skip to main content
        </a>
        
        <div id="main" role="main">
          {children}
        </div>
        
        {/* Core Web Vitals monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Report Core Web Vitals
              import('https://unpkg.com/web-vitals@4/dist/web-vitals.attribution.min.js').then(({onCLS, onINP, onLCP}) => {
                function sendToAnalytics({name, value, attribution}) {
                  // Send to Vercel Analytics
                  if (window.va) {
                    va('event', name, {
                      value: Math.round(name === 'CLS' ? value * 1000 : value),
                      metric_id: attribution.id,
                      metric_value: value,
                      metric_delta: attribution.delta,
                    });
                  }
                }
                
                onCLS(sendToAnalytics);
                onINP(sendToAnalytics);
                onLCP(sendToAnalytics);
              });
            `
          }}
        />
      </body>
    </html>
  )
}
