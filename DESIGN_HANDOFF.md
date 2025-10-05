# Design Handoff Notes

This document explains how the code implementation maps to the design specifications and provides guidance for design assets and image optimization.

## 🎨 Design-to-Code Mapping

### Layout Architecture

#### Site Shell (Editorial Inset Card)

**Design Intent**: Create a magazine-like layout with content contained within a rounded card
**Implementation**:

- CSS class: `.site-shell` in `src/app/globals.css`
- Border radius: `2.5rem` (40px)
- Shadow: Layered box-shadow for depth
- Max width: `1200px` with auto margins

```css
.site-shell {
  max-width: 1200px;
  border-radius: 2.5rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.05);
}
```

#### Hero Section

**Design Intent**: Full-width hero with curved transition to content
**Implementation**:

- Component: `src/components/Hero.tsx`
- Curved divider: CSS class `.curved-divider` with SVG background
- Typography: Playfair Display for headlines, Inter for body text
- Background: Full-width image with overlay

#### Gallery Layout

**Design Intent**: Masonry-style grid with decorative accents
**Implementation**:

- Component: `src/components/GalleryTiles.tsx`
- Grid: CSS Grid with responsive columns
- Accents: `ScribbleAccent.tsx` component with SVG paths
- Images: Next.js Image component with optimization

### Color System

#### Primary Palette

```css
--page-bg: #f5f7f3; /* Pale green background */
--card-bg: #ffffff; /* White card background */
--text: #2f3430; /* Dark charcoal text */
--muted: #7a847b; /* Muted secondary text */
--primary: #9aa998; /* Dusty sage green */
--accent: #c9a78c; /* Rose-gold accent */
```

#### Usage Mapping

- **Page Background**: Applied to body and outer containers
- **Card Background**: Main content area (`.site-shell`)
- **Text Colors**: Hierarchical text styling
- **Primary**: Interactive elements, buttons, accents
- **Accent**: Decorative elements, highlights

### Typography System

#### Font Stack

```css
/* Headings */
font-family: var(--font-playfair), Georgia, serif;

/* Body Text */
font-family:
  var(--font-inter),
  -apple-system,
  BlinkMacSystemFont,
  sans-serif;
```

#### Responsive Typography

- **H1**: `3.5rem` (56px) - Hero headlines
- **H2**: `2.5rem` (40px) - Section headings
- **H3**: `2rem` (32px) - Subsection headings
- **Body**: `1rem` (16px) with `1.6` line-height

### Animation System

#### GSAP Implementation

- **ScrollTrigger**: Section-based animations
- **Reduced Motion**: Respects user preferences
- **Performance**: 60fps animations with cleanup

#### Animation Types

1. **Fade In Up**: Content reveals from bottom
2. **Slide In**: Horizontal content reveals
3. **Stagger**: Sequential element animations
4. **Parallax**: Subtle background movement

## 🎯 Component Mapping

### Hero Section

```
Design: Full-width hero with curved divider
Code: src/components/Hero.tsx
- Background image with overlay
- Curved divider SVG transition
- Animated headline with GSAP
```

### Events Section

```
Design: Card-based event layout
Code: src/components/Events.tsx
- Individual event cards
- Map integration
- Staggered animations
```

### Story Timeline

```
Design: Vertical timeline with images
Code: src/components/Story.tsx
- Alternating image-text layout
- Timeline connector lines
- Scroll-triggered animations
```

### Gallery

```
Design: Masonry grid with accents
Code: src/components/GalleryTiles.tsx
- Responsive grid layout
- Scribble accent overlays
- Optimized image loading
```

## 📁 Design Assets

### SVG Assets Location

All design assets are stored in `/public/assets/design/`:

#### Curved Divider

**File**: `curved-divider.svg`
**Usage**: Hero section transition
**Implementation**: CSS background-image in `.curved-divider` class
**ViewBox**: `0 0 1200 120`
**Colors**: Matches page background (`#f5f7f3`)

#### Scribble Accents

**File**: `scribble-accents.svg`
**Usage**: Gallery decorative elements
**Implementation**: `ScribbleAccent.tsx` component
**Variants**: curved, zigzag, wave, dots
**Opacity**: 0.1 (subtle background accent)

