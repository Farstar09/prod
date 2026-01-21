# ROSOIDEAE - Modern Animated Front Page

A modern, Sentinels.gg-inspired front-end for the ROSOIDEAE esports organization.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173/prod/` (or another port if 5173 is in use).

## 🎨 Color Palette

The site uses a color system derived from the ROSO logo:

### Primary Colors
- **Deep Red (Primary Brand)**: `#8B0000` (dark red), `#DC143C` (crimson)
- **Orange (Accent/Borders)**: `#FF8C00` (dark orange), `#FF6B35` (vibrant orange)
- **Green (Small Accents)**: `#228B22` (forest green), `#7CB342` (light green)

### Neutral Colors
- **Charcoal**: `#1A1A1A` (primary text)
- **White**: `#FFFFFF` (backgrounds)
- **Off-White**: `#F5F5F5` (secondary backgrounds)

All colors are defined as CSS variables in `src/styles/theme.css` for easy customization.

## 📁 Project Structure

```
/prod/
├── public/
│   └── assets/
│       └── rosologo.svg          # Main ROSO logo
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Navigation with logo, responsive menu
│   │   ├── Header.css
│   │   ├── Hero.tsx              # Animated hero section with logo
│   │   ├── Hero.css
│   │   ├── Features.tsx          # Feature showcase cards
│   │   ├── Features.css
│   │   ├── TeamsGrid.tsx         # Team cards with hover effects
│   │   ├── TeamsGrid.css
│   │   ├── NewsGrid.tsx          # News/blog card grid
│   │   ├── NewsGrid.css
│   │   ├── Footer.tsx            # Enhanced footer with social links
│   │   └── Footer.css
│   ├── styles/
│   │   └── theme.css             # CSS variables and theme system
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # Global styles
│   └── main.tsx                  # Entry point
├── index.html                    # HTML template
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🖼️ Logo Asset

The ROSO logo is located at:
- **Path**: `/public/assets/rosologo.svg`
- **Format**: SVG (scalable vector graphics)
- **Colors**: Deep red gradient with orange outline and green accents

To reference the logo in components:
```tsx
<img src="/prod/assets/rosologo.svg" alt="ROSO Logo" />
```

## 🎭 Animations

The site uses **Framer Motion** for smooth, performant animations:

### Hero Section
- Logo entrance with scale and glow effect
- Staggered text reveal
- Pulsing glow animation on logo
- Scroll indicator bounce

### Features & Teams
- Scroll-triggered staggered reveals
- Hover effects with scale and tilt transforms
- Glow effects on hover

### Navigation
- Smooth scroll to anchor sections
- Responsive hamburger menu with slide-in animation
- Underline hover effects

### Performance
- Animations use CSS transforms for GPU acceleration
- Intersection Observer for scroll-triggered animations
- Minimal re-renders with proper React optimization

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Desktop**: 1400px+ (max-width container)
- **Tablet**: 768px - 1399px
- **Mobile**: < 768px (hamburger menu, stacked sections)

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- ARIA labels on all interactive elements
- Keyboard navigation support (Tab, Enter, Escape)
- Alt text on all images
- Focus-visible outlines for keyboard users
- Sufficient color contrast ratios

## 🛠️ Technologies

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Framer Motion**: Animation library
- **CSS Variables**: Theming system

## 📦 Dependencies Added

This PR adds the following dependencies:

### Production Dependencies
- `framer-motion`: ^11.11.17 - Animation library for React

### Development Dependencies
- `typescript`: ^5.6.3 - TypeScript compiler
- `@types/react`: ^18.3.18 - React type definitions
- `@types/react-dom`: ^18.3.5 - React DOM type definitions

## 🔍 Notes

### Navigation
- No "Shop" or "Society" links (removed as per requirements)
- Single-page design with smooth anchor navigation
- Sections: Hero, About, Teams, News, Media (Footer)

### Base Path
- The site uses base path `/prod/` (configured in `vite.config.ts`)
- This is required for GitHub Pages deployment

### Color Variables
To customize colors, edit `src/styles/theme.css`:
```css
:root {
  --color-primary: #DC143C;
  --color-accent-orange: #FF8C00;
  --color-highlight-green: #228B22;
  /* ... etc */
}
```

## 🚢 Deployment

To deploy to GitHub Pages:
```bash
npm run build
# Deploy the `dist` folder to GitHub Pages
```

The base path `/prod/` is already configured for GitHub Pages deployment at `https://username.github.io/prod/`.

## 📝 License

© 2026 ROSOIDEAE. All rights reserved.
