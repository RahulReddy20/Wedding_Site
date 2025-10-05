import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  quality?: number;
}

/**
 * OptimizedImage component - Enhanced wrapper around Next.js Image
 * with sensible defaults and responsive sizing
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  fill = false,
  sizes,
  width,
  height,
  quality = 85,
}: OptimizedImageProps) {
  // Enforce alt text requirement
  if (!alt || alt.trim() === '') {
    console.warn('OptimizedImage: alt text is required for accessibility');
  }

  // Default responsive sizes if not provided
  const defaultSizes =
    sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={defaultSizes}
        quality={quality}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 400}
      className={className}
      priority={priority}
      sizes={defaultSizes}
      quality={quality}
    />
  );
}
