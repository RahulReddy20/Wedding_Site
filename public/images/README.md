# Wedding Site Images

This directory contains all the images for the wedding website. Images are organized by category for easy management.

## Directory Structure

```
public/images/
├── hero/           # Hero section background images
├── story/          # Our story section images
├── gallery/        # Gallery tiles and service images
└── venues/         # Featured venue images
```

## Image Requirements

### Hero Section (`/hero/`)

- **couple-hero.jpg** - Main hero background image (1920x1080px recommended)
- High resolution, elegant couple photo
- Should work well with overlay text

### Story Section (`/story/`)

- **met.jpg** - How we met photo (400x400px recommended)
- **engagement.jpg** - Engagement photo (400x400px recommended)
- **italy.jpg** - Favorite adventure photo (400x400px recommended)
- Square format works best for circular display

### Gallery Section (`/gallery/`)

- **photography.jpg** - Photography service icon (200x200px)
- **ceremony.jpg** - Ceremony service icon (200x200px)
- **design.jpg** - Wedding design service icon (200x200px)
- Small square images for service tiles

### Venues Section (`/venues/`)

- **villa-balbianello.jpg** - Featured venue image (800x600px recommended)
- High quality venue photos
- Landscape orientation preferred

## Image Optimization Tips

1. **Format**: Use JPEG for photos, PNG for graphics with transparency
2. **Compression**: Optimize for web (80-90% quality)
3. **Dimensions**: Use the recommended sizes above
4. **File Names**: Use descriptive, lowercase names with hyphens
5. **Alt Text**: Update the `alt` attributes in components when adding real images

## Adding Images

1. Place images in the appropriate subdirectory
2. Update the file paths in `src/lib/siteConfig.ts` if needed
3. Test the website to ensure images load correctly
4. Consider using Next.js `<Image />` component for better performance

## Current Placeholder Paths

The site is currently configured to look for these images:

- `/images/story/met.jpg`
- `/images/story/engagement.jpg`
- `/images/story/italy.jpg`
- `/images/gallery/photography.jpg`
- `/images/gallery/ceremony.jpg`
- `/images/gallery/design.jpg`
- `/images/venues/villa-balbianello.jpg`