### Image Optimization Guidelines

#### Hero Images

**Recommended Sizes**:

- Desktop: `1920x1080px` (16:9 aspect ratio)
- Mobile: `768x432px` (16:9 aspect ratio)
- Format: WebP with JPEG fallback
- Quality: 85% for optimal file size

#### Gallery Images

**Large Tiles**:

- Size: `800x600px` (4:3 aspect ratio)
- Format: WebP with JPEG fallback
- Quality: 90% for detail preservation

**Small Tiles**:

- Size: `400x300px` (4:3 aspect ratio)
- Format: WebP with JPEG fallback
- Quality: 85% for performance

#### Story Images

**Recommended Sizes**:

- Desktop: `600x400px` (3:2 aspect ratio)
- Mobile: `400x267px` (3:2 aspect ratio)
- Format: WebP with JPEG fallback
- Quality: 90% for storytelling impact

### Asset Organization

```
public/
├── assets/
│   └── design/
│       ├── curved-divider.svg
│       └── scribble-accents.svg
├── images/
│   ├── hero/
│   │   ├── hero-image.jpg
│   │   └── italian-venue.jpg
│   ├── gallery/
│   │   ├── photography.jpg
│   │   ├── ceremony.jpg
│   │   └── [other gallery images]
│   └── story/
│       ├── engagement.jpg
│       ├── italy.jpg
│       └── met.jpg
```

## 🔧 Customization Guide

### Adjusting Site Shell

To modify the main card appearance:

```css
.site-shell {
  border-radius: 3rem; /* Increase corner radius */
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.15),
    /* Stronger shadow */ 0 10px 20px rgba(0, 0, 0, 0.1); /* Additional depth */
}
```

### Color Theme Changes

Update CSS custom properties in `globals.css`:

```css
:root {
  --page-bg: #your-color; /* Page background */
  --card-bg: #your-color; /* Card background */
  --primary: #your-color; /* Primary accent */
  --accent: #your-color; /* Secondary accent */
}
```

### Typography Adjustments

Modify font sizes in the CSS:

```css
h1 {
  font-size: 4rem;
} /* Larger hero text */
h2 {
  font-size: 3rem;
} /* Larger section headings */
```

## 📱 Responsive Behavior

### Breakpoint Strategy

- **Mobile First**: Base styles for 320px+
- **Tablet**: 768px+ adjustments
- **Desktop**: 1024px+ enhancements
- **Large Desktop**: 1440px+ optimizations

### Site Shell Responsive Behavior

- **Mobile**: Full-width with 1rem padding
- **Tablet**: Centered with 2rem padding
- **Desktop**: Max-width 1200px with auto margins
- **Ultra-wide**: Maintains max-width for readability

## 🎨 Design Token Usage

### CSS Custom Properties

All design decisions are controlled through CSS custom properties:

```css
:root {
  /* Layout */
  --site-max-width: 1200px;
  --site-border-radius: 2.5rem;
  --site-padding: 2rem;

  /* Colors */
  --color-primary: #9aa998;
  --color-accent: #c9a78c;
  --color-text: #2f3430;

  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}
```

### Tailwind Integration

Design tokens are integrated with Tailwind CSS:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      'page-bg': 'var(--page-bg)',
      'card-bg': 'var(--card-bg)',
      primary: 'var(--primary)',
      accent: 'var(--accent)',
    }
  }
}
```

## 🚀 Performance Considerations

### Image Loading Strategy

- **Hero Images**: Priority loading with `priority` prop
- **Gallery Images**: Lazy loading with `loading="lazy"`
- **Responsive Images**: Multiple sizes with `sizes` attribute
- **Format Optimization**: WebP with JPEG fallback

### Animation Performance

- **GSAP Optimization**: Use `will-change` sparingly
- **Reduced Motion**: Respect user preferences
- **Mobile Optimization**: Disable complex animations on mobile
- **Memory Management**: Proper cleanup of GSAP contexts

---

This handoff document ensures smooth collaboration between design and development teams, providing clear guidance for implementation and customization.

