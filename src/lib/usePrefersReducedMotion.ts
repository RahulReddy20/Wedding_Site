'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user prefers reduced motion
 * Returns true if the user has set prefers-reduced-motion: reduce
 */
export default function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the media query is supported
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

      // Set initial value
      setPrefersReducedMotion(mediaQuery.matches);

      // Listen for changes
      const handleChange = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches);
      };

      // Add listener
      mediaQuery.addEventListener('change', handleChange);

      // Cleanup
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return prefersReducedMotion;
}
