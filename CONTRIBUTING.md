# Contributing to Wedding Site

Thank you for your interest in contributing to this wedding website project! This document outlines the development process, QA checklist, and guidelines for maintaining code quality.

## 🚀 Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd wedding-site

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📋 QA Checklist

### Design & Layout Testing

#### ✅ Site Shell Inset Card

- [ ] **Desktop (1440px+)**: Card properly centered with appropriate margins
- [ ] **Large Desktop (1200px-1439px)**: Card maintains 2.5rem border-radius
- [ ] **Tablet (768px-1023px)**: Card adapts with proper padding
- [ ] **Mobile (320px-767px)**: Card maintains rounded corners, no overflow
- [ ] **Ultra-wide (1920px+)**: Card doesn't exceed max-width of 1200px
- [ ] **Shadow consistency**: Box-shadow renders correctly across all breakpoints

#### ✅ Hero Section & Curved Divider

- [ ] **Curved divider transition**: Smooth SVG transition from hero to content
- [ ] **Headline typography**: Playfair Display renders correctly
- [ ] **Background image**: Hero image loads and displays properly
- [ ] **Overlay text**: White text is readable over background image
- [ ] **Mobile hero**: Image scales appropriately on mobile devices

#### ✅ Location Grid & Gallery

- [ ] **Event cards spacing**: Consistent padding and margins between cards
- [ ] **Gallery tile placement**: Masonry layout works correctly
- [ ] **Image aspect ratios**: Gallery images maintain proper proportions
- [ ] **Scribble accents**: Decorative elements position correctly
- [ ] **Hover states**: Interactive elements have proper hover effects

### Performance Testing

#### ✅ Lighthouse Audit

Run Lighthouse audit and verify:

- [ ] **Performance**: Score 90+ (check for image optimization)
- [ ] **Accessibility**: Score 95+ (check ARIA labels and color contrast)
- [ ] **Best Practices**: Score 90+ (check for security headers)
- [ ] **SEO**: Score 90+ (check meta tags and structured data)

#### ✅ Image Optimization

- [ ] **Font Display**: `font-display: swap` implemented for Google Fonts
- [ ] **LCP (Largest Contentful Paint)**: Hero image loads within 2.5s
- [ ] **Image Formats**: WebP images with JPEG fallbacks
- [ ] **Lazy Loading**: Below-the-fold images load on demand
- [ ] **Image Sizing**: Images are appropriately sized for their containers

#### ✅ Animation Performance

- [ ] **Reduced Motion**: Animations respect `prefers-reduced-motion: reduce`
- [ ] **GSAP Performance**: ScrollTrigger animations are smooth (60fps)
- [ ] **Mobile Animations**: Complex animations are disabled on mobile
- [ ] **Animation Cleanup**: No memory leaks from GSAP contexts

### Accessibility Testing

#### ✅ Screen Reader Testing

- [ ] **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- [ ] **ARIA Labels**: Interactive elements have descriptive labels
- [ ] **Focus Management**: Keyboard navigation works correctly
- [ ] **Alt Text**: All images have meaningful alt attributes

#### ✅ Keyboard Navigation

- [ ] **Tab Order**: Logical tab sequence through all interactive elements
- [ ] **Focus Indicators**: Visible focus states for all interactive elements
- [ ] **Skip Links**: Skip to main content functionality
- [ ] **Form Accessibility**: RSVP form is fully keyboard accessible

### Cross-Browser Testing

#### ✅ Browser Compatibility

- [ ] **Chrome**: Latest version (120+)
- [ ] **Firefox**: Latest version (120+)
- [ ] **Safari**: Latest version (17+)
- [ ] **Edge**: Latest version (120+)
- [ ] **Mobile Safari**: iOS 15+
- [ ] **Chrome Mobile**: Android 10+

### Content & Functionality

#### ✅ Content Accuracy

- [ ] **Wedding Details**: Date, time, and venue information is correct
- [ ] **Contact Information**: RSVP and registry links work
- [ ] **Story Timeline**: All story items have proper images and descriptions
- [ ] **Event Information**: All events have complete details

#### ✅ Form Functionality

- [ ] **RSVP Form**: Form submission works correctly
- [ ] **Validation**: Required fields are properly validated
- [ ] **Error Handling**: User-friendly error messages
- [ ] **Success States**: Confirmation messages display correctly

## 🛠 Development Guidelines

### Code Style

#### TypeScript

- Use strict TypeScript configuration
- Define proper interfaces for all data structures
- Avoid `any` types - use proper typing

#### React Components

- Use functional components with hooks
- Implement proper prop types
- Use meaningful component and variable names
- Keep components focused and single-purpose

#### CSS & Styling

- Use Tailwind CSS utility classes
- Define custom CSS variables for design tokens
- Follow mobile-first responsive design
- Use semantic class names

### File Organization

```
src/
├── app/                 # Next.js app router
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── [feature].tsx   # Feature-specific components
├── lib/               # Utilities and configuration
├── types/             # TypeScript definitions
└── styles/            # Global styles (if needed)
```

### Git Workflow

#### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

#### Commit Messages

Use conventional commits:

```
feat: add RSVP form validation
fix: resolve mobile layout issue
docs: update README with setup instructions
refactor: extract gallery component logic
```

### Testing Checklist

#### Before Committing

- [ ] Code compiles without TypeScript errors
- [ ] ESLint passes without warnings
- [ ] Prettier formatting is applied
- [ ] All tests pass (if applicable)
- [ ] Manual testing on multiple devices

#### Before Deployment

- [ ] Build process completes successfully
- [ ] All images and assets load correctly
- [ ] Performance metrics meet requirements
- [ ] Accessibility standards are met
- [ ] Cross-browser compatibility verified

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment Details**
   - Browser and version
   - Operating system
   - Device type (desktop/mobile)
   - Screen resolution

2. **Steps to Reproduce**
   - Clear, numbered steps
   - Expected vs. actual behavior
   - Screenshots or videos if helpful

3. **Error Information**
   - Console errors
   - Network request failures
   - Performance issues

## 💡 Feature Requests

When suggesting new features:

1. **Problem Description**
   - What problem does this solve?
   - Who would benefit from this feature?

2. **Proposed Solution**
   - Detailed description of the feature
   - Mockups or wireframes if applicable
   - Technical considerations

3. **Implementation Notes**
   - Estimated complexity
   - Dependencies or breaking changes
   - Alternative approaches considered

## 📞 Contact

For questions about contributing or the development process, please reach out to the project maintainers.

---

**Happy coding! 🎉**

