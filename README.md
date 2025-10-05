# Wedding Site

A modern, responsive wedding website built with Next.js 15, featuring an elegant editorial inset-card layout design. The site showcases the couple's story, wedding events, and provides RSVP functionality with beautiful animations and optimized performance.

## 🎨 Design Overview

This wedding site features a unique **editorial inset-card layout** that creates a sophisticated, magazine-like appearance. The main content is contained within a rounded card that sits on a subtle background, creating visual depth and focus.

### Key Design Features

- **Site Shell**: The main content area uses a large rounded card (2.5rem border-radius) with subtle shadows
- **Curved Dividers**: Custom SVG dividers that create smooth transitions between sections
- **Gallery Tiles**: Masonry-style layout with decorative scribble accents
- **Responsive Design**: Optimized for all screen sizes from mobile to ultra-wide displays
- **Accessibility**: Full support for reduced motion preferences and screen readers

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build & Deploy

**Build for production:**

```bash
npm run build
```

**Start production server:**

```bash
npm start
```

**Deploy to Vercel (Recommended):**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo to Vercel for automatic deployments
```

## 🎨 Design Tokens & Customization

The site uses CSS custom properties for consistent theming. All design tokens are defined in `src/app/globals.css`:

### Color Palette

```css
:root {
  --page-bg: #f5f7f3; /* Pale green page background */
  --card-bg: #ffffff; /* White inset card background */
  --text: #2f3430; /* Dark charcoal text */
  --muted: #7a847b; /* Muted secondary text */
  --primary: #9aa998; /* Dusty sage green accent */
  --accent: #c9a78c; /* Rose-gold accent color */
  --footer-bg: #4f544f; /* Dark footer background */
}
```

### Site Shell Customization

To adjust the main card appearance:

```css
.site-shell {
  border-radius: 2.5rem; /* Adjust corner radius */
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    /* Main shadow */ 0 8px 16px rgba(0, 0, 0, 0.05); /* Subtle shadow */
}
```

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Responsive scaling**: Fluid typography with clamp() functions

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Hero.tsx         # Hero section with curved divider
│   ├── Events.tsx       # Wedding events schedule
│   ├── Story.tsx        # Couple's story timeline
│   ├── Rsvp.tsx         # RSVP form
│   └── Footer.tsx       # Site footer
├── lib/                  # Utilities
│   ├── siteConfig.ts    # Site content & configuration
│   └── usePrefersReducedMotion.ts
└── types/               # TypeScript definitions
```

## 🎯 Key Components

### Hero Section

- Full-width background image with overlay
- Curved divider transition to content
- Animated headline with GSAP

### Events Section

- Card-based layout for wedding events
- Interactive map links
- Staggered animations on scroll

### Gallery

- Masonry grid layout
- Decorative scribble accents
- Optimized image loading

### Story Timeline

- Vertical timeline design
- Image-text alternating layout
- Smooth scroll animations

## 🛠 Development

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

### Performance Features

- **Image Optimization**: Next.js Image component with WebP support
- **Font Optimization**: Google Fonts with display=swap
- **Animation Performance**: GSAP with ScrollTrigger
- **Bundle Optimization**: Turbopack for faster builds

### Accessibility

- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color combinations

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🎨 Design Assets

Design assets and SVG files are stored in `/public/assets/design/`:

- `curved-divider.svg` - Hero section divider
- `scribble-accents.svg` - Gallery decorative elements

## 📸 Image Optimization

### Recommended Image Sizes

**Hero Images:**

- Desktop: 1920x1080px (16:9 aspect ratio)
- Mobile: 768x432px

**Gallery Images:**

- Large tiles: 800x600px
- Small tiles: 400x300px
- Format: WebP with JPEG fallback

### Image Loading Strategy

- Lazy loading for below-the-fold images
- Priority loading for hero images
- Responsive images with multiple sizes

## 🔧 Configuration

Site content is managed in `src/lib/siteConfig.ts`. Update the following:

- Couple names and wedding details
- Event information and venues
- Story timeline items
- Gallery images and testimonials
- RSVP and registry URLs

## 📄 License

Private project - All rights reserved.
