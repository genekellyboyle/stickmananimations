# Stickman Animation Website - Project Structure

## 🏗️ Recommended Project Structure

```
stickman-animation-website/
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── StickmanAnimation.jsx
│   │   │   ├── AnimationController.jsx
│   │   │   └── AnimationTimeline.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Modal.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       └── Contact.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── components.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── utils/
│   │   ├── animationHelpers.js
│   │   ├── performanceUtils.js
│   │   └── responsiveHelpers.js
│   ├── hooks/
│   │   ├── useAnimation.js
│   │   ├── useIntersectionObserver.js
│   │   └── usePerformance.js
│   └── pages/
│       ├── index.jsx
│       ├── about.jsx
│       └── contact.jsx
├── public/
│   ├── images/
│   ├── animations/
│   └── favicon.ico
├── package.json
├── vercel.json
├── .cursorrules
├── .cursorignore
└── README.md
```

## 🎯 Key Components for Animation Website

### Animation Components
- **StickmanAnimation**: Main animation component with canvas/WebGL rendering
- **AnimationController**: Controls play/pause/speed of animations
- **AnimationTimeline**: Visual timeline for animation sequences

### Layout Components
- **Header**: Navigation and branding
- **Footer**: Links and social media
- **Navigation**: Mobile-friendly navigation menu

### UI Components
- **Button**: Interactive buttons with hover effects
- **Card**: Content containers with animations
- **Modal**: Overlay dialogs for additional content

## 🎨 Animation-Focused Features

### Performance Optimizations
- Use `requestAnimationFrame` for smooth animations
- Implement lazy loading for heavy assets
- Use CSS transforms instead of layout changes
- Optimize for 60fps performance

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Breakpoint system: xs(<576px), sm(≥576px), md(≥768px), lg(≥992px), xl(≥1200px)

### Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

## 🚀 Vercel Deployment

### Build Process
- All builds handled by Vercel CI/CD
- Never run `npm run build` locally
- Use `git push` to trigger deployments
- Environment variables set in Vercel dashboard

### File Organization
- Keep source code in `src/` directory
- Public assets in `public/` directory
- Configuration files in root directory
- Use `.vercelignore` for deployment exclusions

## 🔧 Development Workflow

1. **Local Development**: Code and test locally
2. **Version Control**: Commit changes to Git
3. **Push to GitHub**: Trigger Vercel deployment
4. **Automatic Build**: Vercel handles build and deployment
5. **Live Preview**: View changes on live site

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 576px) { /* Small devices */ }
@media (min-width: 768px) { /* Medium devices */ }
@media (min-width: 992px) { /* Large devices */ }
@media (min-width: 1200px) { /* Extra large devices */ }
```

## 🎭 Animation Best Practices

- Use CSS transforms for smooth animations
- Implement easing functions for natural movement
- Provide animation controls for user preference
- Ensure animations don't interfere with content readability
- Test performance on various devices
