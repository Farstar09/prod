# ROSOIDEAE Marketing Website

**Where Talent Blooms**

A premium, minimal marketing website for ROSOIDEAE (ROSO) - an esports and creative organization dedicated to cultivating exceptional talent.

## 🎨 Brand Identity

- **Name**: ROSOIDEAE (ROSO for short)
- **Tagline**: Where Talent Blooms
- **Style**: Elegant, minimal, high-end esports/creative organization
- **Feel**: Calm, confident, premium - not loud or gimmicky

### Color Palette

- **Background**: Pure White (`#FFFFFF`)
- **Primary Text**: Charcoal (`#1A1A1A`) / Near-black (`#111111`)
- **Accent**: Soft rose/lavender pink (`#D4A5C0`) - used sparingly for emphasis only

### Typography

- **Headings/Wordmark**: Georgia (elegant serif)
- **Body/UI**: System sans-serif stack
- **Style**: Airy headings, generous line spacing, no cramped text

## 🚀 Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start dev server (usually at http://localhost:5173)
npm run dev
```

The site will hot-reload as you make changes.

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build
```

This creates a `dist/` directory with optimized, hashed assets ready for deployment.

### Preview Production Build Locally

```bash
# Preview the production build
npm run preview
```

## 📦 GitHub Pages Deployment

This site is configured to deploy to GitHub Pages automatically.

### Configuration

The site uses a base path configured in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/prod/', // Must match your repository name
});
```

**Important**: If you fork or rename this repository, update the `base` value to match your repository name (e.g., `/your-repo-name/`).

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Triggers on pushes to the `main` branch
2. Installs dependencies with `npm ci`
3. Builds the site with `npm run build`
4. Deploys the `dist/` folder to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:

1. Go to the "Actions" tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Enabling GitHub Pages

1. Go to your repository Settings
2. Navigate to Pages (under Code and automation)
3. Under "Build and deployment":
   - Source: GitHub Actions
4. Save changes

The site will be available at: `https://your-username.github.io/prod/`

## 🎯 Site Structure

### Sections

1. **Navigation** (Fixed/Sticky)
   - Links: About, Ecosystem, Join
   - Social icons: Discord, X (Twitter)

2. **Hero**
   - ROSOIDEAE wordmark
   - "Where Talent Blooms" tagline
   - Subtle fade-in animation

3. **About**
   - Brief description of the organization

4. **Ecosystem**
   - Cards for: Esports, Creative, Staff, Competitive Teams
   - Soft hover effects

5. **Join**
   - Call-to-action button linking to Discord

6. **Footer**
   - Dark background
   - ROSOIDEAE branding
   - Social links (Discord, X)
   - Copyright

### Links

- **Discord**: https://discord.gg/roso
- **X (Twitter)**: https://x.com/rosoideaegg

## ♿ Accessibility

- High contrast text for readability
- Keyboard navigable
- Clear headings and landmarks
- Respects `prefers-reduced-motion` for animations
- Semantic HTML structure
- ARIA labels on interactive elements

## 🎭 Animation Philosophy

Animations are subtle and purposeful:
- **Allowed**: fade, opacity, slight Y-translate
- **Not used**: spin, bounce, flash, glitch
- All animations respect `prefers-reduced-motion` preference

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- Desktop: 1400px max-width content
- Tablet: 768px and below
- Mobile: 480px and below

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Deployment**: GitHub Pages
- **Styling**: Vanilla CSS with CSS custom properties

## 📄 License

© 2026 ROSOIDEAE. All rights reserved.

## 🔗 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
