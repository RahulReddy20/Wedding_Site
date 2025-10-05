'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePrefersReducedMotion from '@/lib/usePrefersReducedMotion';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CurvedDividerProps {
  className?: string;
  flip?: 'none' | 'invert';
  color?: string;
  animateOnScroll?: boolean;
}

export default function CurvedDivider({
  className = '',
  flip = 'none',
  color = 'var(--card-bg)',
  animateOnScroll = true,
}: CurvedDividerProps) {
  const dividerRef = useRef<SVGSVGElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!animateOnScroll || prefersReduced || !dividerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        dividerRef.current,
        {
          y: 0,
          scale: 1,
        },
        {
          y: -12,
          scale: 1.02,
          duration: 0.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: dividerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [animateOnScroll, prefersReduced]);

  const getPathData = () => {
    if (flip === 'invert') {
      // Inverted arch (concave)
      return 'M0,0 L0,100 L1200,100 L1200,0 C1200,0 1000,20 600,20 C200,20 0,0 0,0 Z';
    }
    // Default convex arch
    return 'M0,0 L0,100 L1200,100 L1200,0 C1200,0 1000,80 600,80 C200,80 0,0 0,0 Z';
  };

  return (
    <svg
      ref={dividerRef}
      className={`curved-divider w-full h-24 md:h-32 xl:h-44 curved-divider-shadow ${className}`}
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ color }}
    >
      <path
        d={getPathData()}
        fill="currentColor"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
