'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/lib/siteConfig';
import { StoryItem } from '@/types';
import usePrefersReducedMotion from '@/lib/usePrefersReducedMotion';
import OptimizedImage from './ui/OptimizedImage';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Story Component with GSAP Horizontal Scroll Animation
 *
 * Features:
 * - Responsive: Desktop (horizontal scroll + pin), Mobile (vertical stack)
 * - Accessibility: Respects prefers-reduced-motion
 * - Performance: Uses transforms only, lazy loading, proper cleanup
 * - Parallax: Background moves at 30% of foreground speed
 * - Robust: Handles resize events and proper cleanup
 */
export default function Story() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const filmstripRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const filmstrip = filmstripRef.current;
    const bg = bgRef.current;

    if (!section || !viewport || !filmstrip) return;

    // Respect reduced motion - no GSAP animations
    if (prefersReduced) {
      // Add CSS-only fallback for reduced motion
      if (filmstrip) {
        filmstrip.style.transform = 'translateX(0)';
        filmstrip.style.transition = 'transform 0.3s ease-out';
      }
      return;
    }

    // Use matchMedia for responsive enable/disable
    ScrollTrigger.matchMedia({
      // Desktop and large tablet (min-width: 768px)
      '(min-width: 768px)': () => {
        // Compute translate distance dynamically
        const totalScrollWidth = Math.max(0, filmstrip.scrollWidth);
        const visibleWidth = viewport.clientWidth;
        const translateX = Math.max(0, totalScrollWidth - visibleWidth);

        // Guard: nothing to animate if content fits in viewport
        if (translateX <= 0) return;

        // Create timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: viewport,
            start: 'top top',
            end: () => `+=${translateX + window.innerHeight * 0.6}`,
            scrub: 0.6,
            pin: viewport,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Filmstrip translate (foreground)
        tl.to(
          filmstrip,
          {
            x: -translateX,
            ease: 'none',
          },
          0
        );

        // Parallax background moves slower (30% of foreground movement)
        if (bg) {
          tl.to(
            bg,
            {
              x: -translateX * 0.3,
              ease: 'none',
            },
            0
          );
        }

        // Handle resize events
        const handleResize = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener('resize', handleResize);

        // Cleanup for this media query
        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === viewport) {
              st.kill();
            }
          });
          window.removeEventListener('resize', handleResize);
        };
      },

      // Mobile (max-width: 767px) - disable pin and timeline
      '(max-width: 767px)': () => {
        // Ensure filmstrip uses CSS vertical layout (no pin)
        // No JS timeline required here - CSS handles the layout
        return () => {
          // Cleanup any existing ScrollTriggers for mobile
          ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === viewport) {
              st.kill();
            }
          });
        };
      },
    });

    // Cleanup on unmount
    return () => {
      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="story-section py-16 px-6"
      role="region"
      aria-labelledby="story-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="story-heading"
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-text"
        >
          Our Story
        </h2>

        <div
          ref={viewportRef}
          className="story-viewport relative overflow-hidden h-[400px] md:h-[500px]"
        >
          {/* Background parallax layer (decorative) */}
          <div
            ref={bgRef}
            className="story-bg absolute inset-0 -z-10 will-change-transform"
            aria-hidden="true"
          >
            {/* Optional: Add a subtle background pattern or image */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"
              aria-hidden="true"
            ></div>
          </div>

          {/* Filmstrip: horizontal on desktop, vertical on mobile */}
          <div
            ref={filmstripRef}
            className="filmstrip flex md:flex-row flex-col gap-8 will-change-transform h-full md:items-center"
          >
            {siteConfig.storyItems.map((item: StoryItem, index) => (
              <article
                key={item.id}
                className="story-item w-[320px] md:w-[400px] flex-shrink-0 bg-card rounded-lg shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover-lift"
              >
                <div className="relative h-[200px] md:h-[250px]">
                  <OptimizedImage
                    src={item.imageUrl}
                    alt={`${item.title} - ${item.year}`}
                    fill
                    className="object-cover"
                    priority={index === 0} // Only first image gets priority
                    sizes="(max-width: 768px) 320px, 400px"
                  />
                </div>
                <div className="p-6">
                  <time className="block text-sm text-muted mb-2">
                    {item.year}
                  </time>
                  <h3 className="text-xl font-bold mb-3 text-text">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
